import React from 'react';

interface LatestProps {
    className: string;
}

const Latest: React.FC<LatestProps> = ({ className }) => {
    return (
        <div className={className}>
            <h3>Latest</h3>
            <ul>
                <li>RFPs</li>
                <li>Newsroom</li>
                <li>Events Calendar</li>
            </ul>
        </div>
    );
};

export default Latest;