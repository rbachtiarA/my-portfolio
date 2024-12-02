import { lazy, Suspense } from "react";

const MyWorkList = lazy(() => import('@/components/works/myWorksList'))
export default function page() {
  return (
    <section className="py-8">
        <h1 className="text-center text-4xl">My Works</h1>
        <Suspense fallback={<div>Loading ...</div>}>
          <MyWorkList />
        </Suspense>
    </section>
  )
}
