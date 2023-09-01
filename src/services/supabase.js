import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://yyvblsdhtwjdpnqcczun.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl5dmJsc2RodHdqZHBucWNjenVuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTMzMjQ5NTgsImV4cCI6MjAwODkwMDk1OH0.Dq8ACkRWWP3XtyN_lIQI6iaPqjMtWfdb1ge-4cVDRZ0";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
