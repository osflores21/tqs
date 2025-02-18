import { Dispatch, SetStateAction } from "react";
import { Container } from "@mantine/core";
import Header from "./Header";
import Footer from "./Footer";

interface Props {
  children?: React.ReactNode;
  setActiveSection: Dispatch<SetStateAction<string>>;
}

const Layout: React.FC<Props> = ({ children, setActiveSection }) => {
  return (
    <>
      <Header setActiveSection={setActiveSection} />
      <Container fluid p={0} mt="80px" style={{ minHeight: "100vh" }}>
        {children}
      </Container>
      <Footer />
    </>
  );
};

export default Layout;
