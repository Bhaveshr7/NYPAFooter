import React from 'react';

interface ShareProps {
    className: string;
}

const Share: React.FC<ShareProps> = ({ className }) => {
    return (
        <div className={className}>
            Share <span className="share-icon">🔗</span>
        </div>
    );
};

export default Share;