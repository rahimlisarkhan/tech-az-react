import React  from 'react'
import * as icon from 'react-icons/fa'
import arrowIcon from'../../../img/icons _ graphics/Asset 11.png'

//images
import logo1 from '../../../img/team/Jamil Huseynzada project manager.png'
import logo2 from '../../../img/team/İlgar Alirizayev Program menecer.png'
import logo3 from '../../../img/team/Sanan abdullayev content manager.png'
import logo6 from '../../../img/team/Tariyel aghazada managing director.png'


const TeamMembers = () => {
    return(
        <div id='6' className="home-page-content__events bg-dark d-flex-col">
         
            <div className="home-page-content__events__logos bg-white">
                  <div className="home-page-content__events__logos__card bg-green">
                    <div className='teamcontent'>

                        <div className="teamcontent__desc">
                            <h1>Sanan <br/> abdullayev</h1>
                            <h3>content manager <br/> sanan@tech.az </h3>
                        </div>
                        <div className="teamcontent__sosial">
                            <a href='https://www.facebook.com/profile.php?id=100057574088086  ' target='blank'> <icon.FaFacebookSquare className='icon'/></a>
                            <a href='https://www.linkedin.com/in/sənan-abdullayev-56a194205/ ' target='blank'>  <icon.FaLinkedin className='icon'/></a>
                            <a href='https://www.instagram.com/senanabdl/' target='blank'>  <icon.FaInstagramSquare className='icon'/></a>
                        </div>
                      
                    </div>   


                  <img className='team' src={logo3} alt='brands'/>

                </div>
                <div className="home-page-content__events__logos__card bg-green">
                    <div className='teamcontent'>

                        <div className="teamcontent__desc">
                            <h1>ılgar <br/> Alirizayev</h1>
                            <h3>Program manager <br/> ilqar@tech.az </h3>
                        </div>   
                        <div className="teamcontent__sosial">
                            <a href='https://www.facebook.com/ilgar.alirzayev ' target='blank'> <icon.FaFacebookSquare className='icon'/></a>
                            <a href='https://www.linkedin.com/in/igorthenomad/ ' target='blank'>  <icon.FaLinkedin className='icon'/></a>
                            <a href='https://www.instagram.com/igorthenomad/' target='blank'>  <icon.FaInstagramSquare className='icon'/></a>
                        </div>
                      
                    </div>


                  <img className='team' src={logo2} alt='brands'/>

                </div>
                <div className="home-page-content__events__logos__card bg-green">
                    <div className='teamcontent'>

                        <div className="teamcontent__desc">
                            <h1>Jamil <br/> Huseynzada</h1>
                            <h3> project manager  <br/> jamil@tech.az </h3>
                        </div>  
                        <div className="teamcontent__sosial">
                            <a href='https://www.facebook.com/cemil.huseynzade.7' target='blank'> <icon.FaFacebookSquare className='icon'/></a>
                            <a href='https://www.linkedin.com/in/cemilhuseynzade/' target='blank'>  <icon.FaLinkedin className='icon'/></a>
                            <a href='https://www.instagram.com/cemilhuseynzade/ ' target='blank'>  <icon.FaInstagramSquare className='icon'/></a>
                        </div>
                      
                    </div>


                  <img className='team' src={logo1} alt='brands'/>

                </div>
                <div className="home-page-content__events__logos__card bg-green">
                    <div className='teamcontent'>

                        <div className="teamcontent__desc">
                            <h1>Tariyel <br/> Aghazada</h1>
                            <h3>Managing director <br/> tariyel@tech.az </h3>
                        </div>
                        <div className="teamcontent__sosial">
                            <a href='https://www.facebook.com/tariyel.agayev.3 ' target='blank'> <icon.FaFacebookSquare className='icon'/></a>
                            <a href='https://www.linkedin.com/in/tariyelaghazada/' target='blank'>  <icon.FaLinkedin className='icon'/></a>
                            <a href='https://www.instagram.com/tariyelaghazada/ ' target='blank'>  <icon.FaInstagramSquare className='icon'/></a>
                        </div>
                      
                    </div>


                  <img className='team' src={logo6} alt='brands'/>

                </div>
          
            </div>
            <div className="home-page-content__events__desc local-patern">
              <img src={arrowIcon} />
              <h1><span>Team </span> Members</h1>
          </div>
        
        </div>
    )
}


export default TeamMembers