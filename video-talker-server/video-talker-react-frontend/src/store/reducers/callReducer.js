import * as callActions from "../actions/callActions";

const initialeState = {
  localStream:null,
  callState:callActions.callStates.CALL_UNAVAILBLE
};

const reducer = (state = initialeState, action) => {
  switch (action.type) {
    case callActions.CALL_SET_LOCAL_STREAM:
      return {
        ...state,
        localStream:action.localStream
      };
      case callActions.CALL_SET_CALL_STATE:
        return{
          ...state,
          callState:action.callState
        }
   
    default:
      return state;
  }
};
export default reducer;
