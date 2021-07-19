import React from 'react';


const Header = () => (
    <div className="header">
        <img 
            alt='retro-react'
            className='header__image'
            src={require('../images/titleBlock.png').default}  />
    </div>
);


export default Header;