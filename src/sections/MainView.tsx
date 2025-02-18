// src/sections/MainView.tsx
import { Box, Flex, Image, Text } from '@mantine/core';
import SocialNetwoks from '../components/SocialNetwoks';

const MainView = () => {
  return (
    <Flex direction="column" justify={"center"} align="center" w={"100%"} mb={40} id='main'>
      <Flex justify={"center"} w={"100%"} mt={35}>
        <Box w={{base:"100%", xs:"40%"}}>
          <Flex justify="center" direction={"column"} align={"center"} gap={10}>
            <Image src={"/logo_TQS.svg"} w={200} fit="contain" />
            <Image src={"/logo_TQS_letters.svg"} w={180} fit="contain" />
            <Text fw={400} fz={24} >
              Te quiero sonriendo
            </Text>
            <Text fw={400} fz={30} ta={"center"} c={"#888686"}>
              Seguro y asistencia <br /> dental
            </Text>
          </Flex>
        </Box>
        <Box w={"40%"} visibleFrom='md'>
          <Flex justify="center" direction={"column"} align={"center"}>
            <Image src={"/image_1.svg"} w={450} fit="contain" />
          </Flex>
        </Box>
      </Flex>
      <Box w={{base:"100%", xs:"85%"}} mt={"lg"}>
        <SocialNetwoks />
      </Box>
    </Flex>
  );
};

export default MainView;
