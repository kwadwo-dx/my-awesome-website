document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(el =>  {
        el.computedStyleMap.opacity = "1";
    });
});
const toggleButton = document.getElementById("darkModeToggle");

toggleButton.addEventListener("click", () => {
    document.body.classlist.toggle("dark-mode");
});

