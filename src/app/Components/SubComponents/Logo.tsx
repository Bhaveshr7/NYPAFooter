import React from 'react';

interface LogoProps {
    className: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
    return (
        <div className={className}>
            NY Power Authority
        </div>
    );
};

export default Logo;