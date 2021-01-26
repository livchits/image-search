import * as React from 'react';
import PropTypes from 'prop-types';

function Alert({ type, children }) {
  return (
    <p
      className={`px-6 py-12 mt-12 font-mono text-xl leading-relaxed text-center text-gray-800 rounded-lg shadow-sm max-w-max bg-opacity-10 mx-auto ${
        type === 'error' ? 'bg-red-900' : 'bg-gray-700'
      }`}
    >
      {children}
    </p>
  );
}

Alert.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Alert;
