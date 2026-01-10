import { createClient } from "@supabase/supabase-js";

const supabaseUrl =
  process.env.NEXT_PUBLIC_SUPABASE_URL! ||
  "https://dxdaiuokqehprpdxfxhl.supabase.co";
const supabaseAnonKey =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY! ||
  "sb_publishable_DoD2Sxoy7lPSHKBvIg24ig_goOMycOd";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
