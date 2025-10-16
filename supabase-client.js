// supabase/supabaseClient.ts
import { createClient } from '@supabase/supabase-js';
const supabaseUrl ='https://wptwecrgylbjcsrndeob.supabase.co'.trim();
const supabaseAnonKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndwdHdlY3JneWxiamNzcm5kZW9iIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg1NzAxMDksImV4cCI6MjA2NDE0NjEwOX0.Zu-Ma5mB4oCGJJBaiRYYUIKJWX7gOdUcdetCG_P0rHY'.trim();

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
