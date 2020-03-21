import React from 'react';
import PropTypes from 'prop-types';

const ExternalLink = ({ children: content, ...rest }) => (
  <a {...rest} target='_blank' rel='noopener noreferer'>
    {content}
  </a>
);

ExternalLink.propTypes = {
  content: PropTypes.node
};

export default ExternalLink;
