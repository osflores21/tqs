import { z } from "zod";

export const joinSchema = z.object({
  nombre: z.string().min(1, { message: "El nombre es obligatorio" }),
  apellido: z.string().min(1, { message: "El apellido es obligatorio" }),
  email: z.string().email({ message: "El correo electrónico no es válido" }),
  direccion: z.string().min(1, { message: "La dirección es obligatoria" }),
});

export const quoteSchema = z.object({
  nombre: z.string().min(1, "El nombre es requerido"),
  apellido: z.string().min(1, "El apellido es requerido"),
  email: z.string().email("Correo electrónico inválido").min(1, "El correo es requerido"),
  telefono: z.string().min(1, "El correo es requerido"),
  tipoServicio: z.string().min(1, "Selecciona un tipo de servicio"),
});