import React from 'react';
import './TheLatestSection.css'; // Import your CSS file here

const TheLatestSection: React.FC = () => {
    return (
        <div className="the-latest-section">
            {/* Latest Section */}
            <div className="latest-section">
                {/* Header */}
                <h2 className="latest-header">THE LATEST</h2>
                {/* List */}
                <ul className="latest-list">
                    <li>RFPs</li>
                    <li>Newsroom</li>
                    <li>Benefits</li>
                    <li>Careers</li>
                    <li>Diversity & Inclusion</li>
                    <li>Events</li>
                    <li>EVolve NY</li>
                    <li>Meeting Webcasts</li>
                    <li>Meeting Webcasts Archive</li>
                    <li>Virtual Learning Center</li>
                </ul>
            </div>

            {/* Library Section */}
            <div className="library-section">
                {/* Header */}
                <h2 className="library-header">LIBRARY</h2>
                {/* List */}
                <ul className="library-list">
                    <li>Public Filings & Documents</li>
                    <li>Freedom of Information Law (FOIL)</li>
                </ul>
            </div>
        </div>
    );
};

export default TheLatestSection;