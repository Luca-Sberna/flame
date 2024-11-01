// ParallaxImages.js
import React from 'react';

const ParallaxImages = () => {
    return (
        <section className="parallax-images container">
            <div className="parallax-text">
                <div className="flow content">
                    <h2>Dolci</h2>
                    <p>Pop your images in a container with overflow hidden, GSAP does the rest.</p>
                </div>
            </div>
            <div className="image_cont">
                <img src="https://assets.codepen.io/756881/neon3.jpg" alt="" />
            </div>
            <div className="image_cont">
                <img src="https://assets.codepen.io/756881/neon2.jpg" alt="" />
            </div>
        </section>
    );
};

export default ParallaxImages;
