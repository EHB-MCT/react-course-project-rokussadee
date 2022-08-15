const apiKey = "6f393ab79f177092825a8bd26d23da8c";

const requests = {
  fetchDiscover: `discover/tv?api_key=${apiKey}&language=nl-NL&sort_by=popularity.desc&page=1&timezone=Belgium%2FBrussels&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`,
  fetchTrending: `trending/tv/week?api_key=${apiKey}`,
  fetchNetlixOriginals: `discover/tv?api_key=${apiKey}&language=nl-NL&sort_by=popularity.desc&page=1&timezone=Belgium%2FBrussels&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0&with_networks=213`,
  fetchTopMovies: `movie/top-rated?api_key=${apiKey}&language=nl-NL`,
}

export default requests;