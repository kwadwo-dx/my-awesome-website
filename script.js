document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(el =>  {
        el.computedStyleMap.opacity = "1";
    });
});


