import React  from 'react'

//icon
import arrowIcon from'../../../img/icons _ graphics/Asset 11.png'

//images
import logo1 from '../../../img/brands/deeplearning.png'
import logo2 from '../../../img/brands/Devops.png'
import logo3 from '../../../img/brands/fuckup.png'
import logo5 from '../../../img/brands/ganja.png'
import logo6 from '../../../img/brands/slack.png'
import logo7 from '../../../img/brands/techstars.png'
import logo8 from '../../../img/brands/esa.png'
import logo9 from '../../../img/brands/product .png'


const Events = () => {

    return(
        <div className="home-page-content__events"id='2'>
            <div className="home-page-content__events__logos">
                <div className="home-page-content__events__logos__card bg-none">
                    <a href='https://slack.com/intl/en-az/' target='blank' className='card-link'> </a>
                    <img src={logo6} alt='brands'/>
                </div>
                <div className="home-page-content__events__logos__card bg-none">
                <a href='https://www.startupgrind.com/' target='blank' className='card-link'> </a>
                    <img  src={logo5}  alt='brands'/>
                </div>
                <div className="home-page-content__events__logos__card bg-none">
                <a href='https://www.techstars.com' target='blank' className='card-link'> </a>
                    <img src={logo7} alt='brands'/>
                </div>
                <div className="home-page-content__events__logos__card bg-none">
                <a href='https://www.fuckupnights.com' target='blank' className='card-link'> </a>
                    <img src={logo3}  alt='brands'/>
                </div>
                <div className="home-page-content__events__logos__card bg-none">
                <a href='https://devopsdays.org' target='blank' className='card-link'> </a>
                    <img src={logo2} alt='brands'/>
                </div>
                <div className="home-page-content__events__logos__card bg-none">
                <a href='https://euroasianstartupawards.com' target='blank' className='card-link'> </a>
                    <img src={logo8} alt='brands'/>
                </div>
                <div className="home-page-content__events__logos__card bg-none">
                  <a href='https://www.producthunt.com' target='blank' className='card-link'> </a>
                    <img src={logo9} alt='brands'/>
                  
                </div>
                <div className="home-page-content__events__logos__card bg-none">
                 <a href='https://www.deeplearning.ai/' target='blank' className='card-link'> </a>
                    <img src={logo1} alt='brands'/>
                </div>
            </div>
            
            <div className="home-page-content__events__desc">
            <img src={arrowIcon} />
            <h1><span>International</span> Event Brands</h1>
            </div>
       
        </div>
    )
}


export default Events