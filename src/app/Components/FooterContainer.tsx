
import React from 'react';
import FooterTop from './SubComponents/FooterTop';
import FooterBottom from './SubComponents/FooterBottom';

const FooterContainer: React.FC = () => {
    return (
        <footer className={`footer-container`}>
            <FooterTop className="footer-top" />
            <FooterBottom className="footer-bottom" />
        </footer>
    );
};

export default FooterContainer;