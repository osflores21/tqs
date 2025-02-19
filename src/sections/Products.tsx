import { Dispatch, SetStateAction } from 'react';
import { Text, Flex, Box, Paper, Image, Button, List, Title } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

interface Props {
  setActiveSection: Dispatch<SetStateAction<string>>
}

const Products = ({ setActiveSection }: Props) => {
  const isMobile = useMediaQuery('(max-width: 768px)');
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
    <Flex justify="center" align="center" w="100%" direction="column" mb={60} id="products">
      <Title w="75%" c="#EF1154" ta={isMobile ? "center" : "left"} fz={{ base: 35, xs: 40 }} my={24}>Productos</Title>
      <Flex
        justify="space-between"  // Espacios entre los elementos
        direction={{ base: "column", xs: "row" }}
        w="90%"
        align="stretch"
        gap="xl"
      >
        <Box
          w={{ base: "100%", xs: "30%" }}
          style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
        >
          <Image src="/image_productos.svg" w={260} />
        </Box>

        <Box
          w={{ base: "100%", xs: "30%", md: "30%" }}
          style={{ display: "flex" }}
          pos="relative"
        >
          <Box pos="absolute" top={-100} right={0} hiddenFrom="xs">
            <Image src="/image_muela.svg" w={80} h="auto" />
          </Box>
          <Paper
            radius="xl"
            withBorder
            p="lg"
            style={{
              borderColor: "#4CC5C4",
              borderWidth: 2,
              flex: 1,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Flex justify="center" direction="column" align="center" gap={10} style={{ flex: 1 }}>
              <Text c="#EF1154" fz={24} fw={500}>Asistencia dental</Text>
              <Text>Ideales para quienes desean tener cuidado dental al mejor precio:</Text>
              <List spacing="sm" size="sm" withPadding>
                <List.Item>Plan Dental Preventivo o planes personalizados a tus necesidades.</List.Item>
                <List.Item>Revisión y diagnóstico dental completo.</List.Item>
                <List.Item>Limpieza dental con eliminación de cálculo.</List.Item>
                <List.Item>Aplicación de flúor.</List.Item>
                <List.Item>Promociones exclusivas en los demás tratamientos dentales.</List.Item>
              </List>
              <Image src={"/image_etiqueta.svg"} w={200} fit="contain" />
            </Flex>
          </Paper>
        </Box>

        <Box
          w={{ base: "100%", xs: "30%", md: "30%" }}
          style={{ display: "flex" }}
          pos="relative"
        >
          <Box pos="absolute" top={-100} right={0} visibleFrom="xs">
            <Image src="/image_muela.svg" w={80} h="auto" />
          </Box>
          <Paper
            radius="xl"
            withBorder
            p="lg"
            style={{
              borderColor: "#4CC5C4",
              borderWidth: 2,
              flex: 1,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Flex justify="center" direction="column" align="center" gap={10} style={{ flex: 1 }}>
              <Text c="#EF1154" fz={24} fw={500}>Seguro dental</Text>
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
