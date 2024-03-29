export const callStates = {
  CALL_UNAVAILABLE: "CALL_UNAVAILABLE ",
  CALL_AVAILABLE: "CALL_AVAILABLE",
  CALL_IN_PROGRESS: "CALL_IN_PROGRESS",
};

export const CALL_SET_LOCAL_STREAM = "CALL_SET_LOCAL_STREAM";
export const CALL_SET_CALL_STATE = "CALL_SET_CALL_STATE";

export const setLocatStream = (localStream) => {
  return {
    type: CALL_SET_LOCAL_STREAM,
    localStream,
  };
};

export const setCallState = (callState) => {
  return {
    type: CALL_SET_CALL_STATE,
    callState,
  };
};
