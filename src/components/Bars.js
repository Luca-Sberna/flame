// Bars.js
import React from 'react';

const Bars = () => {
    return (
        <section className="bars container">
            <div className="bars-text">
                <div className="flow content">
                    <h2>Countdown</h2>
                    <p>Tempo rimanente all'apertura:</p>
                </div>
            </div>
            <div className="bars-cont">
                {[0.8, 0.9, 1, 1.1].map((speed) => (
                    <div className="bar" data-speed={speed} key={speed}>
                        <p>{speed}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Bars;
