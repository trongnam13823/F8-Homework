import http from '@/configs/http'
import { ClassItem, CreatePayload } from '@/schemas/class.schema'

class ClassApi {
  // GET
  get = () => http.get<ClassItem[]>(`/master/class/`)
  create = (data: CreatePayload) => http.post(`/master/class/`, data)
}

const classApi = new ClassApi()

export default classApi
