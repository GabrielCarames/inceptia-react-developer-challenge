import { z } from "zod"

export const userSchema = z.object({
  email: z
    .string()
    .email({
      message: "El email debe ser válido."
    })
    .min(3, {
      message: "El email debe contener al menos 3 caracteres."
    })
    .max(80, {
      message: "El email debe contener menos de 80 caracteres."
    }),
  password: z
    .string()
    .min(5, {
      message: "La contraseña debe tener al menos 5 caracteres."
    })
    .max(20, {
      message: "La contraseña debe tener hasta 20 caracteres."
    })
})
