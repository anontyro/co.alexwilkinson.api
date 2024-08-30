import { SupabaseClient, createClient } from '@supabase/supabase-js';

/**
 * Constructs the default Supabase client
 * @returns
 */
export const makeClient = (): SupabaseClient => {
  const superbaseUrl = process.env.SUPABASE_URL ?? '';
  const superbaseApiKey = process.env.SUPABASE_PUB_API_KEY ?? '';

  return createClient(superbaseUrl, superbaseApiKey);
};
