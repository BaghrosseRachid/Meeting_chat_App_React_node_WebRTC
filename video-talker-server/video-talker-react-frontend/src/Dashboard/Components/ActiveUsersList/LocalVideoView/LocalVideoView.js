import React, { useRef, useEffect } from "react";

const styles = {
  videoContainer: {
    width: "150px",
    heigt: "150px",
    borderRadius: "8px",
    position: "absolute",
    top: "1%",
    right: "20%",
  },
  videoElement: {
    width: "100%",
    heigt: "100%",
  },
};

const LocalVideoView = ({ localStream }) => {
  const localVideoRef = useRef();

  useEffect(() => {
    if (localStream) {
      const localVideo = localVideoRef.current;
      localVideo.srcObject = localStream;

      //for some browsers which autoplay doesnt marche
      localVideo.onloadedmetadata = () => {
        localVideo.play();
      };
    }
  }, [localStream]);
  return (
    <div className="background_secondary_color" style={styles.videoContainer}>
      <video
        ref={localVideoRef}
        autoPlay
        muted
        style={styles.videoElement}
      ></video>
    </div>
  );
};

export default LocalVideoView;
