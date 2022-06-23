import axios from "axios"

export const useApi = () => {
  const api = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    params: {
      api_key: process.env.API_KEY,
    },
  })
  return { api }
}

export default useApi
