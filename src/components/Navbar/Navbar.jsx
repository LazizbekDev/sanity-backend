import React, { useState } from 'react'
import { BiMenuAltRight } from 'react-icons/bi'
import { VscCloseAll } from 'react-icons/vsc'
import { Link } from 'react-router-dom'
import './Navbar.scss'

const Navbar = () => {

    const [toggle, setToggle] = useState(false);

    const toggler = () => {
        setToggle(!toggle ? true : !toggle)
    }

    return (
        <nav className='app__navbar'>
            <div className='app__navbar-logo'>
                Laziz
            </div>
            <ul className='app__navbar-links'>
                {['home', 'about', 'skills', 'work', 'contact'].map((item, index) => (
                    <li key={index} className='app__flex p-text'>
                        <div />
                        <Link to={`${item}`}>{item}</Link>
                    </li>
                ))}
            </ul>

            <div className="app__navbar-menu" onClick={toggler}>
                {!toggle ? <BiMenuAltRight /> : <VscCloseAll style={{zIndex: 90}}/>}
                <ul className={`app__navbar-menu-links ${toggle ? 'block' : 'none'}`}>
                    {['home', 'about', 'skills', 'work', 'contact'].map((item, index) => (
                        <li key={index} className='app__flex p-text'>
                            <div />
                            <Link to={`${item}`}>{item}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar