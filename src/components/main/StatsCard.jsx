import React from 'react';

import PropTypes from 'prop-types';

export default function StatsCard({
  repos, followers, following, title,
}) {
  let valueElement;
  switch (title) {
    case 'Repos':
      valueElement = repos;
      break;
    case 'Following':
      valueElement = following;
      break;
    case 'Followers':
      valueElement = followers;
      break;
    default:
      valueElement = 0;
  }
  return (
    <div className="flex flex-col justify-center text-center text-xs gap-1">
      <p className="md:text-lg">{title}</p>
      <span
        className="
        font-bold text-xl
        dark:text-custom-grayish-white-lighter
        md:text-4xl"
      >
        {valueElement}
      </span>
    </div>
  );
}

StatsCard.propTypes = {
  title: PropTypes.string.isRequired,
  repos: PropTypes.number,
  followers: PropTypes.number,
  following: PropTypes.number,
};

StatsCard.defaultProps = {
  repos: 0,
  followers: 0,
  following: 0,
};
