import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://gvssxarasbkkmkrveoma.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd2c3N4YXJhc2Jra21rcnZlb21hIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDUwODE2MTcsImV4cCI6MjAyMDY1NzYxN30.bqkQ4P68HXi8DEoOenOorOVC8HItzePyIA5Bd6xWMNU";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
