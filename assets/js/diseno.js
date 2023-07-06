window.addEventListener('scroll', function() {
    var elements = document.querySelectorAll('.sticky-element');
    
    elements.forEach(function(element) {
        var scrollOffset = window.scrollY;
        var scrollStrength = parseFloat(element.getAttribute('data-scroll-strength'));
      
        element.style.transform = 'translateY(' + (-scrollOffset * scrollStrength) + 'px)';
    });
});