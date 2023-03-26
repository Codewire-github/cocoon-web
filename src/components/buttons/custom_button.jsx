import styled, { css } from "styled-components";

export const CButton = styled.button`
  background-color: black;
  color: white;
  padding: 0.8rem 1.5rem;
  font-size: 1.1rem;
  font-weight: bold;
  border: none;
  border-radius: 0.8rem;

  ${(props) =>
    props.primary &&
    css`
      background-color: purple;
    `}
`;
