import React from 'react';
import PropTypes from 'prop-types';

export default function ProfileStats({ bio }) {
  return (
    <div>
      <p className="text-custom-black">{bio}</p>
    </div>
  );
}

ProfileStats.propTypes = {
  bio: PropTypes.string.isRequired,
};
