import React from 'react';
import styled from 'styled-components'

type ButtonProps = {
  text: string;
  onClick: () => void;
};

const StyledButton = styled.button`
  display: inline-block;
  margin-bottom: 30px;
  outline: none;
  cursor: pointer;
  font-size: 14px;
  line-height: 1;
  border-radius: 500px;
  transition-property: background-color,border-color,color,box-shadow,filter;
  transition-duration: .3s;
  border: 1px solid transparent;
  letter-spacing: 2px;
  min-width: 160px;
  text-transform: uppercase;
  white-space: normal;
  font-weight: 700;
  text-align: center;
  padding: 17px 48px;
  color: #fff;
  background-color: #1ED760;
  height: 48px;
  :hover{
    transform: scale(1.04);
    background-color: #21e065;
  }

`

const Button = ({text, onClick}: ButtonProps): JSX.Element => {
  return (
    <StyledButton onClick={onClick}>
      {text}
    </StyledButton>
  )
}

export default Button
