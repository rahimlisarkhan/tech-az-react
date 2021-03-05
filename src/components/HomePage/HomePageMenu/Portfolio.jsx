import React  from 'react'

//images
import logo1 from '../../../img/portfolio/azergold.png'
import logo2 from '../../../img/portfolio/bakcell.png'
import logo3 from '../../../img/portfolio/bank resp.png'
import logo5 from '../../../img/portfolio/coca cola.png'
import logo6 from '../../../img/portfolio/kend teserrufat naz.png'
import logo7 from '../../../img/portfolio/maestrologo.png'
import logo8 from '../../../img/portfolio/NRYTN LOGO.png'
import logo9 from '../../../img/portfolio/pashabank logo.png'
import logo10 from '../../../img/portfolio/socar aqs logo.png'
import logo11 from '../../../img/portfolio/amada 1.png'
import logo12 from '../../../img/portfolio/undp.png'
import logo13 from '../../../img/portfolio/az t b.png'



const Portfolio = () => {

    return(
        <div className="home-page-content__events">
            <h1>Portfolio Companies</h1>
            <div className="home-page-content__events__logos">
                <div className="home-page-content__events__logos__card">
                    <a href='https://www.bankrespublika.az' target='blank' className='card-link'> </a>
                    <img src={logo3} alt='brands'/>
                </div>
                <div className="home-page-content__events__logos__card">
                <a href='http://www.coca-cola.az/az/home/' target='blank' className='card-link'> </a>
                    <img  src={logo5}  alt='brands'/>
                </div>
                <div className="home-page-content__events__logos__card">
                <a href='https://www.pashabank.az/lang,az/' target='blank' className='card-link'> </a>
                    <img src={logo9} alt='brands'/>
                </div>
              
                <div className="home-page-content__events__logos__card">
                <a href='https://maestro.tech.az/' target='blank' className='card-link'> </a>
                    <img src={logo7} alt='brands'/>
                    <p>Maestro</p>
                </div>
                <div className="home-page-content__events__logos__card">
                <a href='https://www.bakcell.com/az' target='blank' className='card-link'> </a>
                    <img src={logo2} alt='brands'/>
                   
                </div>
                <div className="home-page-content__events__logos__card">
                <a href='https://azergold.az' target='blank' className='card-link'> </a>
                    <img src={logo1} alt='brands'/>
                  
                </div>
                <div className="home-page-content__events__logos__card">
                <a href='https://agro.gov.az/az' target='blank' className='card-link'> </a>
                    <img src={logo6}  alt='brands'/>
                    <p>Kənd Təsərrüfatı Nazirliyi </p>
                </div>
                <div className="home-page-content__events__logos__card">
                <a href='https://mincom.gov.az/az/' target='blank' className='card-link'> </a>
                    <img src={logo8} alt='brands'/>
                </div>
                <div className="home-page-content__events__logos__card">
                <a href='http://www.socar-aqs.com' target='blank' className='card-link'> </a>
                    <img src={logo10} alt='brands'/>
                </div>
                <div className="home-page-content__events__logos__card">
                    <a href='https://www.amada.az' target='blank' className='card-link'> </a>
                    <img src={logo11} alt='brands'/>
                </div>
                <div className="home-page-content__events__logos__card">
                    <a href='https://www.az.undp.org' target='blank' className='card-link'> </a>
                    <img src={logo12} alt='brands'/>
                </div>
                <div className="home-page-content__events__logos__card">
                    <a href='https://www.tourismboard.az' target='blank' className='card-link'> </a>
                    <img src={logo13} alt='brands'/>
                </div>
            </div>
        </div>
    )
}


export default Portfolio