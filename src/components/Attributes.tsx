import React from 'react';
import styled from 'styled-components'
import Text from './Text'

type AttributesProps = {
  header: string;
  text: string;
};

const StyledHeader = styled.div`
  font-weight: bold;
  padding-top: 6px;
  font-size: larger;
`

const Attributes = ({header, text}: AttributesProps): JSX.Element => {
  return (
    <>
      <StyledHeader>
        {header}
      </StyledHeader>
      <Text text={text} pl={10} />
    </>
  )
}

export default Attributes
