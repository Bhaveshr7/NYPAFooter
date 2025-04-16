import React from 'react';
import './AboutSection.css';

const AboutSection: React.FC = () => {
    return (
        <div className="about-section">
            <h2 className="about-header">ABOUT</h2>
            <ul className="about-list">
                <li>Mission</li>
                <li>Leadership</li>
                <li>VISION2030</li>
                <li>Financials</li>
                <li>History</li>
                <li>Blenheim-Gilboa Visitors Center</li>
                <li>Hawkins Point Visitors Center</li>
                <li>Niagara Power Vista</li>
                <li>NY Energy Zone</li>
                <li>Sustainability</li>
                <li>Environmental Justice</li>
                <li>Supplier Diversity</li>
                <li>Licensing and Allocations</li>
                <li>Contact</li>
            </ul>
        </div>
    );
};

export default AboutSection;