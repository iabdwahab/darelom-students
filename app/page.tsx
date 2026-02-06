import LandingSection from "@/components/custom/LandingSection";
import { createClient } from "@/utils/supabase/server";

export default async function Home() {
  const supabase = await createClient();

  return (
    <main>
      <LandingSection />
    </main>
  );
}
