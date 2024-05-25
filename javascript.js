document.addEventListener('DOMContentLoaded', () => {
    // Typing animation for intro text
    const introText = document.getElementById('intro-text');
    const text = "ZERTICAL'S SERVICES";
    let index = 0;

    function type() {
        if (index < text.length) {
            introText.innerHTML += text.charAt(index);
            index++;
            setTimeout(type, 150);
        } else {
            setTimeout(() => {
                document.getElementById('intro').classList.add('fade-out');
                setTimeout(() => {
                    document.getElementById('intro').style.display = 'none';
                }, 1000);
            }, 1000);
        }
    }

    type();

    // Falling leaves animation
    const fallingLeaves = document.getElementById('falling-leaves');
    const leafCount = 20;

    for (let i = 0; i < leafCount; i++) {
        const leaf = document.createElement('div');
        leaf.classList.add('leaf');
        leaf.style.left = `${Math.random() * 100}vw`;
        leaf.style.animationDuration = `${Math.random() * 2 + 3}s`; // 3 to 5 seconds
        leaf.style.animationDelay = `${Math.random() * 2}s`;
        fallingLeaves.appendChild(leaf);
    }

    // Toggle dark/light mode
    const toggleThemeBtn = document.getElementById('toggle-theme-btn');
    let isDarkMode = false;

    function toggleDarkMode() {
        isDarkMode = !isDarkMode;
        document.body.classList.toggle('dark-mode');
        particles.length = 0; // Clear the current particles
        createParticles(isDarkMode ? colorsDarkMode : colorsLightMode); // Create new particles with the appropriate colors
    }

    toggleThemeBtn.addEventListener('click', toggleDarkMode);
});

