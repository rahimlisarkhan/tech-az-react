import React from 'react'
import Events from './HomePageMenu/Event'
import Media from './HomePageMenu/Media'
import InterPartners from './HomePageMenu/InterPartners'
import LocalPartners from './HomePageMenu/LocalPartners'
import TeamMembers from './HomePageMenu/TeamMembers'
import JoinUs from './HomePageMenu/JoinUs'
import Popup from './HomePageMenu/Popup'

const HomePage = (props) =>{

    return(
        <section className="home-page-content" >
            <Events/>
            <Media/>
            <InterPartners/>
            <LocalPartners/>
            <TeamMembers/>
            <JoinUs disableBtn={props.disableBtn}  handleClick={props.handleClick}/>
            {props.popup ?<Popup/>:''}
            </section>
    )

}

export default HomePage