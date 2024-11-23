document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.link');
    
    links.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.2)";
        });

        link.addEventListener('mouseout', () => {
            link.style.boxShadow = "none";
        });
    });
});