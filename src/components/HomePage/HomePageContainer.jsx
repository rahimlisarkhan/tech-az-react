import {connect} from 'react-redux';
import React from 'react'
import Header from '../Header/Header'
import HomePage from './HomePage'
import { authJoin } from '../../redux/actions/homePageActions';

const HomePageContainer = (props) => {
    console.log(props.state.homePage);
    return(
        <>
        <Header/>
        <HomePage handleClick={(data)=> props.authJoin(data)}
                  popup={props.state.homePage.joinUsUser}
                  disableBtn={props.state.homePage.disableInput}
                  />
        </>
    )
}


let mapStateToProps = (state) =>({state:state.homePage})

export default connect(mapStateToProps,{authJoin})(HomePageContainer);