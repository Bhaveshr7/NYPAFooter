import React from 'react';
import About from './About';
import Latest from './Latest';
import Library from './Library';
import Services from './Services';
import Other from './Others';
import EvolveNY from './EvolveNY';

interface FooterBottomProps {
    className: string;
}

const FooterBottom: React.FC<FooterBottomProps> = ({ className }) => {
    return (
        <div className={className}>
            <div className="footer-bottom-left">
                <About className="about" />
                <Latest className="latest" />
                <Library className="library" />
            </div>
            <div className="footer-bottom-right">
                <Services className="services" />
                <Other className="other" />
                <EvolveNY className="evolve-ny" />
            </div>
        </div>
    );
};

export default FooterBottom;