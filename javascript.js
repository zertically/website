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

    // Toggle dark mode
    const toggleDarkModeBtn = document.getElementById('toggle-dark-mode');
    let darkMode = false;

    toggleDarkModeBtn.addEventListener('click', () => {
        darkMode = !darkMode;
        document.body.classList.toggle('dark-mode');
        const icon = darkMode ? 'images/sun-icon.png' : 'images/moon-icon.png';
        toggleDarkModeBtn.querySelector('img').src = icon;
        particleColor = darkMode ? '#ffffff' : '#04C2C9';
        createParticles();
    });

    // Toggle vouch images
    document.querySelectorAll('.toggle-vouch').forEach(button => {
        button.addEventListener('click', () => {
            const img = button.nextElementSibling;
            if (img.style.display === 'none') {
                img.style.display = 'block';
                button.textContent = 'Hide Picture';
            } else {
                img.style.display = 'none';
                button.textContent = 'Show Picture';
            }
        });
    });
});
