import React, { useEffect, useState, useRef } from 'react';

const CustomCursor = () => {
    const dotRef = useRef(null);
    const followerRef = useRef(null);
    const [isHovering, setIsHovering] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const moveCursor = (e) => {
            const { clientX: x, clientY: y } = e;

            if (!isVisible) setIsVisible(true);

            // Move the small dot immediately
            if (dotRef.current) {
                dotRef.current.style.transform = `translate3d(${x - 4}px, ${y - 4}px, 0)`;
            }

            // Move the follower with a slight delay managed by CSS transition
            if (followerRef.current) {
                followerRef.current.style.transform = `translate3d(${x - 20}px, ${y - 20}px, 0)`;
            }
        };

        const handleMouseOver = (e) => {
            if (e.target.tagName === 'A' ||
                e.target.tagName === 'BUTTON' ||
                e.target.getAttribute('role') === 'button' ||
                e.target.closest('a') ||
                e.target.closest('button')) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        const handleMouseLeave = () => {
            setIsVisible(false);
        };

        window.addEventListener('mousemove', moveCursor);
        window.addEventListener('mouseover', handleMouseOver);
        document.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mouseover', handleMouseOver);
            document.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [isVisible]);

    if (typeof window === 'undefined') return null;

    return (
        <div className={`cursor-wrapper ${isHovering ? 'cursor-hover' : ''}`} style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 0.3s ease' }}>
            <div ref={dotRef} className="custom-cursor" />
            <div ref={followerRef} className="cursor-follower" />
        </div>
    );
};

export default CustomCursor;
