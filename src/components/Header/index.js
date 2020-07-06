import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderContent, HeaderTitle } from './style';

import { ROUTE_HOME } from '../../defaults/Routes';

const Header = () => (
  <HeaderContent>
    <HeaderTitle>
      <Link to={ROUTE_HOME}>Chuck jokes</Link>
    </HeaderTitle>
  </HeaderContent>
);

export default Header;
