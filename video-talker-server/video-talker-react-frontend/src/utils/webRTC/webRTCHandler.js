import store from "../../store/store";
import {
  setCallState,
  setLocatStream,
  callStates,
} from "../../store/actions/callActions";

const defaultConstrains = {
  video: true,
  audio: true,
};

export const getLocalStream = () => {
  //request guest to allow access to medias which can be camera micro etc

  navigator.mediaDevices
    .getUserMedia(defaultConstrains)
    .then((stream) => {
      store.dispatch(setLocatStream(stream));
      //test the availabality of the peers if we
      // get his ocal stream so thats means that he is available
      store.dispatch(setCallState(callStates.CALL_AVAILABLE));
    })
    .catch((err) => {
      console.log(
        "error occured when trying to get an access to get local stream"
      );
      console.log(err);
    });
};
