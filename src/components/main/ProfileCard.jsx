/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import ProfileDetails from './ProfileDetails';

export default function ProfileCard({ userData }) {
  return (
    <div
      className="
      w-10/12 m-auto mt-5 p-5 rounded-xl bg-white shadow-lg text-white
      dark:bg-custom-grayish-blue-darker"
    >
      <ProfileDetails
        avatar={userData.avatar_url}
        name={userData.name}
        login={userData.login}
        joinedDate={userData.created_at}
      />
    </div>

  );
}
