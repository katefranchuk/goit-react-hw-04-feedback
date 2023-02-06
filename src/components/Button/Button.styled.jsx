import styled from 'styled-components';

export const ButtonEl = styled.button`
  width: 60px;
  text-transform: capitalize;
  border: 1px solid #000000;
  border-radius: 4px;
  box-shadow: 0px 8px 24px rgba(149, 157, 165, 0.2);
  outline: none;
  transition: box-shadow 250ms linear;
  cursor: pointer;

  :hover {
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.35);
  }
`;
