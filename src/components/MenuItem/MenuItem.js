import React from 'react';

import './MenuItem.scss';

const MenuItem = ({ title, imageUrl, size }) => (
    <div
        //A ternary to check for the size property for each menu item
        className={size ? `${size} menu-item` : "menu-item"}
    >
        <div 
            className="background-image" 
            style={{
                backgroundImage: `url(${imageUrl})`
                }}
        >
        </div>
        <div className="content">
            <h1 className="title">{title}</h1>
            <span className="subtitle">SHOP NOW</span>
        </div>
    </div>
)
export default MenuItem;