/* eslint-disable react/prop-types */
import React from 'react';

export default function ProfileDetails({
  avatar, name, login, joinedDate,
}) {
  const newDate = new Date(joinedDate).toLocaleDateString('en-US', { day: '2-digit', month: 'short', year: 'numeric' });

  return (
    <div className="flex items-center">
      <img className="w-3/12 rounded-full" src={avatar} alt="" />
      <div className="flex flex-col ml-4">
        <h2 className="text-black">{name}</h2>
        <span className="text-custom-blue">{login !== undefined ? `@${login.toLowerCase()}` : '' }</span>
        <span className="text-black">{`Joined ${newDate}`}</span>
      </div>
    </div>
  );
}
