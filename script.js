// Function to check if the element is in the viewport
function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to handle the scroll event
function onScroll() {
    const footer = document.querySelector('footer');
    const icon = document.querySelector('.icon img');
    
    if (isElementInViewport(footer)) {
        footer.style.display = 'block';
        icon.style.opacity = '1';
        window.removeEventListener('scroll', onScroll); // Remove the scroll event listener once the element is in the viewport
    }
}

// Add a scroll event listener to trigger the animation
window.addEventListener('scroll', onScroll);
