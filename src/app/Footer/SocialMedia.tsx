import React from 'react';
import './SocialMedia.css';

const SocialMedia: React.FC = () => {
    return (
        <div className="social-media-container">
            {/* Text */}
            <p className="social-media-text">
                Share
            </p>
            {/* Image */}
            <img
                src="FooterImages/Vector.png"
                alt="Share Icon"
                className="social-media-icon"
            />
        </div>
    );
};

export default SocialMedia;