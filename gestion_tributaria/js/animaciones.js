document.addEventListener('DOMContentLoaded', function() {

    // =============================================
    // EFECTO DE DESPEGUE Y VIDRIO AL HACER SCROLL
    // =============================================
    function setupNavbarScrollEffect() {
        const navbar = document.querySelector('.navbar');
        if (!navbar) return;

        let isScrolled = false;

        window.addEventListener('scroll', () => {
            const currentScroll = window.scrollY;

            if (currentScroll > 15 && !isScrolled) {
                navbar.classList.add('scrolled');
                isScrolled = true;
            } else if (currentScroll <= 15 && isScrolled) {
                navbar.classList.remove('scrolled');
                isScrolled = false;
            }
        });
    }

    // Inicializamos el efecto del navbar al cargar la página
    setupNavbarScrollEffect();

    // ===== ANIMACIÓN DEL CARRUSEL 3D =====
    const carruselContainer = document.querySelector('.carrusel-container');
    const items = document.querySelectorAll('.carrusel-item');
    const indicators = document.querySelectorAll('.indicator');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    
    if (carruselContainer && items.length > 0) {
        let currentIndex = 2;
        let autoRotateInterval;
        
        function updateCarrusel() {
            items.forEach((item, index) => {
                const diff = index - currentIndex;
                if (diff === 0) {
                    item.style.transform = 'translateX(0) scale(1)';
                    item.style.opacity = '1';
                    item.style.zIndex = '5';
                } else if (Math.abs(diff) === 1) {
                    item.style.transform = `translateX(${diff * 250}px) scale(0.9)`;
                    item.style.opacity = '0.7';
                    item.style.zIndex = '4';
                } else if (Math.abs(diff) === 2) {
                    item.style.transform = `translateX(${diff * 500}px) scale(0.8)`;
                    item.style.opacity = '0.5';
                    item.style.zIndex = '3';
                } else {
                    item.style.opacity = '0';
                    item.style.zIndex = '2';
                }
                item.style.transition = 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            });

            indicators.forEach((indicator, index) => {
                indicator.classList.toggle('active', index === currentIndex);
            });
        }
        
        function resetAutoRotation() {
            clearInterval(autoRotateInterval);
            startAutoRotation();
        }
        
        function startAutoRotation() {
            autoRotateInterval = setInterval(() => {
                currentIndex = (currentIndex + 1) % items.length;
                updateCarrusel();
            }, 5000);
        }
        
        if (nextButton) {
            nextButton.addEventListener('click', () => {
                currentIndex = (currentIndex + 1) % items.length;
                updateCarrusel();
                resetAutoRotation();
            });
        }
        
        if (prevButton) {
            prevButton.addEventListener('click', () => {
                currentIndex = (currentIndex - 1 + items.length) % items.length;
                updateCarrusel();
                resetAutoRotation();
            });
        }
        
        indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => {
                currentIndex = index;
                updateCarrusel();
                resetAutoRotation();
            });
        });

        carruselContainer.addEventListener('mouseenter', () => clearInterval(autoRotateInterval));
        carruselContainer.addEventListener('mouseleave', startAutoRotation);
        
        updateCarrusel();
        startAutoRotation();
    }

    // ===== ANIMACIÓN DE LAS PESTAÑAS DE BENEFICIOS =====
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');
    
    if (tabButtons.length > 0 && tabContents.length > 0) {
        tabContents.forEach(content => {
            content.style.transition = 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out';
        });
        
        tabButtons.forEach(button => {
            button.addEventListener('click', function() {
                const tabId = this.getAttribute('data-tab');
                tabButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                
                tabContents.forEach(content => {
                    content.style.opacity = '0';
                    content.style.transform = 'translateY(20px)';
                    content.classList.remove('active');
                    setTimeout(() => content.style.display = 'none', 500);
                });
                
                const target = document.getElementById(tabId);
                if (target) {
                    setTimeout(() => {
                        target.style.display = 'block';
                        setTimeout(() => {
                            target.style.opacity = '1';
                            target.style.transform = 'translateY(0)';
                            target.classList.add('active');
                        }, 50);
                    }, 500);
                }
            });
        });
    }

    // ===== ANIMACIÓN DE LAS TARJETAS DE SOLUCIÓN =====
    const solutionCards = document.querySelectorAll('.solution-card');
    solutionCards.forEach(card => {
        card.style.transition = 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
            this.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)';
        });
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '';
        });
    });

    // ===== ANIMACIÓN DE ESTADÍSTICAS =====
    const statItems = document.querySelectorAll('.stat-item');
    let statsAnimated = false;

    function animateStats() {
        if (statsAnimated) return;
        const heroSection = document.querySelector('.hero');
        if (heroSection && isInViewport(heroSection)) {
            statItems.forEach((item, index) => {
                const numberElement = item.querySelector('.stat-number');
                if (!numberElement || numberElement.classList.contains('animated')) return;

                const targetNumber = parseInt(numberElement.textContent.replace(/[+%]/g, ''));
                let current = 0;
                const duration = 2000;
                const increment = targetNumber / (duration / 16);

                function updateNumber() {
                    current += increment;
                    if (current >= targetNumber) {
                        current = targetNumber;
                        let text = Math.floor(current).toLocaleString();
                        if (numberElement.textContent.includes('+')) text += '+';
                        if (numberElement.textContent.includes('%')) text += '%';
                        numberElement.textContent = text;
                        numberElement.classList.add('animated');
                    } else {
                        numberElement.textContent = Math.floor(current).toLocaleString();
                        requestAnimationFrame(updateNumber);
                    }
                }
                setTimeout(() => requestAnimationFrame(updateNumber), index * 400);
            });
            statsAnimated = true;
        }
    }

    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return rect.top <= window.innerHeight * 0.85 && rect.bottom >= 0;
    }

    const heroSection = document.querySelector('.hero');
    if (heroSection && statItems.length > 0) {
        window.addEventListener('scroll', animateStats);
        window.addEventListener('load', animateStats);
    }

    // ===== ANIMACIÓN DEL CHATBOT =====
    const chatbotIcon = document.getElementById('chatbot-icon');
    const chatbotWindow = document.getElementById('chatbot-window');
    
    if (chatbotIcon && chatbotWindow) {
        chatbotIcon.style.transition = 'transform 0.3s ease';
        chatbotWindow.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
        
        chatbotIcon.addEventListener('click', function() {
            chatbotWindow.classList.toggle('visible');
            if (chatbotWindow.classList.contains('visible')) {
                chatbotWindow.style.opacity = '0';
                chatbotWindow.style.transform = 'translateY(20px) scale(0.95)';
                setTimeout(() => {
                    chatbotWindow.style.opacity = '1';
                    chatbotWindow.style.transform = 'translateY(0) scale(1)';
                }, 10);
                setTimeout(() => {
                    const userInput = document.getElementById('user-input');
                    if (userInput) userInput.focus();
                }, 300);
            }
        });

        document.addEventListener('click', function(e) {
            if (chatbotWindow.classList.contains('visible') && 
                !chatbotIcon.contains(e.target) && 
                !chatbotWindow.contains(e.target)) {
                chatbotWindow.style.opacity = '0';
                chatbotWindow.style.transform = 'translateY(20px) scale(0.95)';
                setTimeout(() => chatbotWindow.classList.remove('visible'), 300);
            }
        });
    }

    // ===== ANIMACIÓN DE ICONOS =====
    const animatedIcons = document.querySelectorAll('.solution-icon, .contact-icon');
    animatedIcons.forEach(icon => {
        icon.style.transition = 'all 0.3s ease';
        icon.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.15) rotate(5deg)';
        });
        icon.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0)';
        });
    });

    // ===== ANIMACIÓN DE CARGA INICIAL =====
    window.addEventListener('load', function() {
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.5s ease';
        setTimeout(() => {
            document.body.style.opacity = '1';
            document.body.classList.add('loaded');
        }, 100);
    });
});
