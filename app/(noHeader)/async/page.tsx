import { Suspense } from 'react'
import Abc from './Abc'
import Xyz from './Xyz'
import Loader from '@/components/Loader'

// Abc => 2초
// Xyz => 4초

export default function AsyncPage() {
  return (
    <>
      <h1>Async Page</h1>
      <Suspense fallback={<Loader color="red" />}>
        <Xyz />
      </Suspense>
      <Suspense fallback={<Loader color="blue" />}>
        <Abc />
      </Suspense>
    </>
  )
}
