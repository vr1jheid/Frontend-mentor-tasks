import styled from "styled-components";

const ErrorContainer = styled.div`
  padding: 50px;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 2em;

  & > p {
    font-size: 2em;
    width: fit-content;
  }
`;

interface Props {
  message: string
}

const Error = ({ message }:Props) => {
  return (
    <ErrorContainer>
      <p>Sorry, we have some troubles right now. Please try later again.</p>
      <p>Error: {message}</p>
    </ErrorContainer>
  );
};

export default Error;
