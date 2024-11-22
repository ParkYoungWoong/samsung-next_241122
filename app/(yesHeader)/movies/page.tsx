'use client'
import { useState } from 'react'

export default function MoviesPage() {
  const [searchText, setSearchText] = useState('')
  return (
    <>
      <h1>Movies Page!</h1>
      <input
        className="rounded-md border-2 border-gray-300 p-2"
        value={searchText}
        onChange={e => setSearchText(e.target.value)}
      />
      <h2>{searchText}</h2>
    </>
  )
}
