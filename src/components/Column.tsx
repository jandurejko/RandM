import styled from 'styled-components'

const Column = styled.div<{ padding?: number }>`
  padding: ${props => props.padding ? `${props.padding}px` : "0px"};
  text-align: left;
`

export default Column
