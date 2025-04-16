import { lazy, Suspense } from "react";

const MyWorkList = lazy(() => import('@/features/projects/myWorksList'))
export default function page() {
  return (
    <section className="py-8">
        <h2 className="text-center text-4xl">My Works</h2>
        <Suspense fallback={<div>Loading ...</div>}>
          <MyWorkList />
        </Suspense>
    </section>
  )
}
