import React from 'react';
import userLogo from '../../../resources/userLogo.png';

const ActiveUsersListItem = (props) => {
  const { activeUser } = props;

  const handleListItemPressed = () => {
    // call to other user
  };

  console.log(activeUser);

  return (
    <div className='active_user_list_item' onClick={handleListItemPressed}>
      <div className='active_user_list_image_container'>
        <img className='active_user_list_image' src={userLogo} />
      </div>
      <span className='active_user_list_text'>{activeUser.username}</span>
    </div>
  );
};

export default ActiveUsersListItem;
