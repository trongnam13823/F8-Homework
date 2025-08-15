import { z } from 'zod'

export enum Role {
  Admin = 'admin',
  Teacher = 'teacher',
  Student = 'student'
}

export enum Status {
  Confirming = 'confirming'
}

export const nameSchema = z.string().min(1, 'Tên không được để trống')
export const codeSchema = z.string().min(1, 'Mã không được để trống')
export const usersSchema = z.number().array()

export const createSchema = z.object({
  name: nameSchema,
  code: codeSchema,
  users: usersSchema
})

export interface ClassUser {
  id: number
  name: string
  status: Status
  role: Role
}

export interface ClassItem {
  id: number
  code: string
  name: string
  users: ClassUser[]
}

export type CreatePayload = z.infer<typeof createSchema>
