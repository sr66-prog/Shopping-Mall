import React, { useState, useEffect } from 'react';

const BackToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <button
            onClick={scrollToTop}
            style={{
                position: 'fixed',
                bottom: '20px',
                right: '20px',
                padding: '10px 20px',
                borderRadius: '50%',
                border: 'none',
                cursor: 'pointer',
                backgroundColor: '#333',
                color: '#fff',
                display: isVisible ? 'block' : 'none',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            }}
        >
            ↑
        </button>
    );
};

export default BackToTopButton;