// ImageGrid.js
import React from 'react';

const ImageGrid = () => {
    return (
        <section className="image-grid container">
            <div className="image_cont" data-speed="1">
                <img src="https://images.unsplash.com/photo-1556856425-366d6618905d?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" alt="" />
            </div>
            <div className="image_cont" data-speed="1.7">
                <img src="https://images.unsplash.com/photo-1520271348391-049dd132bb7c?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" alt="" />
            </div>
            <div className="image_cont" data-speed="1.5">
                <img src="https://images.unsplash.com/photo-1609166214994-502d326bafee?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" alt="" />
            </div>
        </section>
    );
};

export default ImageGrid;
