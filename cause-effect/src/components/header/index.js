import React from 'react';
import { HeaderList } from './styles';

const Header = () => {
  return(
    <center>
      <h1>ReactJS</h1>
      <HeaderList>
        <li><a href="/#">About</a></li>
        <li><a href="/#">Tutorials</a></li>
        <li><a href="/#">Reference</a></li>
        <li><a href="/#">Tools & resource</a></li>
      </HeaderList>
    </center>
  );
}

export default Header;
