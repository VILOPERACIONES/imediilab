import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Types for database tables
export interface Servicio {
  id: number;
  nombre: string;
  descripcion: string;
  icono?: string;
  activo: boolean;
  orden?: number;
  created_at?: string;
}

export interface Categoria {
  id: number;
  nombre: string;
  color?: string;
}

export interface Paquete {
  id: number;
  nombre: string;
  descripcion?: string;
  precio: number;
  categoria_id?: number;
  incluye: string[];
  activo: boolean;
  orden?: number;
  categorias?: Categoria;
  created_at?: string;
}
