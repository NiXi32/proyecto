// Menú móvil
const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
    menuToggle.innerHTML = nav.classList.contains('active') ? 
        '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
});

// Tabs de módulos
const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        const tabId = button.getAttribute('data-tab');
        
        // Remover clase active de todos los botones y contenidos
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));
        
        // Agregar clase active al botón y contenido seleccionado
        button.classList.add('active');
        document.getElementById(tabId).classList.add('active');
    });
});

// Header scroll
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});



// Animaciones al hacer scroll
const sections = document.querySelectorAll('.section');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

sections.forEach(section => {
    observer.observe(section);
});

// Función para el chat de WhatsApp
function toggleChat() {
    const chatBox = document.getElementById('chatBox');
    chatBox.style.display = chatBox.style.display === 'flex' ? 'none' : 'flex';
}

function simulateMessage() {
    const chatBody = document.getElementById('chatBody');
    const userMessage = document.getElementById('userMessage');
    
    if (userMessage.value.trim() !== '') {
        // Agregar mensaje del usuario
        const userMsg = document.createElement('div');
        userMsg.className = 'chat-message';
        userMsg.style.marginLeft = 'auto';
        userMsg.style.backgroundColor = '#DCF8C6';
        userMsg.textContent = userMessage.value;
        chatBody.appendChild(userMsg);
        
        // Limpiar el campo de texto
        userMessage.value = '';
        
        // Simular respuesta después de un breve retraso
        setTimeout(() => {
            const botMsg = document.createElement('div');
            botMsg.className = 'chat-message';
            botMsg.textContent = 'Gracias por tu mensaje. Para una atención más personalizada, por favor contáctanos directamente por WhatsApp.';
            chatBody.appendChild(botMsg);
            
            // Desplazar hacia abajo
            chatBody.scrollTop = chatBody.scrollHeight;
        }, 1000);
    }
}