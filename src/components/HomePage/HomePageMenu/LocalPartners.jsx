import React  from 'react'


//icon
import arrowIcon from'../../../img/icons _ graphics/Asset 11.png'
//images
import logo1 from '../../../img/localPartners/Femtech(4) (1).png'
import logo2 from '../../../img/localPartners/Game Tech Logo (1) (1).png'
import logo3 from '../../../img/localPartners/innoland.png'
import logo5 from '../../../img/localPartners/nextsteplogo.png'
import logo6 from '../../../img/localPartners/sup.vc.png'

const LocalPartners = () => {

    return(
        <div className="home-page-content__events bg-dark">
          <div className="home-page-content__events__desc local-patern">
            <img src={arrowIcon} />
            <h1><span>Our Local </span> Partners</h1>
            </div>
            <div className="home-page-content__events__logos">
                <div className="home-page-content__events__logos__card">
                <a href='https://sup.az' target='blank' className='card-link'> </a>
                
                    <img src={logo6} alt='brands'/>
                </div>
                <div className="home-page-content__events__logos__card">
                <a href='http://innoland.az' target='blank' className='card-link'> </a>
                
                    <img  src={logo3}  alt='brands'/>
                </div>
              
                <div className="home-page-content__events__logos__card">
                <a href='http://icnextstep.com' target='blank' className='card-link'> </a>
                
                    <img src={logo5}  alt='brands'/>
                </div>
              
                <div className="home-page-content__events__logos__card">
                <a href='https://game.tech.az' target='blank' className='card-link'> </a>
                
                    <img src={logo2} alt='brands'/>
                   
                </div>
                <div className="home-page-content__events__logos__card">
                <a href='http://fem.tech.az' target='blank' className='card-link'> </a>
                
                    <img src={logo1} alt='brands'/>
                  
                </div>
               
            </div>
           
       
       
        </div>
    )
}


export default LocalPartners