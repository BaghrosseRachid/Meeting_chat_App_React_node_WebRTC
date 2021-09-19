import React,{useRef,useEffect} from 'react'

const styles = {
    videoContainer:{
        width:'100%',
        heigt:'100%'
        
    },
    videoElement:{
        width:'100%',
        heigt:'100%',
        
    }
}

const RemoteVideoView = ({remoteStream}) => {

    const remoteVideoRef = useRef()

    useEffect(() => {
       if(remoteStream){
           const remoteVideo = remoteVideoRef.current;
           remoteVideo.srcObject=remoteStream;
            
           //for some browsers which autoplay doesnt marche
           remoteVideo.onloadedmetadata = ()=>{
               remoteVideo.play()
           }
       }
    }, [remoteStream])
    return (
        <div  style={styles.videoContainer}>
            <video ref={remoteVideoRef} autoPlay  style={styles.videoElement}></video>
        </div>
    )
}

export default RemoteVideoView
