import React from 'react';
import './ServicesSection.css';

const ServicesSection: React.FC = () => {
    return (
        <div className="services-section">
            <h2 className="services-header">SERVICES</h2>
            <ul className="services-list">
                <li>Facility Electrification</li>
                <li>Energy Efficiency</li>
                <li>BuildSmart 2025</li>
                <li>Decarbonization Program</li>
                <li>Customer-Sited Solar</li>
                <li>Smart Street Lighting NY</li>
                <li>EV Infrastructure</li>
                <li>Hydropower for EcoDev</li>
                <li>Market+ Power</li>
                <li>SENY</li>
                <li>Munis and Coops</li>
                <li>Power Funding Programs</li>
                <li>Grant Services and Programs</li>
                <li>Agile</li>
                <li>Customer Account Center</li>
            </ul>
        </div>
    );
};

export default ServicesSection;