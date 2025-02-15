export const Available = ({ when, children}) => {
    return when ? <>{children}</> : null; 
}