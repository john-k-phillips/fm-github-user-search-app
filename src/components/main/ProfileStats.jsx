import React from 'react';
import PropTypes from 'prop-types';
import StatsCard from './StatsCard';

export default function ProfileStats({
  bio, repos, followers, following,
}) {
  return (
    <div>
      <p className="text-custom-gray-lighter mt-8">{bio}</p>
      <div
        className="
        rounded-xl bg-custom-grayish-white-lighter p-6 mt-5 text-custom-black-lighter flex justify-between gap-5
        dark:bg-custom-black-darker dark:text-white"
      >
        <StatsCard title="Repos" repos={repos} />
        <StatsCard title="Followers" followers={followers} />
        <StatsCard title="Following" following={following} />
      </div>
    </div>
  );
}

ProfileStats.propTypes = {
  bio: PropTypes.string,
  repos: PropTypes.number,
  followers: PropTypes.number,
  following: PropTypes.number,
};

ProfileStats.defaultProps = {
  bio: '',
  repos: 0,
  followers: 0,
  following: 0,
};
