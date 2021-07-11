import axios from 'axios'

export const IpdataAction =
  (keyword = '3.68.16.3') =>
  async (dispatch) => {
    try {
      const url = `https://geo.ipify.org/api/v1?apiKey=at_gYoPFz7SYZNHXJRgZUGpKxQw5CptM&ipAddress=${keyword}`
      const data = await axios.get(url)

      dispatch({
        type: 'SUCCESS',
        payload: data,
      })
    } catch (error) {
      console.error(error)
    }
  }
