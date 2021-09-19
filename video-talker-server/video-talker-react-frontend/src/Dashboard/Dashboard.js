import React,{useEffect} from 'react'
import './Dashboard.css';
import logo from '../resources/logo.jpg'
import ActiveUsersList from './Components/ActiveUsersList/ActiveUsersList';
import *as webRTCHandler from '../utils/webRTC/webRTCHandler'
import DirectCall from './Components/ActiveUsersList/DirectCall/DirectCall';
const Dashboard = () => {
useEffect(() => {
    webRTCHandler.getLocalStream()
}, [])

    return (
        <div className='dashboard_container backgound_main_color'>
            <div className='dashboard_left_section'>
              <div className='dashboard_content_container'>
                  <DirectCall/>
              </div>
              <div className='dashboard_rooms_container background_secondary_color'>
                  rooms
              </div>
            </div>
            <div className='dashboard_right_section background_secondary_color'>
              <div className='dashboard_active_users_list'>
                  <ActiveUsersList/>
              </div>
              <div className='dashboard_logo_container'>
              <img className='dashboard_logo_image' src={logo} alt='VideoTalker' />
              </div>
            </div>
        </div>
    )
}

export default Dashboard
