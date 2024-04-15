//C:\Users\NEWOWNER\local_only\local_ruiztechservices\templates\SaasFrameworks\supabase_saas_boilerplate\src\lib\supabase\client.ts
import { createBrowserClient } from "@supabase/ssr";

export const createClient = () =>
  createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  );