import React from 'react';
import './Profile.page.scss';

const ProfilePage: React.FC = () => {
  const authorization = false;

  return authorization ? (
    <div className="profile">
      <h2 className="profile__title">Profile Page</h2>
    </div>
  ) : null;
};

export default ProfilePage;
