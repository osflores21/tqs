import { Box, Flex, Image, Mark, Paper, Text } from '@mantine/core'
import classes from "../styles/classes.module.css"

const WhoAre = () => {

  return (
    <Flex justify={"center"} w={"100%"} align="center" mb={60} bg={"#E2F5F4"} id='whoAre' >
      <Box w={{base:"90%", xs:"45%"}} py={45}>
        <Paper radius={"xl"} withBorder p={"md"} style={{ borderColor: "#E61D55", borderWidth: 2 }} w={{base:"100%", xs:"85%"}}>
          <Flex justify='center' direction={"column"} align={'center'} gap={10}>
            <Text lh={"xl"} ta={"center"} fz={16}>Brindamos <Mark color='#4CC5C4' c={"#ffff"} className={classes.markRounded}> atención de primer nivel</Mark> para tu salud<br />
              bucal con <Mark color='#4CC5C4' c={"#ffff"} className={classes.markRounded}>dentistas especialistas</Mark> en toda <br />
              la República Mexicana, promoviendo el cuidado preventivo<br /> de tu <Mark color='#4CC5C4' c={"#ffff"} className={classes.markRounded}>sonrisa.</Mark></Text>
            <Text fz={14}>✨ Innovación y experiencia en cada sonrisa ✨</Text>
            <Text c={"#EF1154"} fz={14}>✅ Tecnología de vanguardia: </Text>
            <Text fz={14}>Procesos 100% digitalizados para una experiencia fácil y rápida. </Text>
            <Text c={"#EF1154"} fz={14}>🌍 Red de confianza: </Text>
            <Text fz={14}>+1,080 proveedores listos para atenderte en todo el país.</Text>
            <Text c={"#EF1154"} fz={14}>🏆 +25 años de experiencia: </Text>
            <Text fz={14}>Líderes en la industria con calidad y atención especializada.</Text>
            <Text fw={500} fz={16} ta={"center"}>Tu salud bucal en las mejores manos.<br />¡Sonríe con nosotros!</Text>
          </Flex>
        </Paper>
      </Box>
      <Box w={"35%"} py={45} visibleFrom='md'>
        <Flex justify='center' align={'center'} >
          <Image src={"./image_map.svg"} w={500} fit='contain' />
        </Flex>
      </Box>
    </Flex>
  )
}

export default WhoAre