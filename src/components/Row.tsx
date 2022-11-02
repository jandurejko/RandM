import styled from 'styled-components'

type justify = 'center' | 'space-around' | 'space-evenly'

const Row = styled.div<{ pt?: number, pb?: number, justify?: justify, gap?: number }>`
  padding-top: ${props => props.pt ? `${props.pt}px` : "0px"};
  padding-bottom: ${props => props.pb ? `${props.pb}px` : "0px"};
  display: flex;
  justify-content: ${props => props.justify && props.justify};
  gap: ${props => props.gap && `${props.gap}px`};
`

export default Row
