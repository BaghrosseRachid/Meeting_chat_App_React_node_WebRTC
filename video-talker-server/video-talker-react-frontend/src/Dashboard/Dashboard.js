import React from 'react'
import './Dashboard.css';

const Dashboard = () => {
    return (
        <div className='dashboard_container backgound_main_color'>
            <div className='dashboard_left_section'>
              <div className='dashboard_content_container'>
                  content
              </div>
              <div className='dashboard_rooms_container background_secondary_color'>
                  rooms
              </div>
            </div>
            <div className='dashboard_right_section background_secondary_color'>
              <div className='dashboard_active_users_list'>
                  uers
              </div>
              <div className='dashboard_logo_container'>
                  logo
              </div>
            </div>
        </div>
    )
}

export default Dashboard
