document.addEventListener("DOMContentLoaded", function() {
    const gifImage = document.getElementById("cambiargif");
    const originalSrc = "img/gif1.gif";
    const hoverSrc = "img/gif 2.gif";

    gifImage.addEventListener("mouseover", function() {
        gifImage.src = hoverSrc;
    });

    gifImage.addEventListener("mouseout", function() {
        gifImage.src = originalSrc;
    });

    function revealOnScroll() {
        var reveals = document.querySelectorAll('.fade-in-element');
        var windowHeight = window.innerHeight;
        var revealPoint = 50;

        reveals.forEach(function(reveal) {
            var revealTop = reveal.getBoundingClientRect().top;
            var revealBottom = reveal.getBoundingClientRect().bottom;

            if (revealTop < windowHeight - revealPoint && revealBottom > revealPoint) {
                reveal.classList.add('fade-in');
                if (reveal.id === "panel1") {
                    reveal.style.marginLeft = '0';
                    reveal.style.opacity = '1';
                } else if (reveal.id === "panel2") {
                    reveal.style.marginRight = '0';
                    reveal.style.opacity = '1';
                }
            } else {
                reveal.classList.remove('fade-in');
            }
        });
    }

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();

    const nombreInput = document.getElementById('Nombre');
    nombreInput.addEventListener('input', function() {
        if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(nombreInput.value)) {
            nombreInput.setCustomValidity('El nombre no puede contener números ni caracteres especiales.');
        } else {
            nombreInput.setCustomValidity('');
        }
    });
});