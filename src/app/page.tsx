import Hero from "@/components/hero/hero";
import MyWorks from "@/components/hero/myWorks";
import Skillset from "@/components/hero/skillset";

export default function Home() {
    return (
        <section className="h-full">
            <Hero />
            <Skillset />
            <MyWorks />
        </section>
    );
}
