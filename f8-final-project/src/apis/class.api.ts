import http from '@/configs/http'

class ClassApi {
  // GET
  get = () => http.get(`/master/class/`)
}

const classApi = new ClassApi()

export default classApi
