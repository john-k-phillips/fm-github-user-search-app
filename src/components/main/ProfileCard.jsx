/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

export default function ProfileCard({ userData }) {
  const { name } = userData;
  const avatar = userData.avatar_url;
  return (
    <div
      className="
      w-10/12 m-auto mt-5 p-5 rounded-xl bg-white shadow-lg text-white
      dark:bg-custom-grayish-blue-darker"
    >
      <div className="flex">
        <img className="w-3/12 rounded-full" src={avatar} alt="" />
        <div className="flex flex-col ml-4">
          <h2 className="text-black">{name}</h2>
          <span className="text-custom-blue">{`@${userData.login.toLowerCase()}`}</span>
        </div>
      </div>
    </div>

  );
}
