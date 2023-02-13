import { Link } from "react-router-dom";
import styled from "styled-components";

const NotFound = () => {
  return (
    <StyledNotFound>
      <div>
        <h1>This page does not exist. </h1>
        <p>
          Go to the <Link to="/">Homepage</Link>
        </p>
      </div>
    </StyledNotFound>
  );
};

export default NotFound;

const StyledNotFound = styled.div`
  padding: 20px;
  p {
    padding: 20px;
  }
`;
