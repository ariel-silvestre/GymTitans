// Funcionalidades para la página de contacto

// Manejo del formulario de contacto
function setupContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Obtener datos del formulario
            const formData = {
                nombre: document.getElementById('nombre').value,
                email: document.getElementById('email').value,
                telefono: document.getElementById('telefono').value,
                servicio: document.getElementById('servicio').value,
                mensaje: document.getElementById('mensaje').value
            };
            
            // Validar formulario
            if (validarFormulario(formData)) {
                enviarFormulario(formData);
            }
        });
    }
}

// Validación del formulario
function validarFormulario(data) {
    if (!data.nombre || !data.email || !data.servicio || !data.mensaje) {
        mostrarMensaje('Por favor, completa todos los campos obligatorios.', 'error');
        return false;
    }
    
    if (!validarEmail(data.email)) {
        mostrarMensaje('Por favor, ingresa un email válido.', 'error');
        return false;
    }
    
    return true;
}

// Validar email
function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Enviar formulario (simulado)
function enviarFormulario(data) {
    // Simular envío
    const btnEnviar = document.querySelector('.btn-enviar');
    const textoOriginal = btnEnviar.textContent;
    
    btnEnviar.textContent = 'Enviando...';
    btnEnviar.disabled = true;
    
    setTimeout(() => {
        // Simular éxito
        mostrarMensaje('¡Mensaje enviado con éxito! Te contactaremos pronto.', 'success');
        document.getElementById('contactForm').reset();
        
        btnEnviar.textContent = textoOriginal;
        btnEnviar.disabled = false;
        
        // Aquí normalmente se enviaría a un servidor
        console.log('Datos del formulario:', data);
        
    }, 2000);
}

// Mostrar mensajes al usuario
function mostrarMensaje(mensaje, tipo) {
    // Crear elemento de mensaje
    const mensajeDiv = document.createElement('div');
    mensajeDiv.className = `mensaje ${tipo}`;
    mensajeDiv.textContent = mensaje;
    mensajeDiv.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 8px;
        font-weight: bold;
        z-index: 1000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        background: ${tipo === 'success' ? '#4CAF50' : '#ff4444'};
        color: white;
    `;
    
    document.body.appendChild(mensajeDiv);
    
    // Animación de entrada
    setTimeout(() => {
        mensajeDiv.style.transform = 'translateX(0)';
    }, 100);
    
    // Animación de salida
    setTimeout(() => {
        mensajeDiv.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(mensajeDiv);
        }, 300);
    }, 4000);
}

// Efectos hover para tarjetas de contacto
function enhanceContactCards() {
    const contactCards = document.querySelectorAll('.contacto-card');
    
    contactCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    setupContactForm();
    enhanceContactCards();
});

// Preload de recursos
function preloadContactResources() {
    // Preload de recursos si es necesario
}