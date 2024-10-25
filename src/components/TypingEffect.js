// TypingEffect.js
import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const TypingEffect = () => {
    const el = useRef(null); // Create a ref for the element

    useEffect(() => {
        const options = {
            strings: ["I am Sahasra Kesara"],
            typeSpeed: 100, // typing speed in ms
            backSpeed: 50, // backspacing speed
            loop: true, // loop the animation
        };

        // Initialize Typed.js
        const typed = new Typed(el.current, options);

        return () => {
            typed.destroy(); // Cleanup on component unmount
        };
    }, []);

    return <span ref={el}></span>;
};

export default TypingEffect;
