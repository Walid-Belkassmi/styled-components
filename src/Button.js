import styled from "styled-components";
import { Medium } from "../styles/fontSizes";

const Button = styled.button`
  padding: 0 50px;
  font-size: ${Medium};
  color: ${(props) => props.color};
`;

export default Button;
button;
