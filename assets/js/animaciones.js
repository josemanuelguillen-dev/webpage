// Menu de navegacion
// Animación al cargar: items aparecen de forma escalonada
anime({
  targets: 'nav ul li',
  translateY: [-30, 0],
  opacity: [0, 1],
  delay: anime.stagger(100),
  duration: 800,
  easing: 'easeOutQuad'
});

// Efecto hover en enlaces
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('mouseenter', () => {
    anime({
      targets: link,
      scale: 1.1,
      color: '#4a90e2',
      duration: 300
    });
  });
});

// Pagina de inicio
// Timeline para animación secuencial
const heroTimeline = anime.timeline({ easing: 'easeOutExpo' });

heroTimeline
  .add({
    targets: '.hero-title',
    translateX: [-100, 0],
    opacity: [0, 1],
    duration: 1200
  })
  .add({
    targets: '.hero-subtitle',
    translateY: [50, 0],
    opacity: [0, 1],
    duration: 1000
  }, '-=600')
  .add({
    targets: '.hero-button',
    scale: [0, 1],
    opacity: [0, 1],
    duration: 800
  }, '-=400');
  
  // Sobre nosotros / instalaciones
 // Animación al hacer scroll (usando Intersection Observer)
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      anime({
        targets: entry.target.querySelectorAll('.facility-card'),
        translateY: [60, 0],
        opacity: [0, 1],
        delay: anime.stagger(150),
        duration: 900,
        easing: 'easeOutCubic'
      });
    }
  });
});

document.querySelectorAll('.facilities-section').forEach(sec => {
  observer.observe(sec);
});


// equipo docente
// Efecto 3D sutil al pasar el cursor
document.querySelectorAll('.teacher-card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    anime({
      targets: card,
      rotateY: 5,
      rotateX: 5,
      translateY: -10,
      boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
      duration: 600,
      easing: 'easeOutQuad'
    });
  });
  
  card.addEventListener('mouseleave', () => {
    anime({
      targets: card,
      rotateY: 0,
      rotateX: 0,
      translateY: 0,
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      duration: 600
    });
  });
});

// Oferta formativa
// Animación "reveal" para cada asignatura
anime({
  targets: '.course-item',
  translateX: (el, i) => i % 2 === 0 ? [-80, 0] : [80, 0],
  opacity: [0, 1],
  delay: anime.stagger(120),
  duration: 1000,
  easing: 'easeOutQuart'
});

// Pagina de contacto
// Efecto de "pulse" en datos de contacto importantes
anime({
  targets: 'strong, a[href^="tel:"], a[href^="mailto:"]',
  scale: [1, 1.03, 1],
  duration: 2500,
  loop: true,
  easing: 'easeInOutSine',
  delay: 1000
});

// Validación de formulario con micro-animaciones
const formInputs = document.querySelectorAll('input, textarea');
formInputs.forEach(input => {
  input.addEventListener('invalid', () => {
    anime({
      targets: input,
      translateX: [-10, 10, -10, 10, 0],
      duration: 400,
      easing: 'easeInOutQuad'
    });
  });
});
