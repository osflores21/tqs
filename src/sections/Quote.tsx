import { Text, Flex, Box, Image } from '@mantine/core';
import HubspotContactForm from '../hooks/HubspotContactForm';
import SocialNetwoks from '../components/SocialNetwoks';

const Quote = () => {
  return (
    <Flex justify={"center"} w={"100%"} bg={"#EF1154"} pos={"relative"} mb={30} id='quote'>
      <Box  style={{ flexBasis: "30%" }} my={20} visibleFrom='md'>
        <Flex justify='center' direction={"column"} align={'center'}  >
          <Image src={"./image_telefono.svg"} w={212} fit='contain' />
        </Flex>
      </Box>
      <Box w={{base:"90%", md:"45%"}} my={20} >
        <Text c="#ffff" fz={30} fw={500} >Contáctanos</Text>
        <Text c={"#ffff"} mb={"xs"}>Ingresa tus datos y nos pondremos en contacto contigo.</Text>

        <HubspotContactForm
          region="na1"
          portalId="49345418"
          formId="fbd1d48d-6b3a-4f01-8e49-b279545b5808"
          targetId="formQuote"
        />
        {/* <HubspotContactForm
          region="na1"
          portalId="49319136"
          formId="9dbc45be-2460-4c96-88aa-833fef4da798"
          targetId="formQuote"
        /> */}

        <Flex justify={"center"} mt={"md"}>
          <SocialNetwoks size={40} />
        </Flex>
      </Box>

    </Flex>
  );
};

export default Quote;
