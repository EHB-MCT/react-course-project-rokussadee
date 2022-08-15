import axios from "./axios"
import requests from "./requests"

const apiKey = "6f393ab79f177092825a8bd26d23da8c";

class SeriesService{
  // async getDiscoverSeries() {
  //   const response = await fetch(this.baseUrl + requests.fetchDiscover)
  //   console.log(response)
  //   return (
  //     response
  //     ).json()
  // }
  async getDiscoverSeries() {
    const response = await axios.get(requests.fetchDiscover);
    console.log(response)
    return response
  }
  async getTrendingSeries() {
    const response = await axios.get(requests.fetchTrending);
    console.log(response)
    return response
  }
  async getNetflixOriginals() {
    const response = await axios.get(requests.fetchNetlixOriginals);
    console.log(response)
    return response
  }
  async getTopMovies() {
    const response = await axios.get(requests.fetchTopMovies);
    console.log(response)
    return response
  }
  async getSerie(id) {
    const response = await axios.get(`/tv/${id}?api_key=${apiKey}&language=nl-NL`)
    console.log(response)
    return response
  }
}
export const seriesService = new SeriesService();