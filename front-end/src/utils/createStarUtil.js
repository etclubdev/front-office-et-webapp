const createStars = (className) => {
    const parentElement = document.querySelector(`.${className}`);
    if (!parentElement) return [];

    const pageHeight = parentElement.scrollHeight;
    
    const baseCount = 30; 
    const extraCount = Math.floor(pageHeight / 1000) * 20;
    const count = baseCount + extraCount;

    return Array.from({ length: count }).map(() => ({
        size: Math.random() * 3 + 1, 
        left: Math.random() * 100 + "%", 
        top: Math.random() * pageHeight + "px", 
        animationDuration: Math.random() * 2 + 1 + "s", 
    }));
};

export { createStars };
