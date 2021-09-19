import React,{useEffect} from 'react';
import {useSelector} from 'react-redux'
import ActiveUsersListItem from './ActiveUsersListItem';

import './ActiveUsersList.css';

// const activeUsers = [
//   {
//     socketId: 321,
//     username: 'Rachid'
//   },
 
//   {
//     socketId: 346,
//     username: 'Toufik'
//   },
//   {
//     socketId: 347,
//     username: 'Abdelilah'
//   },
//   {
//     socketId: 348,
//     username: 'Achraf'
//   }
// ];

const ActiveUsersList = () => {
  const dashboard = useSelector(state => state.dashboard)
  
  useEffect(() => {
    console.log(dashboard.activeUser)
  }, [])
  return (
    <div className='active_user_list_container'>
      {dashboard.activeUsers.map((activeUser) =>
        <ActiveUsersListItem
          key={activeUser.socket}
          activeUser={activeUser}
        />)}
    </div>
  );
};


export default ActiveUsersList;
