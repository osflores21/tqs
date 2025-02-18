import { Anchor, Group, Image } from '@mantine/core'

const SocialNetwoks = ({size=40}) => {
  return (
    <Group ml={"md"} justify={"center"}>
      <Anchor href="https://www.facebook.com/mxTQS/" target="_blank">
        <Image src={"/logo_facebook.svg"} w={size} />
      </Anchor>
      <Anchor href="https://www.instagram.com/tqs_mx/?igshid=MzRlODBiNWFlZA%3D%3D" target="_blank">
        <Image src={"/logo_instagram.svg"}  w={size}/>
      </Anchor>
      <Anchor href="https://www.linkedin.com/company/tqsmx/" target="_blank">
        <Image src={"/logo_linkedin.svg"}  w={size}/>
      </Anchor>
    </Group>
  )
}

export default SocialNetwoks