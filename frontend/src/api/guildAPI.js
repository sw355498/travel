import axios from 'axios'

const serverURI = 'http://localhost:3001'

const API = {
  fetchGuilds: async () => {
    const res = await axios.get(`${serverURI}/Guild`)
    return res.data
  },
}

export default API
