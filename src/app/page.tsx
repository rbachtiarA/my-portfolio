import Hero from "@/components/hero/hero";
// import MyWorks from "@/components/hero/myWorks";
// import Skillset from "@/components/hero/skillset";
import { lazy, Suspense } from "react";

const MyWorks = lazy(() => import('@/components/hero/myWorks'))
const Skillset = lazy(() => import('@/components/hero/skillset'))
export default function Home() {
    return (
        <section className="h-full grid md:grid-cols-[50px_1fr_50px] lg:grid-cols-[1fr_3fr_1fr] space-y-10">
            <div className="col-start-2">
                <Hero />
            </div>
            <Suspense fallback={<div className="col-start-2 row-start-2">Loading ....</div>}>
                <div className="col-start-2">
                    <Skillset />
                </div>
            </Suspense>
            <Suspense fallback={<div>Loading ....</div>}>
            <div className="col-start-2">
                <MyWorks />
            </div>
            </Suspense>
        </section>
    );
}
