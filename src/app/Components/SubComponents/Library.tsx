import React from 'react';

interface LibraryProps {
    className: string;
}

const Library: React.FC<LibraryProps> = ({ className }) => {
    return (
        <div className={className}>
            <h3>Library</h3>
            <ul>
                <li>Public Filings & Documents</li>
                <li>Freedom of Information Law (FOIL)</li>
            </ul>
        </div>
    );
};

export default Library;