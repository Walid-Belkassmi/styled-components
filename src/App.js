import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import SmallHeader from "./components/SmallHeader";
import BigHeader from "./components/BigHeader";
import { lightestSlate, slate } from "./styles/colors";
import Paragraph from "./components/Paragraph";

const App = () => {
  return (
    <>
      <Header>
        <NavBar />
      </Header>
      <Main>
        <SmallHeader>Hi, my name is</SmallHeader>
        <BigHeader color={lightestSlate}>Brittany Chiang.</BigHeader>
        <BigHeader color={slate}>I build things for the web.</BigHeader>
        <Paragraph color={slate}>
          I’m a software engineer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building accessible, human-centered products at <a>Upstatement</a>.
        </Paragraph>
      </Main>
    </>
  );
};

export default App;
