import React from 'react';
import Logo from './Logo';
import Share from './Share';
import AboutSection from './AboutSection';
import TheLatestSection from './TheLatestSection';
import ServicesSection from './ServicesSection';
// import OthersSection from './OthersSection';
import './FooterLayout.css';

const FooterLayout: React.FC = () => {
    return (
        <div className="footer-layout">
            <Logo />
            <Share />
            <AboutSection />
            <TheLatestSection />
            <ServicesSection />
            {/* <OthersSection /> */}
        </div>
    );
};

export default FooterLayout;