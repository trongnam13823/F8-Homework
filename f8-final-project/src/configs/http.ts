import { AccessDecoded, useUserStore } from '@/store/useUser.store'
import axios from 'axios'
import Cookies from 'js-cookie'
import { jwtDecode } from 'jwt-decode'

const baseURL = 'https://b1u9y178ok.execute-api.ap-southeast-1.amazonaws.com/'

const http = axios.create({ baseURL })

http.interceptors.request.use(
  // Do something before request is sent
  async (config) => {
    if (!Cookies.get('access') && Cookies.get('refresh')) {
      try {
        const res = await axios.post(`${baseURL}login/get_new_token/`, { refresh: Cookies.get('refresh') })

        const { access, refresh } = res.data
        const accessDecoded = jwtDecode<AccessDecoded>(access)
        useUserStore.setState({ accessDecoded })

        Cookies.set('access', access, { expires: new Date(accessDecoded.exp! * 1000) })
        Cookies.set('refresh', refresh, { expires: 9999 })
      } catch {
        Cookies.remove('access')
        Cookies.remove('refresh')
        window.location.href = '/login'
      }
    }

    config.headers.Authorization = `Bearer ${Cookies.get('access')}`

    return config
  },
  // Do something with request error
  (error) => {
    return Promise.reject(error)
  }
)

http.interceptors.response.use(
  // Do something with response data
  (response) => {
    return response
  },
  // Do something with response error
  async (error) => {
    return Promise.reject(error.response.data)
  }
)

export default http
