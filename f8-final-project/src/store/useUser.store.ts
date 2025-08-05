import { create } from 'zustand'
import { jwtDecode } from 'jwt-decode'
import { Role } from '@/schemas/users.schema'

export interface AccessDecoded {
  id: number
  name: string
  email: string
  role: Role
  parent_name: string | null
  parent_phone: string | null
  school: string | null
  avata: { id: number | null; url: string | null }
  exp: number
}

interface UserState {
  accessDecoded: AccessDecoded | null
  setAccessDecoded: (access: string | undefined) => void
}

export const useUserStore = create<UserState>()((set) => ({
  accessDecoded: null,
  setAccessDecoded: (access) => {
    const decoded = access ? jwtDecode<AccessDecoded>(access) : null
    set({ accessDecoded: decoded })
  }
}))
