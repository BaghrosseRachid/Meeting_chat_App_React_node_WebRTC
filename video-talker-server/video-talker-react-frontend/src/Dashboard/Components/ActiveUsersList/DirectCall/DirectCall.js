import React from 'react'
import {connect} from 'react-redux'
import CallingDialog from '../CallingDialog/CallingDialog'
import IncomingCallDialog from '../IncomingCallDialog/IncomingCallDialog'
import CallRejectedDialog from '../CallRejectedDialog/CallRejectedDialog'
import LocalVideoView from '../LocalVideoView/LocalVideoView'
import RemoteVideoView from '../RemoteVideoView/RemoteVideoView'

const DirectCall = (props) => {
    const {localStream,remoteStream}=props
    return (
        <>
            <LocalVideoView localStream ={localStream}></LocalVideoView>
            {remoteStream && <RemoteVideoView remoteStream ={remoteStream}></RemoteVideoView>}
            <CallRejectedDialog/>
            {/* <IncomingCallDialog/>
            <CallDialog/> */}
        </>
    )
}
function mapStateToProps ({call}){
    return {...call}
}

export default connect (mapStateToProps,null) (DirectCall)
