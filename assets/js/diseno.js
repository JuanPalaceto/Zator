window.addEventListener('scroll', function() {
    var elements = document.querySelectorAll('.sticky-element');
    
    elements.forEach(function(element) {
        var scrollOffset = window.scrollY;
        var scrollStrength = parseFloat(element.getAttribute('data-scroll-strength'));
      
        element.style.transform = 'translateY(' + (-scrollOffset * scrollStrength) + 'px)';
    });
});

const glightbox2 = GLightbox ({
    selector: '.glightbox2',
    loop: 'true',
});

const glightbox3 = GLightbox ({
    selector: '.glightbox3',
    loop: 'true',
});

const glightbox4 = GLightbox ({
    selector: '.glightbox4',
    loop: 'true',
});
