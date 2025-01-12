import Hero from "@/components/hero/hero";
import MyWorks from "@/components/hero/myWorks";
import Skillset from "@/components/hero/skillset";
export default function Home() {
  return (
    <section 
      className="
        grid md:grid-cols-[50px_1fr_50px] lg:grid-cols-[1fr_3fr_1fr] 
        [&_div]:col-start-2 px-2 py-4 gap-2"
    >
      <Hero />         
      <Skillset />
      <MyWorks />
    </section>
  );
}
