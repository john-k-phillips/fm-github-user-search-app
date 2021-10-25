import React from 'react';
import PropTypes from 'prop-types';

import ProfileDetails from './ProfileDetails';
import ProfileStats from './ProfileStats';

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
      <ProfileStats
        bio={userData.bio}
        repos={userData.public_repos}
        followers={userData.followers}
        following={userData.following}
      />
    </div>

  );
}

ProfileCard.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  userData: PropTypes.object.isRequired,
};
