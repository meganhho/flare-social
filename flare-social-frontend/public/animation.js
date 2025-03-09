// Animation.js - Adds advanced interactive elements to the UI
document.addEventListener('DOMContentLoaded', function() {
  // Initialize interactive elements once the DOM is loaded
  // Disabling magnetic buttons (cursor animation)
  // initMagneticButtons();
  
  initParticleEffects();
  initScrollAnimations();
  
  // Disabling 3D card tilt effect (cursor animation)
  // init3DCards();
  
  initChartAnimations();
});

// Magnetic Button Effect (disabled per user request)
function initMagneticButtons() {
  // Function kept but not called
  const magneticButtons = document.querySelectorAll('.magnetic-effect');
  
  magneticButtons.forEach(button => {
    button.addEventListener('mousemove', function(e) {
      const position = button.getBoundingClientRect();
      const x = e.clientX - position.left - position.width / 2;
      const y = e.clientY - position.top - position.height / 2;
      
      button.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
    });
    
    button.addEventListener('mouseout', function() {
      button.style.transform = 'translate(0px, 0px)';
    });
  });
}

// Particle Effects Animation - Enhanced with more particles
function initParticleEffects() {
  // Create additional particle elements dynamically
  const dashboardContainer = document.querySelector('.flex-1');
  if (!dashboardContainer) return;
  
  // Main dashboard particles (significantly increased)
  for (let i = 0; i < 50; i++) {
    createParticle(dashboardContainer);
  }
  
  // Add particles to other containers as well
  const containers = document.querySelectorAll('.card-3d-wrapper, .bg-[#F5F5F7], .animate-fade-in');
  containers.forEach(container => {
    // Add a reasonable number of particles based on container size
    const count = Math.floor(Math.random() * 5) + 2;
    for (let i = 0; i < count; i++) {
      createParticle(container);
    }
  });
}

// Helper function to create particles with varied properties
function createParticle(container) {
  const particle = document.createElement('div');
  particle.className = 'particle';
  
  // Random size between 3px and 12px
  const size = Math.random() * 9 + 3;
  particle.style.width = `${size}px`;
  particle.style.height = particle.style.width;
  
  // Random position within container
  particle.style.top = `${Math.random() * 100}%`;
  particle.style.left = `${Math.random() * 100}%`;
  
  // Random opacity
  particle.style.opacity = `${Math.random() * 0.4 + 0.1}`;
  
  // Random animation duration between 4-12s
  const duration = Math.random() * 8 + 4;
  particle.style.animation = `particle-float ${duration}s ease-in-out infinite`;
  
  // Random animation delay
  particle.style.animationDelay = `${Math.random() * 5}s`;
  
  // Random color tint (mostly pink variations but occasional blue)
  const hue = Math.random() > 0.8 ? '220' : Math.floor(Math.random() * 30) + 330;
  const saturation = Math.floor(Math.random() * 30) + 70;
  const lightness = Math.floor(Math.random() * 20) + 70;
  particle.style.backgroundColor = `hsla(${hue}, ${saturation}%, ${lightness}%, 0.6)`;
  
  container.appendChild(particle);
}

// Scroll Animation
function initScrollAnimations() {
  const scrollElements = document.querySelectorAll('.scroll-animate');
  
  function checkInView() {
    scrollElements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const elementVisible = 150;
      
      if (elementTop < window.innerHeight - elementVisible) {
        element.classList.add('visible');
      } else {
        element.classList.remove('visible');
      }
    });
  }
  
  // Initial check
  checkInView();
  
  // Check on scroll
  window.addEventListener('scroll', checkInView);
}

// 3D Card Tilt Effect (disabled per user request)
function init3DCards() {
  // Function kept but not called
  const cards = document.querySelectorAll('.card-3d-effect');
  
  cards.forEach(card => {
    // Check if this is a tweet card (they usually have smaller content)
    const isTweetCard = card.querySelector('p[dangerouslySetInnerHTML]') !== null;
    
    card.addEventListener('mousemove', e => {
      const cardRect = card.getBoundingClientRect();
      const cardCenterX = cardRect.left + cardRect.width / 2;
      const cardCenterY = cardRect.top + cardRect.height / 2;
      
      const mouseX = e.clientX - cardCenterX;
      const mouseY = e.clientY - cardCenterY;
      
      // Calculate rotation based on mouse position
      // Use reduced values for tweet cards
      const intensity = isTweetCard ? 0.3 : 1;
      const rotateX = (mouseY / (cardRect.height / 2)) * -10 * intensity;
      const rotateY = (mouseX / (cardRect.width / 2)) * 10 * intensity;
      
      // Apply the rotation and translation
      const translateZ = isTweetCard ? '5px' : '10px';
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(${translateZ})`;
      
      // Add a subtle shadow that follows mouse position
      const shadowOffsetX = mouseX * 0.1 * intensity;
      const shadowOffsetY = mouseY * 0.1 * intensity;
      const shadowIntensity = isTweetCard ? '0.05' : '0.1';
      const colorIntensity = isTweetCard ? '0.05' : '0.1';
      
      card.style.boxShadow = `
        ${shadowOffsetX}px ${shadowOffsetY}px 20px rgba(0, 0, 0, ${shadowIntensity}),
        ${shadowOffsetX * 0.5}px ${shadowOffsetY * 0.5}px 5px rgba(225, 64, 122, ${colorIntensity})
      `;
    });
    
    card.addEventListener('mouseleave', () => {
      // Reset to original state on mouse leave
      card.style.transform = '';
      card.style.boxShadow = '';
      
      // Add a smooth transition back to the original state
      card.style.transition = 'transform 0.5s ease, box-shadow 0.5s ease';
      setTimeout(() => {
        card.style.transition = '';
      }, 500);
    });
  });
}

// Interactive Chart Animation (Data Visualization)
function initChartAnimations() {
  const charts = document.querySelectorAll('.progress-bar-animated');
  
  charts.forEach(chart => {
    const valueBar = chart.querySelector('div');
    if (!valueBar) return;
    
    // Animate from 0 to actual value
    const targetWidth = valueBar.style.width;
    valueBar.style.width = '0%';
    
    setTimeout(() => {
      valueBar.style.transition = 'width 1.5s ease-out';
      valueBar.style.width = targetWidth;
    }, 300);
  });
}

// Additional Easter Egg: Konami Code
let konamiCodeSequence = [];
const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
  konamiCodeSequence.push(e.key);
  konamiCodeSequence = konamiCodeSequence.slice(-10);
  
  if (konamiCodeSequence.join(',') === konamiCode.join(',')) {
    activateEasterEgg();
  }
});

function activateEasterEgg() {
  // Add a fun easter egg animation when Konami code is entered
  document.body.classList.add('animate-gradient-bg');
  
  // Create a burst of additional particles
  const body = document.querySelector('body');
  for (let i = 0; i < 100; i++) {
    createParticle(body);
  }
  
  // Reset after 5 seconds
  setTimeout(() => {
    document.body.classList.remove('animate-gradient-bg');
    
    // Remove extra particles
    const extraParticles = document.querySelectorAll('body > .particle');
    extraParticles.forEach(particle => {
      particle.style.animation = 'fadeOut 1s forwards';
      setTimeout(() => {
        particle.remove();
      }, 1000);
    });
  }, 5000);
} 