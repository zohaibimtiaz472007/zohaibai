import React from 'react';
import './Loader.css';

const Loader = () => {
    return (
        <div className="loader-container">
            <div className="skeleton skeleton-header"></div>
            <div className="skeleton skeleton-text"></div>
            <div className="skeleton skeleton-text"></div>
            <div className="skeleton skeleton-text"></div>
            <div className="skeleton skeleton-thumbnail"></div>
            <div className="skeleton skeleton-title"></div>
            <div className="skeleton skeleton-category"></div>
            <div className="skeleton skeleton-date"></div>
        </div>
    );
}

export default Loader;
