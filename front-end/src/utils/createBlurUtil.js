const createBlur = (className) => {
    const gradients = [
        "linear-gradient(90deg, rgba(128, 232, 241, 0.80) 0%, rgba(79, 170, 194, 0.80) 50%, #0D3DA4 100%)",
        "linear-gradient(90deg, #D1FDFF 0%, #FDDB92 99.27%)",
    ];

    const parentElement = document.querySelector("." + className);
    if (!parentElement) return [];

    const pageHeight = parentElement.scrollHeight;
    const pageWidth = parentElement.scrollWidth;
    
    const baseCount = 5;
    const extraCount = Math.floor(pageHeight / 1000) * 5;
    const count = baseCount + extraCount;

    return Array.from({ length: count }).map(() => ({
        size: Math.random() * 200 + 50, 
        blur: Math.random() * 60 + 5,  
        opacity: Math.random() * 0.5 + 0.3,
        top: Math.random() * pageHeight + "px",
        left: Math.random() * 120 - 20 + "%",
        background: gradients[Math.floor(Math.random() * gradients.length)], // Chọn màu ngẫu nhiên
    }));
};

export { createBlur };
