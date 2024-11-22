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
  params
}: {
  params: Promise<{ movieId: string }>
}) {
  const { movieId } = await params
  await new Promise(resolve => setTimeout(resolve, 3000))
  const res = await fetch(`https://omdbapi.com/?apikey=7035c60c&i=${movieId}`)
  const movie: MovieDetails = await res.json()
  return (
    <>
      <h1>Movie Details Page!</h1>
      <h2>{movieId}</h2>
      <h2>{movie.Title}</h2>
      <h2>{movie.Plot}</h2>
    </>
  )
}
