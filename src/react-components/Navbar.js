import React from 'react'


const Navbar = (props) => (
    <div className="nav">
        <img 
            alt='retro-logo'
            className='nav__logo'
            src={require('../images/small-logo.png').default} />

        <div className='nav__info'>
            <div className='nav__message'>{props.message}</div>
            <div className='nav__score'>score {props.score} | top score {props.topScore}</div>
        </div>
    </div>
)

Navbar.defaultProps = { message: "Click each image exactly once" }



export default Navbar;