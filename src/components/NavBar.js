import styled from "styled-components";
import { green, lightestSlate } from "../styles/colors";
// import { IconLogo } from "./IconLogo";
import { xSmall } from "../styles/fontSizes";

const NavLink = styled.a`
  color: ${lightestSlate};
  font-size: ${xSmall};
  display: inline-block;
  position:: relative;
`;

const NavLinksWrapper = styled.div`
  display: flex;
  flex: row;
  align-items: center;
`;

const NavLogo = styled.p`
  padding: 10px;
  color: ${green};
  border: 1px solid ${green};
`;

const NavLinkPdf = styled.a`
  border: 1px solid ${green};
  color: ${green};
  padding: 12px 16px;
  border-radius: 5px;
  margin-left: 15px;
  font-size: ${xSmall};
`;

const OL = styled.ol`
  display: flex;
  gap: 5px;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  padding: 0px;
  margin: 0px;
`;

const LI = styled.li`
  color: ${green};
  padding: 0 5px;
  margin: 0px 5px;
  position: relative;
  counter-increment: item 1;
  font-size: ${xSmall};
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const NavBar = () => {
  return (
    <>
      {/* <IconLogo /> */}
      <Nav>
        <NavLogo>B</NavLogo>
        <NavLinksWrapper>
          <OL>
            <LI>
              <NavLink>About</NavLink>
            </LI>
            <LI>
              <NavLink>Experience</NavLink>
            </LI>
            <LI>
              <NavLink>Work</NavLink>
            </LI>
            <LI>
              <NavLink>Contact</NavLink>
            </LI>
          </OL>
          <NavLinkPdf>Resume</NavLinkPdf>
        </NavLinksWrapper>
      </Nav>
    </>
  );
};
export default NavBar;
