const createStar = (className) => {  
    const star = document.createElement('div');  
    const size = Math.random() * 0.4; // Kích thước ngôi sao  
    const left = Math.random() * 100; // Vị trí ngang  
    const top = Math.random() * 600; // Vị trí dọc  
    const duration = Math.random() * 2 + 1; // Thay đổi thời gian chuyển động nhấp nháy  

    star.style.width = `${size}vw`;  
    star.style.height = `${size}vw`;  
    star.style.left = `${left}vw`;  
    star.style.top = `${top}vh`;  
    star.style.animationDuration = `${duration}s`;  
    star.className = 'star';  

    document.querySelector(`.${className}`).appendChild(star);  
};  

export { createStar };