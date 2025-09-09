document.addEventListener("DOMContentLoaded", function() {
    // Select all elements you want to animate on scroll
    const animatedElements = document.querySelectorAll('[data-anim]');

    // Options for the Intersection Observer
    const observerOptions = {
        root: null, // observes intersections relative to the viewport
        rootMargin: '0px',
        threshold: 0.1 // trigger when 10% of the element is visible
    };

    // The callback function to execute when an intersection is detected
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            // If the element is intersecting (visible)
            if (entry.isIntersecting) {
                const element = entry.target;
                const animationClass = element.getAttribute('data-anim');
                const animationDelay = element.getAttribute('data-anim-delay');

                // Add animation classes
                element.classList.add('animate__animated', animationClass, 'is-visible');

                // Apply delay if specified
                if(animationDelay) {
                    element.style.animationDelay = `${animationDelay}ms`;
                }

                // Stop observing the element once it has been animated
                observer.unobserve(element);
            }
        });
    };



    // Create the Intersection Observer
    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Start observing each animated element
    animatedElements.forEach(element => {
        observer.observe(element);
    });
});