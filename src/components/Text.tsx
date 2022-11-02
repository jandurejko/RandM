import React from 'react';
import styled from 'styled-components'

type TextProps = {
  text: string;
  margin?: number;
  pt?: number;
  pb?: number;
  pl?: number;
  bold?: boolean;
  size?: number;
};


const StyledText = styled.p<{props: Omit<TextProps, "text">}>`
  padding-top: ${props => props.props.pt ? `${props.props.pt}px` : "0px"};
  padding-bottom: ${props => props.props.pb ? `${props.props.pb}px` : "0px"};
  padding-left: ${props => props.props.pl ? `${props.props.pl}px` : "0px"};
  margin: ${props => props.props.margin ? `${props.props.margin}px` : "16px"};
  font-weight: ${props => props.props.bold ? `bold` : "400"};
  font-size: ${props => props.props.size ? `${props.props.size}px` : "16xp"};
`

const Text = (props: TextProps): JSX.Element => {
  const {text, ...rest} = props

  return (
      <StyledText props={rest}>
        {text}
      </StyledText>
  )
}

export default Text
