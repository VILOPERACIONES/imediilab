import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://uwfvfbqaqpnazgwmmvbz.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV3ZnZmYnFhcXBuYXpnd21tdmJ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc0MDQ4MDYsImV4cCI6MjA1Mjk4MDgwNn0.BVdLkV2ICC9iveRvSxaXfVgMbr7NJR9ka-SXlHRU8dE';

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
  estudios: string[];
  activo: boolean;
  orden?: number;
  categorias?: Categoria;
  created_at?: string;
}
