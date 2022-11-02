import React from 'react';
import styled from 'styled-components'
import NavigationLink from '../components/NavigationLink'

export const Nav = styled.nav`
  background: #63D471;
  height: 85px;
  display: flex;
  justify-content: center;
`;

const Navbar = (): JSX.Element => {
  return (
    <Nav>
        <NavigationLink text={'Home'} to={'/'} end/>
        <NavigationLink text={'Characters'} to={'/characters'}/>
    </Nav>
  )
}

export default Navbar
