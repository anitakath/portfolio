import { useState } from 'react';
import Image from 'next/image';

const MenuButton = ({isHovered, setIsHovered}) => {
    

    return (
        <button 
            onMouseEnter={() => setIsHovered(true)} 
            onMouseLeave={() => setIsHovered(false)} 
            style={{ border: 'none', background: 'transparent', cursor: 'pointer', marginRight: '30px' }}
        >
            {isHovered ? (
                <Image src="/images/button-icons/icons8-close-50.png" width={30} height={30} alt="Close Menu" />
            ) : (
                <Image src="/images/button-icons/icons8-menu-50.png" width={30} height={30} alt="Open Menu" />
            )}
        </button>
    );
};

export default MenuButton;