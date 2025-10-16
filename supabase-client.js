// supabase-client.js
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm'

const SUPABASE_URL = 'https://wptwecrgylbjcsrndeob.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndwdHdlY3JneWxiamNzcm5kZW9iIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg1NzAxMDksImV4cCI6MjA2NDE0NjEwOX0.Zu-Ma5mB4oCGJJBaiRYYUIKJWX7gOdUcdetCG_P0rHY'

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)