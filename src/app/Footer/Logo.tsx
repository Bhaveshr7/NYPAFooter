import React from 'react';
import './Logo.css';

const Logo: React.FC = () => {
    return (
        <div className="logo-container">
            {/* First Text */}
            <p className="logo-title">
                NY Power Authority
            </p>
            {/* Second Text */}
            <p className="logo-subtitle">
                © 2025 New York Power Authority
            </p>
        </div>
    );
};

export default Logo;