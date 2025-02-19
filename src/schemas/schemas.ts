import { z } from "zod";

export const joinSchema = z.object({
  nombre: z
    .string()
    .trim()
    .min(1, "El nombre debe contener al menos una letra")
    .regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/, "Solo se permiten letras y espacios"),
  email: z.string().email("Ingresa un correo electrónico válido"),
  telefono: z
    .string()
    .length(10, "El número debe tener exactamente 10 dígitos")
    .regex(/^\d+$/, "Solo se permiten números"),
  estado: z
    .string()
    .min(3, "La ubicación debe tener al menos 3 caracteres")
    .regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/, "Solo se permiten letras y espacios"),
});

export const quoteSchema = z.object({
  nombre: z
    .string()
    .trim()
    .min(1, "El nombre debe contener al menos una letra")
    .regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/, "Solo se permiten letras y espacios"),
  email: z.string().email("Correo electrónico inválido").min(1, "El correo es requerido"),
  tipoServicio: z.string().min(1, "Selecciona un tipo de servicio"),
});