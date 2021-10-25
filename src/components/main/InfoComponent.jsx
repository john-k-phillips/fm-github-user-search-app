import React from 'react';
import PropTypes from 'prop-types';

export default function InfoComponent({ image, info, extraPadding }) {
  return (
    <div
      className="
      flex items-center justify-left text-custom-grayish-blue-lighter
      dark:text-custom-white-lighter"
    >
      {image}
      <p
        className={`ml-4 ${extraPadding ? 'ml-5' : ''}`}
      >
        {info === null ? 'Not Available' : info}
      </p>
    </div>
  );
}

InfoComponent.propTypes = {
  image: PropTypes.node.isRequired,
  info: PropTypes.string,
  extraPadding: PropTypes.bool,
};

InfoComponent.defaultProps = {
  extraPadding: false,
  info: 'Not Available',
};
