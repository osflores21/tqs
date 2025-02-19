import { Anchor, Flex, Group, Image, List, Modal, Text, ScrollArea, Stack } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks';

const Footer = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <Flex justify={"space-around"} p={"xs"} align={"center"} bg={"#4CC5C4"} >
      <Flex w={"90%"} justify={"space-between"}>
        <Group gap={64} align='center'>
          <Image src={"/logo_TQS.svg"} w={80} fit='contain' />
        </Group>
        <Group gap={64} align='center'>
          <Anchor onClick={open} target="_blank" fz={16} c='#ffff'>
            Términos y Condiciones 2025
          </Anchor>
        </Group>
      </Flex>
      <Modal
        opened={opened}
        onClose={close}
        title="Términos y Condiciones"
        w={"100%"}
        size={'xl'}
        centered
        scrollAreaComponent={ScrollArea.Autosize}
        zIndex={1001}
      >
        <Stack>
          <Text fz={18} my={"md"}>Asistencia Dental</Text>
          <Text>
            El servicio al que se refiere este programa se prestará al cliente que figure como titular de la cuenta, así como a su cónyuge e hijos menores de 21 años que sean dependientes económicos del titular. Este servicio cuenta con cobertura en las principales ciudades de la República Mexicana, mediante un equipo altamente calificado de dentistas que brindará atención dental en sus consultorios, con los siguientes beneficios que engloba el Plan Dental Preventivo:
          </Text>

          <Text fz={18} my={"md"}>Revisión y Diagnóstico Dental</Text>
          <Text>
            En la consulta, el dentista realizará una revisión de los dientes y encías del cliente, informándole sobre su diagnóstico dental generalizado. Solo en caso de ser necesario, se tomará una radiografía periapical para un mejor diagnóstico (dos eventos al año sin costo). La entrega de las imágenes clínicas, así como la interpretación de estas, estará sujeta a las políticas internas de privacidad del proveedor dental, dado que forman parte de la historia clínica confidencial.
          </Text>

          <Text fz={18} my={"md"}>Limpieza Oral Preventiva</Text>
          <Text>
            El dentista llevará a cabo un pulido de dientes utilizando pastas abrasivas y cepillos giratorios y/o copas de hule. Esta limpieza oral preventiva no podrá realizarse si el paciente presenta sarro por debajo de la línea de las encías, enfermedades bucales, gingivitis (sangrado de encías) o enfermedades periodontales (movilidad de los dientes) que puedan agravarse con el procedimiento, quedando sujeta a la recomendación del dentista (dos eventos al año sin costo). El tiempo promedio de un pulido de dientes es de 10 a 20 minutos, dependiendo del estado de salud bucal de cada persona.
          </Text>

          <Text fz={18} my={"md"}>Eliminación de Sarro Visible</Text>
          <Text>
            Si en la revisión el dentista determina que el cliente presenta sarro visible por encima de la línea de las encías, el cliente podrá solicitar la eliminación de este tipo de sarro, teniendo derecho a dos eventos por año. El número de sesiones necesarias para la eliminación total del sarro visible puede variar según el estado de salud oral del paciente y la cantidad de sarro presente; sin embargo, la asistencia solo cubre dos eventos por año, por lo que los eventos subsecuentes tendrán un costo preferencial que deberá ser pagado directamente al odontólogo al término del tratamiento.
          </Text>

          <Text fz={18} my={"md"}>Aplicación Tópica de Flúor</Text>
          <Text>
            El dentista aplicará flúor a aquellos menores de 12 años que lo requieran. La aplicación del flúor se realizará bajo diagnóstico médico, sin excepción (dos eventos al año sin costo).
          </Text>

          <Text fz={18} my={"md"}>Consultas con Dentistas de Nuestra Red</Text>
          <Text>
            Sin límite de eventos, a precios preferenciales. Los costos de las consultas serán cubiertos por el cliente y pueden variar dependiendo de la zona geográfica y el proveedor. En cualquier otro servicio dental, el usuario podrá obtener precios preferenciales (no acumulables con otras promociones; los costos pueden variar dependiendo del proveedor y la zona geográfica).
          </Text>

          <Text fz={18} my={"md"}>Objetivo de la Limpieza Dental</Text>
          <Text>
            Sin límite de eventos, a precios preferenciales. Los costos de las consultas serán cubiertos por el cliente y pueden variar dependiendo de la zona geográfica y el proveedor. En cualquier otro servicio dental, el usuario podrá obtener precios preferenciales (no acumulables con otras promociones; los costos pueden variar dependiendo del proveedor y la zona geográfica).
          </Text>
          <List spacing="sm" withPadding>
            <List.Item>
              El horario de atención para solicitar la cita dental será las 24 horas, los 365 días del año. La concertación de citas no genera costo.
            </List.Item>
            <List.Item>
              El horario de atención en consultorios es de 10:00 a 19:00 horas de lunes a viernes y de 10:00 a 13:00 horas los sábados; el agendamiento dependerá enteramente de la disponibilidad de la agenda del dentista o clínica dental.
            </List.Item>
            <List.Item>
              El usuario deberá solicitar su agendamiento con un mínimo de 72 horas hábiles de anticipación a su cita dental. Deberá proporcionar dos fechas con 24 horas de diferencia y dos rangos horarios abiertos y diferentes para asistir a su cita (matutino de 09:00 a 14:00 horas o vespertino de 15:00 a 19:00 horas). Ejemplo: lunes y martes en un turno vespertino y sábados en un turno matutino.
            </List.Item>
            <List.Item>
              El cliente recibirá un correo de confirmación de solicitud de cita en un rango de 30 a 60 minutos posteriores a la solicitud.
            </List.Item>
            <List.Item>
              El medio de confirmación de cita será el envío de la Orden de Servicio dental al correo electrónico proporcionado por el usuario, en un horario de 9:00 a 18:00 horas de lunes a viernes, el cual se enviará de 24 a 48 horas hábiles antes de su cita dental.
            </List.Item>
            <List.Item>
              El tiempo regular de espera para la atención dental en el consultorio podría ser de hasta 30 minutos aproximadamente.
            </List.Item>
            <List.Item>
              El tiempo regular de atención dental dependerá de la salud bucal del paciente.
            </List.Item>
            <List.Item>
              El cliente podrá ser atendido por el titular del consultorio o por cualquier odontólogo titulado que labore en la clínica dental asignada.
            </List.Item>
            <List.Item>
              La cita dental podrá concertarse en la localidad solicitada por el titular o en la localidad más cercana al punto de venta (radio de 25 km con respecto al punto de venta), dependiendo totalmente de las alternativas y de la disponibilidad en la agenda del odontólogo y del consultorio al momento de solicitar el servicio.
            </List.Item>
            <List.Item>
              Solo en casos de fuerza mayor se podrá reagendar la cita previamente acordada, ofreciendo nuevas alternativas de cita al cliente directamente.
            </List.Item>
            <List.Item>
              Si durante la consulta el dentista requiere aplicar algún medicamento o realizar algún procedimiento que implique un costo adicional, este deberá ser acordado previamente con el cliente, ya que estos no están considerados dentro de los servicios y, por lo tanto, deberán ser pagados por el cliente.
            </List.Item>
            <List.Item>
              Si el cliente tiene algún problema con la recepción del correo, la realización de su servicio dental o dudas, deberá comunicarse directamente a su línea de atención.
            </List.Item>
            <List.Item>
              Si el paciente cuenta con algún tipo de diversidad funcional, es necesario que lo notifique al momento de realizar su solicitud de servicio dental.
            </List.Item>
            <List.Item>
              Si el cliente no puede acudir a su cita, es importante cancelar con 24 horas de anticipación por el mismo medio en el que fue concertada. En caso de no cancelar con 24 horas de anticipación o de no acudir a su cita, se considerará como un evento otorgado.
            </List.Item>
            <List.Item>
              El cliente deberá presentar en el consultorio la orden de servicio y una identificación oficial.
            </List.Item>
          </List>

          <Text fz={18} my={"md"}>Exclusiones de la Limpieza Oral Preventiva y Sarro Visible</Text>
          <List type="ordered" withPadding mb={"md"}>
            <List.Item>Eliminación de sarro infragingival: sarro profundo que se encuentra por debajo de la línea de las encías..</List.Item>
            <List.Item>Gingivitis: enfermedad bucal bacteriana que ocasiona inflamación y sangrado de las encías.</List.Item>
            <List.Item>Periodontitis: enfermedad crónica que provoca la pérdida irreversible del hueso del diente, inflamación de los ligamentos y movilidad o pérdida de las piezas dentales.</List.Item>
            <List.Item>No se brindará atención a usuarios que estén bajo el influjo de alcohol o sustancias tóxicas y/o cuando haya falta de respeto hacia el profesional de salud y/o se ponga en riesgo la seguridad del profesional o de las instalaciones de la clínica o consultorio, así como de sus trabajadores.</List.Item>
            <List.Item>Sujeto a disponibilidad de horario y de red de proveedores disponibles al momento de la solicitud de servicio.</List.Item>
            <List.Item>Si el paciente no notifica que cuenta con algún tipo de diversidad funcional al momento de realizar su solicitud de servicio dental.</List.Item>
          </List>
        </Stack>
      </Modal>
    </Flex>
  )
}

export default Footer