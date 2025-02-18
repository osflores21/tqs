import { Dispatch, SetStateAction } from 'react';
import { Text, Flex, Box, Paper, Image, Button, List, Group } from '@mantine/core';

interface Props {
  setActiveSection: Dispatch<SetStateAction<string>>
}

const Products = ({ setActiveSection }: Props) => {

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
    <Flex justify="center" align="center" w="100%" direction="column" pos={"relative"} mb={50} id='products'>
      <Box w={{ base: "100%", xs: "75%" }} mb={"xl"}>
        <Group justify='center'>
          <Text c="#EF1154" fz={35} fw={500} >
            Productos
          </Text>
          <Image
            src="/image_muela.svg"
            w={50}
            fit="contain"
          />
        </Group>
      </Box>

      <Flex justify="space-around" direction={{ base: "column", xs: "row" }} w="90%" align="stretch" gap="xl">
        <Box w={"30%"} style={{ display: "flex", flexDirection: "column" }} visibleFrom='md'>
          <Flex justify="center" direction="column" align="center" style={{ flex: 1 }}>
            <Image src="/image_productos.svg" w={250} />
          </Flex>
        </Box>
        <Box w={{ base: "100%", xs: "30%" }} style={{ display: "flex" }}>
          <Paper
            radius="xl"
            withBorder
            p="lg"
            style={{ borderColor: "#4CC5C4", borderWidth: 2, flex: 1, display: "flex", flexDirection: "column" }}
          >
            <Flex justify="center" direction="column" align="center" gap={10} style={{ flex: 1 }}>
              <Text c="#EF1154" fz={24} fw={500} >Asistencia dental</Text>
              <Text>Ideales para quienes desean tener cuidado dental al mejor precio:</Text>
              <List spacing="sm" size="sm" withPadding>
                <List.Item>Plan Dental Preventivo o planes personalizados a tus necesidades.</List.Item>
                <List.Item>Revisión y diagnóstico dental completo.</List.Item>
                <List.Item>Limpieza dental con eliminación de cálculo.</List.Item>
                <List.Item>Aplicación de flúor.</List.Item>
                <List.Item>Promociones exclusivas en los demás tratamientos dentales.</List.Item>
              </List>
              <Image src={"/image_etiqueta.svg"} w={200} fit='contain' />
            </Flex>
          </Paper>
        </Box>
        <Box w={{ base: "100%", xs: "30%" }} style={{ display: "flex" }} >
          <Paper
            radius="xl"
            withBorder
            p="lg"
            style={{ borderColor: "#4CC5C4", borderWidth: 2, flex: 1, display: "flex", flexDirection: "column" }}
          >
            <Flex justify="center" direction="column" align="center" gap={10} style={{ flex: 1 }}>
              <Text c="#EF1154" fz={24} fw={500}  >Seguro dental</Text>
              <Text>Ideal para quienes desean estar protegidos en todo momento con el mejor precio.</Text>
              <List spacing="sm" size="sm" withPadding>
                <List.Item>Plan Cobertura Dental Total de hasta 5 mil pesos o planes personalizados a tus necesidades.</List.Item>
                <List.Item>Consulta de urgencia incluida.</List.Item>
                <List.Item>Precios preferenciales para los beneficiarios.</List.Item>
                <List.Item>Ahorro significativo.</List.Item>
                <List.Item>Tecnología avanzada.</List.Item>
              </List>
              <Button w={"50%"} radius={'lg'} mt={"md"} color='#4CC5C4' onClick={() => handleScroll("quote")}>Cotiza tu plan</Button>
            </Flex>
          </Paper>

        </Box>
      </Flex>
    </Flex>
  );
};

export default Products;
