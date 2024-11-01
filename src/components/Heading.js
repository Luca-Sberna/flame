// Heading.js
import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger, ScrollSmoother, SplitText } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

const Heading = () => {
    useEffect(() => {
        const smoother = ScrollSmoother.create({
            wrapper: '#wrapper',
            content: '#content',
            smooth: 1,
            normalizeScroll: true,
            ignoreMobileResize: true,
            effects: true,
            preventDefault: true,
        });

        gsap.set('.heading', {
            yPercent: -150,
            opacity: 1,
        });

        const mySplitText = new SplitText('#split-stagger', { type: 'words,chars' });
        const chars = mySplitText.chars;

        chars.forEach((char, i) => {
            smoother.effects(char, { speed: 1, lag: (i + 1) * 0.1 });
        });
    }, []);

    return (
        <div className="heading" aria-hidden="true">
            <p>FLAME</p>
            <div className="text-container">
                <p>FLAME</p>
            </div>
        </div>
    );
};

export default Heading;
