import React from 'react';

interface ServicesProps {
    className: string;
}

const Services: React.FC<ServicesProps> = ({ className }) => {
    return (
        <div className={className}>
            <h3>Services</h3>
            <ul>
                <li>Facility Electrification</li>
                <li>Energy Efficiency</li>
                <li>BuildSmart 2025</li>
                <li>Decarbonization Program</li>
                <li>Solar Electric Sector</li>
                <li>Smart Street Lighting NY</li>
            </ul>
        </div>
    );
};

export default Services;