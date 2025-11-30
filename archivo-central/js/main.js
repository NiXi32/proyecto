// js/main.js

// =============================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// =============================================
function setupAnimations() {
    // Verificar si el navegador soporta Intersection Observer
    if (!('IntersectionObserver' in window)) {
        // Fallback para navegadores que no soportan Intersection Observer
        const elementsToAnimate = document.querySelectorAll(
            ".feature-card, .process-step, .testimonio-card, .hero-text, .hero-visual, .section-title"
        );
        
        elementsToAnimate.forEach((el, index) => {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        });
        return;
    }

    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
                // Dejar de observar una vez que la animación se ha activado
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Elementos a animar - seleccionar correctamente
    const elementsToAnimate = document.querySelectorAll(
        ".feature-card, .process-step, .testimonio-card, .hero-text, .hero-visual, .section-title"
    );

    elementsToAnimate.forEach((el) => {
        // Aplicar estilos iniciales para la animación
        el.style.opacity = "0";
        el.style.transform = "translateY(30px)";
        el.style.transition = "all 0.6s ease-out";

        // Observar el elemento
        observer.observe(el);
    });

    console.log(
        `Observando ${elementsToAnimate.length} elementos para animación`
    );
}

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

// ========== VIDEO MODAL ==========
function setupVideoModal() {
    const videoTrigger = document.getElementById("videoTrigger");
    const videoModal = document.getElementById("videoModal");
    const closeModal = document.getElementById("closeModal");
    const modalVideoIframe = document.getElementById("modalVideoIframe");
    const originalIframe = document.querySelector(
        ".video-container iframe"
    );

    // Verificar que los elementos existen
    if (!videoTrigger || !videoModal || !closeModal || !modalVideoIframe || !originalIframe) {
        console.error("No se encontraron elementos del modal de video");
        return;
    }

    // Obtener la URL del video original
    const originalSrc = originalIframe.src;

    // Abrir modal al hacer clic en el video
    videoTrigger.addEventListener("click", function () {
        videoModal.classList.add("active");
        // Cargar el video con autoplay en el modal
        modalVideoIframe.src = originalSrc + "&autoplay=1";
        document.body.style.overflow = "hidden"; // Prevenir scroll
    });

    // Cerrar modal
    function closeVideoModal() {
        videoModal.classList.remove("active");
        // Detener el video al cerrar el modal
        modalVideoIframe.src = "about:blank";
        document.body.style.overflow = "auto"; // Permitir scroll nuevamente
    }

    closeModal.addEventListener("click", closeVideoModal);

    // Cerrar modal al hacer clic fuera del video
    videoModal.addEventListener("click", function (e) {
        if (e.target === videoModal) {
            closeVideoModal();
        }
    });

    // Cerrar modal con la tecla Escape
    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape" && videoModal.classList.contains("active")) {
            closeVideoModal();
        }
    });
}

// ========== CONTACT FORM HANDLING ==========
function setupContactForm() {
    const contactForm = document.getElementById("contactForm");
    const confirmationMessage = document.getElementById(
        "confirmationMessage"
    );

    if (!contactForm) return;

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const nombre = document.getElementById("nombre").value;
        const correo = document.getElementById("correo").value;
        const asunto = document.getElementById("asunto").value;
        const mensaje = document.getElementById("mensaje").value;

        if (!nombre || !correo || !asunto || !mensaje) {
            alert("Por favor, complete todos los campos obligatorios.");
            return;
        }

        const municipalidad = document.getElementById("municipalidad").value;
        const asuntoSelect = document.getElementById("asunto");
        const asuntoTexto =
            asuntoSelect.options[asuntoSelect.selectedIndex].text;

        const cuerpo =
            `Nombre: ${nombre}\n` +
            `Correo: ${correo}\n` +
            `Municipalidad: ${municipalidad}\n` +
            `Asunto: ${asuntoTexto}\n\n` +
            `Mensaje:\n${mensaje}`;

        const asuntoCodificado = encodeURIComponent(asuntoTexto);
        const cuerpoCodificado = encodeURIComponent(cuerpo);

        const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=rs.siamsoft@gmail.com&su=${asuntoCodificado}&body=${cuerpoCodificado}`;

        if (confirmationMessage) {
            confirmationMessage.style.display = "block";
        }

        setTimeout(function () {
            window.open(gmailLink, "_blank");
            contactForm.reset();

            if (confirmationMessage) {
                setTimeout(function () {
                    confirmationMessage.style.display = "none";
                }, 5000);
            }
        }, 1000);
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
    setupAnimations();
    setupNavbarScroll();
    setupHamburgerMenu();
    setupVideoModal();
    setupContactForm();
    setupSmoothScroll();
    handleResize();

    // Agregar event listener para resize
    window.addEventListener("resize", handleResize);
}

// Inicializar cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", init);