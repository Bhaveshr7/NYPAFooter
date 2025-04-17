import React from 'react';
import Logo from './Logo'; // Assuming the 'Logo' module is located in the parent directory
import Share from './Share';
import SocialMedia from './SocialMedia';

interface FooterTopProps {
    className: string;
}

const FooterTop: React.FC<FooterTopProps> = ({ className }) => {
    return (
        <div className={className}>
            <Logo className="logo" />
            <Share className="share" />
            <SocialMedia className="social-media" />
        </div>
    );
};

export default FooterTop;