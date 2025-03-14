import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://djwuaoelkrtrnqzashos.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRqd3Vhb2Vsa3J0cm5xemFzaG9zIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE4MjE1NTIsImV4cCI6MjA1NzM5NzU1Mn0.a3X4y9kdMZE84awySrt_OYuO1jM63zB-NCL9VgivrcI';

export const supabase = createClient(supabaseUrl, supabaseKey);
