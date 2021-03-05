import React, { useState } from 'react'
import { IoIosArrowForward } from 'react-icons/io';
import { FaLinkedin,FaInstagramSquare,FaTwitterSquare, FaFacebookSquare, FaYoutubeSquare } from "react-icons/fa";
import { FiChevronUp } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";

import headerImg from '../../img/Artboard 1.png'


const Header = () =>{
    const [editmode, setEditmode] = useState(false)
    return(
        <header className="header" >
            <div className='header__desc' >
            <h1>everything is connected  with <span>tech.az</span> </h1>
            <p> a technology media and event platforms that  brings international experience and practice  to the local startup & technology ecosystem</p>
            <a href=' https://www.facebook.com/www.tech.az'> <span>learn more</span> <IoIosArrowForward className='iconArrow'/> </a>
            </div>

            {!editmode?
            <div className='header__icons'>
                <AiOutlineClose className='closeBtnSosial' onClick={()=>setEditmode(!editmode)}/>
                <a href=' https://www.facebook.com/techazmedia' target='blank'> <FaFacebookSquare className='icon'/></a>
                <a href='https://www.linkedin.com/company/tech-az/' target='blank'>  <FaLinkedin className='icon'/></a>
                <a href='https://twitter.com/Techaz5' target='blank'>  <FaTwitterSquare className='icon'/></a>
                <a href='https://www.instagram.com/techazmedia/' target='blank'>  <FaInstagramSquare className='icon'/></a>
                <a href='https://www.youtube.com/channel/UCp5hYFUzfP3_hw29S8dGlQg' target='blank'>  <FaYoutubeSquare className='icon'/></a>
            
            </div> :''}
            <img src={headerImg} alt='Slogan' />
            
            
            <a href='#7' className='arrowIcon'><FiChevronUp/> </a>
        </header>
    )
}


export default Header