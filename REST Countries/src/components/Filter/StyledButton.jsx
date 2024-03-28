import styled from "styled-components";

const StyledButton = styled.button`
  border: none;
  padding: 5px 0px;
  background-color: transparent;
  color: inherit;
  & > svg {
    width: 25px;
    height: 25px;
  }

  &:hover {
    cursor: pointer;
  }
`;

export default StyledButton;
