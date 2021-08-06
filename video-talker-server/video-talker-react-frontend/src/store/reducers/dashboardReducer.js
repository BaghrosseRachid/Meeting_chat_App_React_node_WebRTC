import * as dashboardActions from '../actions/dashboardActions'

const initialeState = {
  username : ''
}

const reducer = (state=initialeState,action)=>{
    switch(action.type){
        case  dashboardActions.DASHBOARD_SET_USERNAME :
            return {
                ...state,
                username:action.username
            }
            default :
             return state
    }
}
export default reducer