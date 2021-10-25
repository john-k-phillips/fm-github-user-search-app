import React from 'react';
import PropTypes from 'prop-types';

import StatsCard from './StatsCard';

import InfoComponent from './InfoComponent';

import { ReactComponent as LocationIcon } from '../../assets/icon-location.svg';
import { ReactComponent as WebsiteIcon } from '../../assets/icon-website.svg';
import { ReactComponent as TwitterIcon } from '../../assets/icon-twitter.svg';
import { ReactComponent as CompanyIcon } from '../../assets/icon-company.svg';

export default function ProfileStats({
  bio, repos, followers, following, location, blog, twitter, company, isDarkMode,
}) {
  return (
    <div>
      <p
        className="
        text-custom-gray-lighter mt-8
        dark:text-custom-white-lighter"
      >
        {bio}

      </p>
      <div
        className="
        rounded-xl bg-custom-grayish-white-lighter p-6 mt-5 text-custom-black-lighter flex justify-between gap-5
        dark:bg-custom-black-darker dark:text-white"
      >
        <StatsCard title="Repos" repos={repos} />
        <StatsCard title="Followers" followers={followers} />
        <StatsCard title="Following" following={following} />
      </div>
      <div
        className="flex flex-col gap-2 mt-5 pb-5"
      >
        <InfoComponent image={<LocationIcon fill={isDarkMode ? 'white' : '#4b6a9b'} />} info={location} extraPadding />
        <InfoComponent image={<WebsiteIcon fill={isDarkMode ? 'white' : '#4b6a9b'} />} info={blog} />
        <InfoComponent image={<TwitterIcon fill={isDarkMode ? 'white' : '#4b6a9b'} />} info={twitter} />
        <InfoComponent image={<CompanyIcon fill={isDarkMode ? 'white' : '#4b6a9b'} />} info={company} />
      </div>
    </div>
  );
}

ProfileStats.propTypes = {
  bio: PropTypes.string,

  location: PropTypes.string,
  blog: PropTypes.string,
  twitter: PropTypes.string,
  company: PropTypes.string,

  repos: PropTypes.number,
  followers: PropTypes.number,
  following: PropTypes.number,

  isDarkMode: PropTypes.bool.isRequired,
};

ProfileStats.defaultProps = {
  bio: '',

  location: 'Not Available',
  blog: 'Not Available',
  twitter: 'Not Available',
  company: 'Not Available',

  repos: 0,
  followers: 0,
  following: 0,
};
