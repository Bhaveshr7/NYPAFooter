import React from 'react';

interface EvolveNYProps {
    className: string;
}

const EvolveNY: React.FC<EvolveNYProps> = ({ className }) => {
    return (
        <div className={className}>
            <h3>EVolve NY</h3>
            <ul>
                <li>Agencies</li>
                <li>App Directory</li>
                <li>Career Opportunities</li>
                <li>Grants and Programs</li>
                <li>AGP</li>
            </ul>
        </div>
    );
};

export default EvolveNY;
