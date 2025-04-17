import React from 'react';
import './Share.css';

const Share: React.FC = () => {
    return (
        <div className="share-container">
            {/* Text */}
            <p className="share-text">
                Share
            </p>
            {/* Image */}
            <img
                src="FooterImages/Vector.png"
                alt="Share Icon"
                className="share-icon"
            />
        </div>
    );
};

export default Share;