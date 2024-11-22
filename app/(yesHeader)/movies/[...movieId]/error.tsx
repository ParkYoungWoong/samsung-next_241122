'use client'
export default function Error({ error }: { error: Error }) {
  return <h1>Error: {error.message}</h1>
}
