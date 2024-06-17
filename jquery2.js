$(function () {
    const nav = document.querySelector('nav');
        
    // Función para cambiar el color de fondo del <header> al hacer scroll
    function cambiarColor() {
        if (window.scrollY > 1) { // Cambiar el número según la posición deseada
            nav.classList.add('cambio');
        } else {
            nav.classList.remove('cambio');
        }
    }
    
    // Escuchar el evento de scroll en la ventana y llamar a la función
    window.addEventListener('scroll', cambiarColor);
});