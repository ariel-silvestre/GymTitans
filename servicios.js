// Funcionalidades específicas para la página de servicios

// Animación de aparición escalonada para las tarjetas de servicio
function animateServiceCards() {
    const serviceCards = document.querySelectorAll('.servicio-card');
    const membershipCards = document.querySelectorAll('.membresia-card');
    
    serviceCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.2}s`;
    });
    
    membershipCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.15}s`;
    });
}

// Funcionalidad de botones de reserva
function setupBookingButtons() {
    const bookingButtons = document.querySelectorAll('.btn-reservar, .btn-membresia');
    
    bookingButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Animación de clic
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
            
            // Aquí iría la lógica para redirigir al formulario de contacto
            // o abrir un modal de reserva
            const serviceName = this.closest('.servicio-card')?.querySelector('h4')?.textContent || 
                              this.closest('.membresia-card')?.querySelector('h3')?.textContent;
            
            showBookingModal(serviceName);
        });
    });
}

// Modal de reserva (simulado)
function showBookingModal(serviceName) {
    // En una implementación real, esto abriría un modal
    // Por ahora, redirigimos a la página de contacto con parámetros
    const message = `Estoy interesado en el servicio: ${serviceName}`;
    const url = `contacto.html?service=${encodeURIComponent(serviceName)}&message=${encodeURIComponent(message)}`;
    
    // Mostrar confirmación antes de redirigir
    if (confirm(`¿Deseas obtener más información sobre ${serviceName}?`)) {
        window.location.href = url;
    }
}

// Efecto de hover mejorado para las cards
function enhanceCardHover() {
    const cards = document.querySelectorAll('.servicio-card, .membresia-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.zIndex = '10';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.zIndex = '1';
        });
    });
}

// Contador animado para precios (efecto visual)
function animatePriceCounters() {
    const priceElements = document.querySelectorAll('.servicio-precio, .membresia-precio');
    
    priceElements.forEach(element => {
        const originalText = element.textContent;
        element.textContent = '$0';
        
        let counter = 0;
        const target = parseInt(originalText.replace(/[^0-9]/g, ''));
        const duration = 1500;
        const steps = 60;
        const increment = target / steps;
        
        const timer = setInterval(() => {
            counter += increment;
            if (counter >= target) {
                counter = target;
                clearInterval(timer);
            }
            element.textContent = originalText.replace(/\d+/, Math.floor(counter));
        }, duration / steps);
    });
}

// Scroll suave a secciones específicas
function setupInternalNavigation() {
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    
    internalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Efecto parallax para el hero de servicios
function setupParallaxEffect() {
    const hero = document.querySelector('.hero');
    
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        if (hero) {
            hero.style.transform = `translateY(${rate}px)`;
        }
    });
}

// Inicializar todas las funcionalidades cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    animateServiceCards();
    setupBookingButtons();
    enhanceCardHover();
    setupInternalNavigation();
    setupParallaxEffect();
    
    // Opcional: Descomentar si quieres el efecto de contador en los precios
    // setTimeout(animatePriceCounters, 1000);
});

// Preload de imágenes para la página de servicios
function preloadServiceImages() {
    const serviceImages = [
        'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
        'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
        'https://images.unsplash.com/photo-1549060279-7e168fce7090?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
    ];
    
    serviceImages.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

// Llamar preload de imágenes
preloadServiceImages();