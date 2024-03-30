import styled from "styled-components";
import { lightTheme, darkTheme, typography } from "../GlobalStyles";
import { selectTheme } from "../redux/slices/theme";
import { StyledProps } from "../sharedTypes/types";
import { useAppSelector } from "../redux/hooks";

const Container = styled.div<StyledProps>`
  height: calc(100vh - 100px);
  padding: 70px;
  background-color: ${(props) =>
    props.$theme === "light"
      ? lightTheme.colors.lightGrey
      : darkTheme.colors.veryDarkBlue};

  & > p {
    text-align: center;
    line-height: 2em;
    font-size: 2em;
    font-weight: ${typography.weight.medium};
  }
`;

const NotFound = () => {
  const theme = useAppSelector(selectTheme);
  return (
    <Container $theme={theme}>
      <p>ERROR 404</p>
      <p>Page not found</p>
    </Container>
  );
};

export default NotFound;
