import { useEffect } from "react";

export const useIntersectionObserver = (ref, observedSelector, visibleClass = "visible", options = { threshold: 0.1 }) => {
    useEffect(() => {

        console.log(ref.current);
        
        if (!ref?.current || !observedSelector) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                entry.target.classList.toggle(visibleClass, entry.isIntersecting);
            });
        }, options);

        const elements = ref.current.querySelectorAll('.' + observedSelector);
        elements.forEach(el => observer.observe(el));

        return () => {
            elements.forEach(el => observer.unobserve(el));
        };
    }, [ref, observedSelector, visibleClass, options]);
};
