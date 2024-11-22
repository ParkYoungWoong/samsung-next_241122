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

export default async function MovieDetailsPage({
  params,
  searchParams
}: {
  params: Promise<{ movieId: string }>
  searchParams: Promise<Partial<{ a: string; b: string }>>
}) {
  const { movieId } = await params
  const { a, b } = await searchParams
  await new Promise(resolve => setTimeout(resolve, 500))
  let movie: MovieDetails | null = null
  try {
    const res = await fetch(`https://omdbapi.co/?apikey=7035c60c&i=${movieId}`)
    movie = await res.json()
  } catch (err) {
    console.log(err)
    throw new Error('주소가 잘못되었어요!')
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
