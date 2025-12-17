// Hover Sound Effect Simulation (Visual only)
const cards = document.querySelectorAll('.glass-card');

cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.boxShadow = '0 0 20px rgba(0, 242, 255, 0.1)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.boxShadow = 'none';
    });
});

// Animate Skill Bars on Load
window.addEventListener('DOMContentLoaded', () => {
    const fills = document.querySelectorAll('.skill-fill, .xp-fill');
    fills.forEach(fill => {
        const targetWidth = fill.style.width;
        fill.style.width = '0';
        setTimeout(() => {
            fill.style.transition = 'width 1.5s cubic-bezier(0.17, 0.67, 0.83, 0.67)';
            fill.style.width = targetWidth;
        }, 300);
    });
});

// Simple Console Greeting for Recruiters
console.log("%c PLAYER 1 CONNECTED: DHAKSHATHA M K ", 
    "background: #00f2ff; color: #050a0f; font-weight: bold; font-family: Orbitron; padding: 5px;");