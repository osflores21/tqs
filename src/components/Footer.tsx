import { Anchor, Flex, Group, Image } from '@mantine/core'

const Footer = () => {
  return (
    <Flex justify={"space-around"} p={"xs"} align={"center"} bg={"#4CC5C4"} >
      <Flex w={"90%"} justify={"space-between"}>
        <Group gap={64} align='center'>
          <Image src={"/logo_TQS.svg"} w={80} fit='contain' />
        </Group>
        <Group gap={64} align='center'>
          <Anchor href="https://tu-pagina.com" target="_blank" fz={16} c= '#ffff'>
            Términos y Condiciones
          </Anchor>
        </Group>
      </Flex>
    </Flex>
  )
}

export default Footer