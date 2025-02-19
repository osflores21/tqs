import { Dispatch, SetStateAction } from 'react'
import { Flex, Group, Image } from '@mantine/core'
import Navbar from './NavBar'

interface Props {
  setActiveSection: Dispatch<SetStateAction<string>>
}
const Header = ({ setActiveSection }: Props) => {

  const handleScroll = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offset = 80;
      const top = section.offsetTop - offset;

      window.scrollTo({ top, behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  return (

    <Flex
      justify={"space-around"}
      align={"center"}
      py={"xs"}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        backgroundColor: "#fff",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Flex w={"90%"} justify={"space-between"}>
        <Group gap={64} align="center">
          <Image
            src={"/logo_TQS.png"}
            w={80}
            fit="contain"
            style={{ cursor: "pointer" }}
            onClick={() => handleScroll("main")}
          />
          <Image
            src={"/logo_TQS_letters.svg"}
            w={60}
            fit="contain"
            style={{ cursor: "pointer" }}
            onClick={() => handleScroll("main")}
          />
        </Group>
        <Navbar setActiveSection={setActiveSection} />
      </Flex>
    </Flex>
  )
}

export default Header