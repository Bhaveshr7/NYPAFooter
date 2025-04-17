import React from 'react';

interface SocialMediaProps {
    className: string;
}

const SocialMedia: React.FC<SocialMediaProps> = ({ className }) => {
    return (
        <div className={className}>
            Follow
            <div className="social-media-icons">
                <span className="icon-facebook">📘</span>
                <span className="icon-twitter">🐦</span>
                <span className="icon-linkedin">🔗</span>
                <span className="icon-instagram">📸</span>
                <span className="icon-youtube">📺</span>
            </div>
        </div>
    );
};

export default SocialMedia;