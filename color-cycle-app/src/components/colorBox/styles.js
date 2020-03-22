import styled from 'styled-components';

export const Div = styled.div`
  margin: auto;
  width: 200px;
  height: 200px;
  padding: 10px;
  border: 2px;
  background-color: ${props => `#${props.colors.red + props.colors.green + props.colors.blue}`}
`;
