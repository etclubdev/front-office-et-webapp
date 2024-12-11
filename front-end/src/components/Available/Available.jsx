export const Available = ({ when, children, parentClassName }) => {
    if (when === true){
        const parentElement = document.querySelector('.' + parentClassName);  
        parentElement.classList.add('visible')
    }
    return when ? <>{children}</> : null; 
}