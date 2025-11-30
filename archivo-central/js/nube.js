// js/nube.js

// ========== NAVBAR SCROLL EFFECT ==========
function setupNavbarScroll() {
    window.addEventListener("scroll", function () {
        const navbar = document.getElementById("navbar");
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });
}

// ========== HAMBURGER MENU ==========
function setupHamburgerMenu() {
    const hamburgerMenu = document.getElementById("hamburger-menu");
    const navLinks = document.getElementById("nav-links");

    // Función para cerrar el menú
    function closeMenu() {
        hamburgerMenu.classList.remove("active");
        navLinks.classList.remove("active");
        document.body.style.overflow = "auto";
        // Remover el event listener del overlay
        document.removeEventListener('click', handleOutsideClick);
    }

    // Función para manejar clics fuera del menú
    function handleOutsideClick(event) {
        // Verificar si el clic fue fuera del menú y del botón hamburguesa
        if (!navLinks.contains(event.target) && !hamburgerMenu.contains(event.target)) {
            closeMenu();
        }
    }

    // Verificar que los elementos existen antes de agregar event listeners
    if (hamburgerMenu && navLinks) {
        hamburgerMenu.addEventListener("click", function (event) {
            event.stopPropagation(); // Prevenir que el clic se propague al documento
            
            const isActive = hamburgerMenu.classList.contains("active");
            
            if (isActive) {
                closeMenu();
            } else {
                hamburgerMenu.classList.add("active");
                navLinks.classList.add("active");
                document.body.style.overflow = "hidden";
                // Agregar event listener para detectar clics fuera del menú
                setTimeout(() => {
                    document.addEventListener('click', handleOutsideClick);
                }, 10);
            }
        });

        // Cerrar menú al hacer clic en un enlace (en dispositivos móviles)
        const navLinksItems = navLinks.querySelectorAll("a");
        navLinksItems.forEach(link => {
            link.addEventListener("click", function() {
                if (window.innerWidth <= 768) {
                    closeMenu();
                }
            });
        });
    }
}

// ========== SCROLL ANIMATIONS ==========
function setupAnimations() {
    // Verificar si el navegador soporta Intersection Observer
    if (!('IntersectionObserver' in window)) {
        // Fallback para navegadores que no soportan Intersection Observer
        const elementsToAnimate = document.querySelectorAll(
            ".fade-in-up"
        );
        
        elementsToAnimate.forEach((el, index) => {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        });
        return;
    }

    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, observerOptions);

    // Observe elements with animation classes
    document.querySelectorAll(".fade-in-up").forEach((el) => {
        el.style.opacity = "0";
        el.style.transform = "translateY(30px)";
        el.style.transition = "all 0.6s ease-out";
        observer.observe(el);
    });
}

// ========== SMOOTH SCROLL ==========
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();

            const targetId = this.getAttribute("href");
            if (targetId === "#") return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: "smooth",
                });

                // Close mobile menu if open
                const hamburgerMenu = document.getElementById("hamburger-menu");
                const navLinks = document.getElementById("nav-links");
                if (hamburgerMenu && navLinks) {
                    closeMenu();
                }
            }
        });
    });
}

// ========== MODAL PARA IMÁGENES ==========
function setupImageModal() {
    const integrationImage = document.getElementById('integration-image');
    const modal = document.getElementById('image-modal');
    const modalImage = document.getElementById('modal-image');
    const closeModal = document.getElementById('modal-close');
    
    // Verificar que los elementos existen
    if (!integrationImage || !modal || !modalImage || !closeModal) {
        console.error("No se encontraron elementos del modal de imagen");
        return;
    }
    
    // Abrir modal al hacer clic en la imagen
    integrationImage.addEventListener('click', function() {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevenir scroll
    });
    
    // Cerrar modal
    closeModal.addEventListener('click', function() {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto'; // Restaurar scroll
    });
    
    // Cerrar modal al hacer clic fuera de la imagen
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
    
    // Cerrar modal con tecla Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
}

// ========== RESPONSIVE BEHAVIOR ==========
function handleResize() {
    const navLinks = document.getElementById("nav-links");
    const hamburgerMenu = document.getElementById("hamburger-menu");
    
    // Si la pantalla es mayor a 768px, asegurarse de que el menú esté visible
    if (window.innerWidth > 768) {
        if (navLinks) {
            navLinks.style.display = "flex";
            if (hamburgerMenu) {
                hamburgerMenu.classList.remove("active");
                navLinks.classList.remove("active");
            }
        }
        document.body.style.overflow = "auto";
    } else {
        // En móviles, ocultar el menú por defecto
        if (navLinks && !navLinks.classList.contains("active")) {
            navLinks.style.display = "none";
        }
    }
}

// Función para cerrar el menú (necesaria para smooth scroll)
function closeMenu() {
    const hamburgerMenu = document.getElementById("hamburger-menu");
    const navLinks = document.getElementById("nav-links");
    
    if (hamburgerMenu && navLinks) {
        hamburgerMenu.classList.remove("active");
        navLinks.classList.remove("active");
        document.body.style.overflow = "auto";
    }
}

// ========== INITIALIZE ALL FUNCTIONALITY ==========
function init() {
    setupNavbarScroll();
    setupHamburgerMenu();
    setupAnimations();
    setupSmoothScroll();
    setupImageModal();
    handleResize();

    // Agregar event listener para resize
    window.addEventListener("resize", handleResize);
}

// Inicializar cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", init);