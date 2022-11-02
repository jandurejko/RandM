import React from 'react';
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

type ButtonProps = {
  text: string;
  to: string;
  end?: boolean
};

export const StyledNavLink = styled(NavLink)`
  color: #808080;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 2rem;
  &.active {
    color: #000000;
  }
`;

const NavigationLink = ({text, to, end}: ButtonProps): JSX.Element => {
  return (
    <StyledNavLink to={to} end={!!end}>
      {text}
    </StyledNavLink>
  )
}

export default NavigationLink
