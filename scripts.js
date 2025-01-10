// Esperar a que el DOM se cargue completamente
document.addEventListener('DOMContentLoaded', () => {
    // ------------------------------
    // Botones de categoría
    // ------------------------------
    const categoryButtons = document.querySelectorAll('.categories button');
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert(`Has seleccionado la categoría: ${button.textContent}`);
        });
    });

    // ------------------------------
    // Función de búsqueda
    // ------------------------------
    const searchInput = document.querySelector('.search-bar input');
    const searchButton = document.querySelector('.search-bar button');
    searchButton.addEventListener('click', () => {
        const query = searchInput.value.trim();
        if (query) {
            alert(`Buscando productos relacionados con: ${query}`);
        } else {
            alert('Por favor, ingresa un término de búsqueda.');
        }
    });

    // ------------------------------
    // Selección de talla
    // ------------------------------
    const productButtons = document.querySelectorAll('.product button');
    productButtons.forEach(button => {
        button.addEventListener('click', () => {
            const size = prompt('Selecciona tu talla (S, M, L, XL):');
            if (size) {
                alert(`Talla seleccionada: ${size}`);
            } else {
                alert('No seleccionaste ninguna talla.');
            }
        });
    });

    // ------------------------------
    // Cambio de imágenes de un producto (vistas múltiples)
    // ------------------------------
    document.querySelectorAll('.product img').forEach(img => {
        const imageList = img.dataset.images ? img.dataset.images.split(',') : [];
        let currentIndex = 0;

        img.addEventListener('click', () => {
            if (imageList.length > 1) {
                img.classList.add('rotate');

                setTimeout(() => {
                    currentIndex = (currentIndex + 1) % imageList.length;
                    img.src = imageList[currentIndex];
                    img.classList.remove('rotate');
                }, 500);
            } else {
                console.warn('No hay imágenes adicionales configuradas para este producto.');
            }
        });
    });

    // ------------------------------
    // Menús desplegables
    // ------------------------------
    const dropdownButtons = document.querySelectorAll('.dropdown-button');

    dropdownButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.stopPropagation(); // Evita que el clic se propague al documento

            const menuId = button.dataset.menu;
            const menu = document.getElementById(menuId);

            // Cerrar otros menús abiertos
            document.querySelectorAll('.dropdown-menu').forEach(dropdown => {
                if (dropdown !== menu) {
                    dropdown.classList.remove('visible');
                }
            });

            // Alternar la visibilidad del menú actual
            menu.classList.toggle('visible');
        });
    });

    // Cerrar los menús al hacer clic fuera
    document.addEventListener('click', () => {
        document.querySelectorAll('.dropdown-menu').forEach(menu => {
            menu.classList.remove('visible');
        });
    });
});
