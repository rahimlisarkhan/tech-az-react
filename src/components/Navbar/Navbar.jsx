import React from 'react'
import logo from '../../img/Artboard 2.png'
import { GiHamburgerMenu, } from "react-icons/gi";
// import { NavLink } from 'react-router-dom';

const Navbar = () =>{
    let ref = React.createRef()
    const handleClick = () =>{
        if( ref.current.style.top === '0%'){
            ref.current.style.top='-1400%'
        }else{
            ref.current.style.top='0%'
        }
    }

    return(
        <nav className="navbar" id='7'>
            <img src={logo} alt="logo"/>

            <div className="navbar__list" ref={ref}>
                <div className="navbar__list__menu" >
                    <a href='#1' className="navbar__list__menu__item" >Home</a>
                    <a href='#2'  className="navbar__list__menu__item"  >Events</a>
                    <a href='#4' className="navbar__list__menu__item"  >Media</a>
                    <a href='#6' className="navbar__list__menu__item"  >Team</a>

                </div>
                <div className="navbar__list__join" >
                     <a href='#5' className="navbar__list__join__item"  >Join us</a>
                </div>

                {/* <NavLink to='/' exact className="navbar__list__item" activeClassName="active-nav">Home</NavLink>
                <NavLink to='/events' className="navbar__list__item"  activeClassName="active-nav">Events</NavLink>
                <NavLink to='/corporate' className="navbar__list__item"  activeClassName="active-nav">For corporate</NavLink>
                <NavLink to='/media' className="navbar__list__item"  activeClassName="active-nav">Media</NavLink>
                <NavLink to='/join' className="navbar__list__item"  activeClassName="active-nav">Join us</NavLink>
                <NavLink to='/about' className="navbar__list__item"  activeClassName="active-nav">About us</NavLink> */}
            
            </div>
         
            <GiHamburgerMenu onClick={()=>{handleClick()}} className='hamIcon' />

        </nav>
    )   
}


export default Navbar