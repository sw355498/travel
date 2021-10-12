import axios from 'axios'

const serverURI = 'http://localhost:3001'

const API = {
  fetchJourneys: async (page) => {
    const res = await axios.get(`${serverURI}/api/journeys`, {
      withCredentials: true,
    })
    return res.data
  },
  fetchTribes: async () => {
    const res = await axios.get(`${serverURI}/api/home/tribes`, {
      withCredentials: true,
    })
    return res.data
  },
  fetchLangs: async () => {
    const res = await axios.get(`${serverURI}/api/home/langs`)
    return res.data
  },
  fetchMapApiKey: async () => {
    const res = await axios.get(`${serverURI}/api/journeyinfo/MapApiKey`)
    return res.data
  },
  fetchJourneyInfoGuide: async () => {
    const res = await axios.get(`${serverURI}/api/journeyinfo/guides`, {
      withCredentials: true,
    })
    return res.data
  },
  fetchJourney: async (id) => {
    const res = await axios.get(`${serverURI}/api/journeys/${id}`, {
      withCredentials: true,
    })
    return res.data
  },
  toggleJourneyLike: async (id, e) => {
    try {
      await axios.put(
        `${serverURI}/api/journeys/${id}/like`,
        {},
        {
          withCredentials: true,
        }
      )
      alert('收藏成功')
    } catch (e) {
      alert(e.response.data.message)
    }
  },
}

export default API
