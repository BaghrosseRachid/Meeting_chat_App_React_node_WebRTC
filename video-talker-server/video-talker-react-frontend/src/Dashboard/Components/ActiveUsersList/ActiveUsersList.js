import React from 'react';
import ActiveUsersListItem from './ActiveUsersListItem';

import './ActiveUsersList.css';

const activeUsers = [
  {
    socketId: 321,
    username: 'Rachid'
  },
 
  {
    socketId: 345,
    username: 'Toufik'
  },
  {
    socketId: 345,
    username: 'Abdelilah'
  },
  {
    socketId: 345,
    username: 'Achraf'
  }
];

const ActiveUsersList = () => {
  return (
    <div className='active_user_list_container'>
      {activeUsers.map((activeUser) =>
        <ActiveUsersListItem
          key={activeUser.socketId}
          activeUser={activeUser}
        />)}
    </div>
  );
};

export default ActiveUsersList;
