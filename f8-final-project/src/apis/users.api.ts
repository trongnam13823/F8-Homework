import http from '@/configs/http'
import { LoginPayload, RegisterPayload, PersonalInfoPayload, ChangePasswordPayload } from '@/schemas/users.schema'

class UsersApi {
  // POST
  login = (data: LoginPayload) => http.post<{ access: string; refresh: string }>(`/login/`, data)
  register = (data: RegisterPayload) => http.post(`/master/user/`, data)

  // GET / POST
  refreshToken = (data: { refresh: string }) => http.post(`/login/get_new_token/`, data)

  // PUT cập nhật thông tin cá nhân
  updateInfo = (id: number, data: PersonalInfoPayload) => http.put(`/master/user/${id}`, data)

  // POST đổi mật khẩu (FE gửi Base64 của old_password và new_password)
  changePassword = (data: ChangePasswordPayload) => http.post(`/master/user/change_password`, data)
}

const usersApi = new UsersApi()

export default usersApi
