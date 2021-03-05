import React  from 'react'


//icon
import arrowIcon from'../../../img/icons _ graphics/Asset 11.png'

//images
import logo1 from '../../../img/interPartner/berkley 1.png'
import logo2 from '../../../img/interPartner/garage48_logo.png'
import logo3 from '../../../img/interPartner/itu magnet.webp'
import logo5 from '../../../img/interPartner/silicon valley.png'
import logo6 from '../../../img/interPartner/slack logo1.png'
import logo7 from '../../../img/interPartner/stanford.png'
import logo8 from '../../../img/interPartner/startup_estonia.png'
import logo9 from '../../../img/interPartner/svi hub.png'
import logo10 from '../../../img/interPartner/techstars.png'

const InterPartner = () => {

    return(
        <div className="home-page-content__events">
          
            <div className="home-page-content__events__logos">
                <div className="home-page-content__events__logos__card">
                <a href='https://www.stanford.edu' target='blank' className='card-link'> </a>
                    <img src={logo7} alt='brands'/>
                </div>
                <div className="home-page-content__events__logos__card">
                <a href='https://www.techstars.com' target='blank' className='card-link'> </a>
                
                    <img  src={logo10}  alt='brands'/>
                </div>
                <div className="home-page-content__events__logos__card">
                <a href='https://www.berkeley.edu ' target='blank' className='card-link'> </a>
                
                    <img src={logo1}  alt='brands'/>
                </div>
                <div className="home-page-content__events__logos__card">
                <a href='https://slack.com ' target='blank' className='card-link'> </a>
                
                    <img src={logo6}  alt='brands'/>
                </div>
                <div className="home-page-content__events__logos__card">
                <a href='https://startupestonia.ee' target='blank' className='card-link'> </a>
                
                    <img src={logo8} alt='brands'/>
                </div>
                <div className="home-page-content__events__logos__card">
                <a href='https://garage48.org' target='blank' className='card-link'> </a>
                
                    <img src={logo2} alt='brands'/>
                   
                </div>
                <div className="home-page-content__events__logos__card">
                <a href='https://siliconvalleyinyourpocket.com' target='blank' className='card-link'> </a>
                
                    <img src={logo5} alt='brands'/>
                  
                </div>
                <div className="home-page-content__events__logos__card">
                <a href='https://svihub.com' target='blank' className='card-link'> </a>
                
                    <img src={logo9} alt='brands'/>
                </div>
                <div className="home-page-content__events__logos__card">
                <a href='https://itumagnet.com' target='blank' className='card-link'> </a>
                
                    <img src={logo3} alt='brands'/>
                </div>
            </div>
            <div className="home-page-content__events__desc">
            <img src={arrowIcon} />
            <h1><span>Our </span>International Partners</h1>
            </div>
        </div>
    )
}


export default InterPartner