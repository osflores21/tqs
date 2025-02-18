import { Text, Flex, Image, Box } from "@mantine/core";
import HubspotContactForm from "../hooks/HubspotContactForm";

const JoinRed = () => {

  return (
    <Flex justify={"center"} w={"100%"} direction="column" align="center" mb={{base:20, md:-40}} id='joinRed'>
      <Flex gap={10} w={{base:"90%", md:"80%"}} direction="column"  >
        <Text c="#4CC5C4" fz={{base:24, xs:32, md:48}} fw={500} ta={"left"}>¡Únete a nuestro equipo médico!</Text>
        <Text fz={{base:18, xs:24, md:30, }} fw={500} ta={"left"}>Ingresa tus datos y nos pondremos en contacto contigo.</Text>

        <Flex w={"100%"} direction={"row"} justify={"center"} >
          <Box  w={{base:"100%", md:"55%"}}>
            <HubspotContactForm
              region="na1"
              portalId="49345418"
              formId="f5da913e-f34c-4745-ac80-487a1c2c58dd"
              targetId="formJoin"
            />
          </Box>
          <Box w={"45%"} display="flex" pos="relative" top={-70} right={50} style={{ zIndex: -5 }} visibleFrom="md">
            <Image src={"/image_unete3.svg"} w={500} fit="contain" />
          </Box>
        </Flex>
      </Flex>
    </Flex>

  );
};


export default JoinRed;
