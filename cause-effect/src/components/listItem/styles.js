import styled from 'styled-components'

export const ListItemStyle = styled.li `
  width: 100%;

  a {
    display: block;
    color: ${props => props.isSelected ? 'red' : '#000'};
    padding: 8px 16px;
    text-decoration: none;
  }

  a:hover {
    background-color: #555;
    color: white;
  }
`
