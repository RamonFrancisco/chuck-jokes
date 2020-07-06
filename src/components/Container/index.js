import React from 'react';
import PropTypes from 'prop-types';
import ContainerContent from './style';

const Container = ({ children }) => (
  <ContainerContent>{children}</ContainerContent>
);

Container.propTypes = {
  children: PropTypes.object.isRequired,
};

export default Container;
