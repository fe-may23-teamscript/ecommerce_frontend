import React from 'react';
import './Profile.page.scss';
import { useAppDispatch, useAppSelector } from '../../app/providers/store/lib/redux-hooks';
import { logout, selectUser } from '../../app/providers/store/slices/userSlice';

const ProfilePage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector(selectUser);

  return (
    <>
      profile page
      ------
      <h1>{user}</h1>
      ------
      <button
        onClick={() => {
          dispatch(logout);
          location.reload();
        }}
        style={{ width: '200px', padding: '30px'}}
      >
        Logout
      </button>
    </>
  );
};

export default ProfilePage;
