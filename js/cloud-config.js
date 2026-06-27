/* Konfiguracja Supabase dla Lili.
   Wpisz dane swojego projektu z Supabase → Settings → API.
   (anon key jest publiczny i bezpieczny do commitu — dostęp chroni RLS.)
   Dopóki url/anonKey są puste, synchronizacja jest wyłączona,
   a aplikacja działa normalnie na localStorage. */
window.LILA_CLOUD = {
  url: "",      // np. "https://abcdxyz.supabase.co"
  anonKey: ""   // np. "eyJhbGciOi..."
};
