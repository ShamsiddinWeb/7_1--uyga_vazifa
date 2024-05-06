import axios from "axios"

const mainUrl = axios.create({
  baseURL : "https://66361b74415f4e1a5e264a45.mockapi.io/api"
})
export default mainUrl