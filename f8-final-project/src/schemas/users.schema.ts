import { z } from 'zod'

export enum Role {
  Admin = 'admin',
  Teacher = 'teacher',
  Student = 'student'
}

export enum Status {
  Confirming = 'confirming'
}

export const emailSchema = z.email('Email không hợp lệ')
export const passwordSchema = z.string().min(6, 'Mật khẩu phải có ít nhất 6 ký tự')
export const nameSchema = z.string().min(1, 'Tên không được để trống')
export const roleSchema = z.enum(Role)
export const statusSchema = z.enum(Status)

export const loginSchema = z.object({
  email: emailSchema,
  password: passwordSchema
})

export const registerSchema = z
  .object({
    name: nameSchema,
    email: emailSchema,
    password: passwordSchema,
    confirmPassword: z.string(),
    role: roleSchema,
    status: statusSchema
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Mật khẩu nhập lại không khớp'
  })

export type LoginPayload = z.infer<typeof loginSchema>
export type RegisterPayload = z.infer<typeof registerSchema>
