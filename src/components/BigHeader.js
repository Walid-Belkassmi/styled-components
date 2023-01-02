import styled from "styled-components";
import { Large } from "../styles/fontSizes";

const BigHeader = styled.h2`
  padding: 0 50px;
  font-size: ${Large};
  color: ${(props) => props.color};
`;

export default BigHeader;
