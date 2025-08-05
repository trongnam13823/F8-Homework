import http from '@/configs/http'
import { LoginPayload, RegisterPayload } from '@/schemas/users.schema'

class UsersApi {
  // POST
  login = (data: LoginPayload) => http.post<{ access: string; refresh: string }>(`/login/`, data)
  register = (data: RegisterPayload) => http.post(`/master/user/`, data)

  // GET
  refreshToken = (data: { refresh: string }) => http.post(`/login/get_new_token/`, data)
}

const usersApi = new UsersApi()

export default usersApi
