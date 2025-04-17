import React from 'react';

interface OtherProps {
    className: string;
}

const Other: React.FC<OtherProps> = ({ className }) => {
    return (
        <div className={className}>
            <h3>Other</h3>
            <ul>
                <li>Accessibility</li>
                <li>Disclaimer</li>
                <li>Privacy Policy</li>
                <li>Text-Only Version</li>
            </ul>
        </div>
    );
};

export default Other;