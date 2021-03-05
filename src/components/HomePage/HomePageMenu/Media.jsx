import React from 'react'

//icon
import arrowIcon from'../../../img/icons _ graphics/Asset 11.png'
import icon1 from'../../../img/icons _ graphics/Asset 6.png'
import icon2 from'../../../img/icons _ graphics/Asset 7.png'
import icon3 from'../../../img/icons _ graphics/Asset 8.png'
import icon4 from'../../../img/icons _ graphics/Asset 9.png'


const Media = ()=>{

    return (
        <div className="home-page-content__corporate" id='4'>
             <div className="home-page-content__corporate__desc">
                 <img src={arrowIcon} />
                 <h1><span>tech.az</span> Media</h1>
            </div>
            <div className="home-page-content__corporate__text">
                <h5>
                    <img src={icon1}/>
                    <p> Trend technology and startup news</p>
                </h5>

                <h5>
                    <img src={icon4}/>
                    <p> The latest gadget reviews </p>
                </h5>

                <h5>
                    <img src={icon2}/>
                    <p> Live streams from international technology events </p>
                </h5>

                <h5>
                    <img src={icon3}/>
                    <p> Special articles on innovations </p>
                </h5>
                
            </div>
           
        </div>
    )
}


export default Media