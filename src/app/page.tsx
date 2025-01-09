import Hero from "@/components/hero/hero";
import MyWorks from "@/components/hero/myWorks";
import Skillset from "@/components/hero/skillset";
export default function Home() {
    return (
        <section className="h-full grid md:grid-cols-[50px_1fr_50px] lg:grid-cols-[1fr_3fr_1fr] space-y-10 [&_div]:col-start-2">
            <div>
                <Hero />
            </div>

            <div>
                <Skillset />
            </div>

            <div>
                <MyWorks />
            </div>
        </section>
    );
}
