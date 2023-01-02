import styled from "styled-components";
import { Medium } from "../styles/fontSizes";

const Paragraph = styled.p`
  width: 60%;
  padding: 0 50px;
  font-size: ${Medium};
  color: ${(props) => props.color};
`;

export default Paragraph;
