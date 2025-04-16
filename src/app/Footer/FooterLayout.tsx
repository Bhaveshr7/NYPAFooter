import React from 'react';
import Logo from './Logo';
import SocialMedia from './SocialMedia';
import AboutSection from './AboutSection';
import TheLatestSection from './TheLatestSection';
import ServicesSection from './ServicesSection';
// import OthersSection from './OthersSection';
import './FooterLayout.css';

const FooterLayout: React.FC = () => {
    return (
        <div className="footer-layout">
            <Logo />
            <SocialMedia />
            <AboutSection />
            <TheLatestSection />
            <ServicesSection />
            {/* <OthersSection /> */}
        </div>
    );
};

export default FooterLayout;
