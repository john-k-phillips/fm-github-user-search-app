import React from 'react';
import PropTypes from 'prop-types';

export default function ProfileDetails({
  avatar, name, login, joinedDate,
}) {
  const newDate = new Date(joinedDate).toLocaleDateString('en-US', { day: '2-digit', month: 'short', year: 'numeric' });

  return (
    <div className="flex items-center">
      <img className="w-3/12 rounded-full" src={avatar} alt="" />
      <div className="flex flex-col ml-4">
        <h2
          className="
          text-custom-black-lighter font-bold
            dark:text-white
            md:text-2xl md:ml-6"
        >
          {name}

        </h2>
        <span
          className="
          text-custom-blue
          md:ml-6 text-xl"
        >
          {login !== undefined ? `@${login.toLowerCase()}` : '' }

        </span>
        <span
          className="
          text-custom-grayish-blue-lighter
          dark:text-custom-white-lighter
            md:text-lg ml-6"
        >
          {`Joined ${newDate}`}
        </span>
      </div>
    </div>
  );
}

ProfileDetails.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  login: PropTypes.string,
  joinedDate: PropTypes.string,
};

ProfileDetails.defaultProps = {
  avatar: '',
  name: '',
  login: '',
  joinedDate: '',
};
