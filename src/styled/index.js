import styled from 'styled-components'

export const StyledTitle = styled.h3`
  text-align:center;
`

export const StyledDashed = styled.div`
  width: 100%;
  height: 2px;
  background-image: linear-gradient(to right, #ccc 0%, #ccc 50%, transparent 50%);
  background-size: 20px 2px;
  background-repeat: repeat-x;
`
export const StyledSection = styled.section`
  // border:1px solid red;
`

export const StyledColumns = styled.div`
  display:grid;
  padding:10px 10px;
  grid-template-columns:${props => props.colsWidth.join(' ')};
`
export const StyledLabel = styled.div`
  text-align:${({ align = "left" }) => align}
`
export const StyledValue = styled.div`
  text-align:${({ align = "left" }) => align}
`