// Funcionalidades para la página de productos

// Carrito de compras simple
let carrito = [];

// Agregar productos al carrito
function setupAddToCart() {
    const addButtons = document.querySelectorAll('.btn-comprar');
    
    addButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productoCard = this.closest('.producto-card');
            const nombre = productoCard.querySelector('h4').textContent;
            const precio = productoCard.querySelector('.producto-precio').textContent;
            const imagen = productoCard.querySelector('.producto-imagen').textContent;
            
            agregarAlCarrito({
                nombre: nombre,
                precio: precio,
                imagen: imagen
            });
        });
    });
}

// Función para agregar producto al carrito
function agregarAlCarrito(producto) {
    carrito.push(producto);
    mostrarNotificacion(`${producto.nombre} agregado al carrito`);
    actualizarContadorCarrito();
}

// Mostrar notificación
function mostrarNotificacion(mensaje) {
    // Crear notificación
    const notificacion = document.createElement('div');
    notificacion.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: #ffd700;
        color: #000;
        padding: 15px 20px;
        border-radius: 8px;
        font-weight: bold;
        z-index: 1000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    notificacion.textContent = mensaje;
    
    document.body.appendChild(notificacion);
    
    // Animación de entrada
    setTimeout(() => {
        notificacion.style.transform = 'translateX(0)';
    }, 100);
    
    // Animación de salida
    setTimeout(() => {
        notificacion.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notificacion);
        }, 300);
    }, 3000);
}

// Actualizar contador del carrito
function actualizarContadorCarrito() {
    let contador = document.querySelector('.carrito-contador');
    
    if (!contador) {
        contador = document.createElement('div');
        contador.className = 'carrito-contador';
        contador.style.cssText = `
            position: fixed;
            top: 100px;
            left: 20px;
            background: #ff0000;
            color: white;
            border-radius: 50%;
            width: 25px;
            height: 25px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 0.8rem;
            font-weight: bold;
            z-index: 1000;
        `;
        document.body.appendChild(contador);
    }
    
    contador.textContent = carrito.length;
    contador.style.display = carrito.length > 0 ? 'flex' : 'none';
}

// Efectos hover para productos
function enhanceProductHover() {
    const productos = document.querySelectorAll('.producto-card');
    
    productos.forEach(producto => {
        producto.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
        });
        
        producto.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Filtrado simple por categoría (para futura implementación)
function setupFiltering() {
    // Aquí se puede implementar filtrado por categorías
    console.log('Sistema de filtrado listo para implementar');
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    setupAddToCart();
    enhanceProductHover();
    setupFiltering();
    actualizarContadorCarrito();
});

// Preload de recursos
function preloadProductResources() {
    // Preload de fuentes o imágenes si es necesario
}