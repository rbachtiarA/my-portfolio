import Hero from "@/components/hero/hero";
// import MyWorks from "@/components/hero/myWorks";
// import Skillset from "@/components/hero/skillset";
import { lazy, Suspense } from "react";

const MyWorks = lazy(() => import('@/components/hero/myWorks'))
const Skillset = lazy(() => import('@/components/hero/skillset'))
export default function Home() {
    return (
        <section className="h-full flex flex-col space-y-10 my-10">
            <Hero />
            <Suspense fallback={<div>Loading ....</div>}>
                <Skillset />
            </Suspense>
            <Suspense fallback={<div>Loading ....</div>}>
                <MyWorks />
            </Suspense>
        </section>
    );
}
