import * as type from "../types"
import { baseURL } from '../baseURL'

//POST REQUEST FOR USER POST
export let authJoin = (data) => (dispatch) => {
    
    console.log('====================================');
    console.log(data);
    console.log('====================================');


    dispatch({type:type.DISABLE_INPUT_BTN, payload:true})
    baseURL.post('/auth/account/',data)
          .then((resp) => dispatch({type:type.JOIN_US, payload:true}) )
          .catch(err => dispatch({type:type.ERROR_MESSAGE, payload:true}))
          .finally(() =>  dispatch({type:type.DISABLE_INPUT_BTN, payload:false}))

}