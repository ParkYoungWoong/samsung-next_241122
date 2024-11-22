'use client'
import { use, useState, useEffect } from 'react'

export interface MovieDetails {
  Title: string
  Year: string
  Rated: string
  Released: string
  Runtime: string
  Genre: string
  Director: string
  Writer: string
  Actors: string
  Plot: string
  Language: string
  Country: string
  Awards: string
  Poster: string
  Ratings: Rating[]
  Metascore: string
  imdbRating: string
  imdbVotes: string
  imdbID: string
  Type: string
  DVD: string
  BoxOffice: string
  Production: string
  Website: string
  Response: string
}
export interface Rating {
  Source: string
  Value: string
}

export default function MovieDetailsPage({
  params,
  searchParams
}: {
  params: Promise<{ movieId: string }>
  searchParams: Promise<Partial<{ a: string; b: string }>>
}) {
  const { movieId } = use(params)
  const { a, b } = use(searchParams)
  const [movie, setMovie] = useState<MovieDetails | null>(null)

  useEffect(() => {
    fetchMovie()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movieId])

  async function fetchMovie() {
    await new Promise(resolve => setTimeout(resolve, 500))
    const res = await fetch(`https://omdbapi.com/?apikey=7035c60c&i=${movieId}`)
    setMovie(await res.json())
  }

  return (
    <>
      <h1>Movie Details Page!</h1>
      <h2>
        {movieId} / {a} / {b}
      </h2>
      <h2>{movie?.Title}</h2>
      <h2>{movie?.Plot}</h2>
    </>
  )
}
