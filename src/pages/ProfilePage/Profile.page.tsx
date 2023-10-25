import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import './Profile.page.scss';
import defaultProfile from 'assets/images/profile.jpg';

const ProfilePage: React.FC = () => {
  const { user } = useAuth0();

  return (
    <div className="profile">
      <h2 className="profile__title">Profile</h2>
      <div className="profile__info">
        <img
          className="profile__image"
          src={user?.picture ? user?.picture : defaultProfile}
          alt={user?.name}
        />
        <table>
          <tbody>
            <tr>
              <td className="profile__info-title">Name: </td>
              <td>{user?.name}</td>
            </tr>
            <tr>
              <td className="profile__info-title">Email: </td>
              <td>{user?.email}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProfilePage;
