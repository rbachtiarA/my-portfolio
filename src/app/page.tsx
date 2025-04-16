import Introduction from "@/features/hero/Introduction";
import ProjectCollection from "@/features/hero/ProjectCollection";
import Skillset from "@/features/hero/Skillset";

export default function Home() {
  return (
    <section 
      className="
        grid md:grid-cols-[50px_1fr_50px] lg:grid-cols-[1fr_3fr_1fr] 
        px-2 py-4 gap-y-4 md:gap-y-8 [&>div]:col-start-2"
    >
      <Introduction />
      <Skillset />
      <ProjectCollection />
    </section>
  );
}
