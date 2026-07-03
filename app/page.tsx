import LandingSection from "@/components/custom/LandingSection";
import { createClient } from "@/utils/supabase/server";



export default async function Home() {
//   const supabase = await createClient();

//   await supabase.from('degrees_2026_term1').insert(data);

  return (
    <main>
      <LandingSection />
    </main>
  );
}
