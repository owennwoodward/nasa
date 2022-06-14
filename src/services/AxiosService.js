import Axios from 'axios'
import { baseURL } from '../env'
export const api = Axios.create({
  baseURL: 'https://api.nasa.gov/planetary/',
  timeout: 8000,

  params: {
    api_key: 'Sq8wXdYIpaQ0PM5pdqkkyt0ShrbIQc2vVjEFtJQl'
  }
})
