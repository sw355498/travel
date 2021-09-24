import axios from 'axios'

const serverURI = 'http://localhost:3001'

const API = {
  fetchJourneys: async () => {
    const res = await axios.get(`${serverURI}/api/journeys`)
    return res.data
  },
  fetchTribes: async () => {
    const res = await axios.get(`${serverURI}/api/home/tribes`)
    return res.data
  },
  fetchJourneyInfoGuide: async () => {
    const res = await axios.get(`${serverURI}/api/journeyinfo/guides`)
    return res.data
  },
  fetchJourney: async (id) => {
    const res = await axios.get(`${serverURI}/api/journeys/${id}`)
    return res.data
  },
  toggleJourneyLike: async (id) => {
    await axios.put(`${serverURI}/api/journeys/${id}/like`)
  },
}

export default API
