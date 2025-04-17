import React from 'react';

interface AboutProps {
    className: string;
}

const About: React.FC<AboutProps> = ({ className }) => {
    return (
        <div className={className}>
            <h3>About</h3>
            <ul>
                <li>Mission</li>
                <li>Leadership</li>
                <li>Vision2030</li>
                <li>Careers</li>
                <li>Investors</li>
                <li>Brochure/Glance Visitors Center</li>
                <li>Hawkins Point Visitors Center</li>
                <li>Niagara Power Vista</li>
                <li>NY Energy Zone</li>
                <li>St Lawrence FDR Visitors Center</li>
            </ul>
        </div>
    );
};

export default About;