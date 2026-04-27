import { z } from "zod";

export const PQRSF_TIPOS = [
  "Peticion",
  "Queja",
  "Reclamo",
  "Sugerencia",
  "Felicitaciones",
] as const;

export const PQRSF_ESTADOS = [
  "nuevo",
  "en_proceso",
  "resuelto",
  "cerrado",
] as const;

export const createPqrsfSchema = z.object({
  tipo: z.enum(PQRSF_TIPOS),
  nombre: z.string().min(1, "El nombre es obligatorio").max(255),
  email: z.string().email("El email no tiene un formato válido").max(255),
  telefono: z.string().max(50).optional(),
  asunto: z.string().min(1, "El asunto es obligatorio").max(500),
  descripcion: z.string().min(1, "La descripción es obligatoria"),
});

export const updateEstadoSchema = z.object({
  estado: z.enum(PQRSF_ESTADOS),
});

export const listFiltersSchema = z.object({
  tipo: z.enum(PQRSF_TIPOS).optional(),
  estado: z.enum(PQRSF_ESTADOS).optional(),
});

export type CreatePqrsfInput = z.infer<typeof createPqrsfSchema>;
export type UpdateEstadoInput = z.infer<typeof updateEstadoSchema>;
export type PqrsfTipo = (typeof PQRSF_TIPOS)[number];
export type PqrsfEstado = (typeof PQRSF_ESTADOS)[number];

export interface PqrsfRow {
  id: number;
  tipo: PqrsfTipo;
  nombre: string;
  email: string;
  telefono: string | null;
  asunto: string;
  descripcion: string;
  estado: PqrsfEstado;
  fecha_creacion: number;
  fecha_actualizacion: number;
  deleted_at: number | null;
}
