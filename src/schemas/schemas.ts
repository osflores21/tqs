import { z } from "zod";

export const joinSchema = z.object({
  nombre: z.string().min(1, { message: "El nombre es obligatorio" }),
  email: z.string().email({ message: "El correo electrónico no es válido" }),
  telefono: z.string().min(1, { message: "El teléfono es obligatorio" }),
  estado: z.string().min(1, { message: "La dirección es obligatoria" }),
});

export const quoteSchema = z.object({
  nombre: z.string().min(1, "El nombre es requerido"),
  email: z.string().email("Correo electrónico inválido").min(1, "El correo es requerido"),
  tipoServicio: z.string().min(1, "Selecciona un tipo de servicio"),
});