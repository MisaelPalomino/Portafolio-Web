document.addEventListener("DOMContentLoaded", function() {
    const fadeElements = document.querySelectorAll('.fade-in-element');
    const subtitles = document.querySelectorAll('.subtitle');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const fadeInOnIntersection = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            } else {
                entry.target.classList.remove('fade-in');
            }
        });
    };

    const observer = new IntersectionObserver(fadeInOnIntersection, observerOptions);

    fadeElements.forEach(element => {
        observer.observe(element);
    });

    const subtitleObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('hover');
            } else {
                entry.target.classList.remove('hover');
            }
        });
    }, observerOptions);

    subtitles.forEach(subtitle => {
        subtitleObserver.observe(subtitle);
    });
});
