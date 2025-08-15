import { z } from 'zod'

// ===== Các enum =====
export enum Role {
  Admin = 'admin',
  Teacher = 'teacher',
  Student = 'student'
}

export enum Status {
  Confirming = 'confirming'
}

// ===== Các schema cơ bản =====
export const emailSchema = z.email('Email không hợp lệ')
export const passwordSchema = z.string().min(6, 'Mật khẩu phải có ít nhất 6 ký tự')
export const nameSchema = z.string().min(1, 'Tên không được để trống')
export const roleSchema = z.enum(Role)
export const statusSchema = z.enum(Status)

// ===== Schema login/register =====
export const loginSchema = z.object({
  email: emailSchema,
  password: passwordSchema
})

export const registerSchema = z
  .object({
    name: nameSchema,
    email: emailSchema,
    password: passwordSchema,
    confirmPassword: passwordSchema,
    role: roleSchema,
    status: statusSchema
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Mật khẩu nhập lại không khớp'
  })

// ===== Schema Personal Info =====
export const schoolSchema = z.string().optional()
export const parentNameSchema = z.string().optional()
export const parentPhoneSchema = z
  .string()
  .optional() // không bắt buộc
  .refine((val) => !val || /^[0-9]{9,15}$/.test(val), 'Số điện thoại phụ huynh không hợp lệ')

export const avataSchema = z
  .object({
    id: z.number(),
    url: z.url(),
    payload: z.string().optional()
  })
  .nullable()
  .optional()

export const personalInfoSchema = z.object({
  name: nameSchema,
  email: emailSchema,
  school: schoolSchema,
  parent_name: parentNameSchema,
  parent_phone: parentPhoneSchema,
  avata: avataSchema
})

// ===== Schema Change Password =====
// Sử dụng lại passwordSchema đã định nghĩa
export const changePasswordSchema = z
  .object({
    id: z.number(),
    old_password: passwordSchema, // Mật khẩu cũ
    new_password: passwordSchema, // Mật khẩu mới
    confirmPassword: passwordSchema
  })
  .refine((data) => data.old_password !== data.new_password, {
    path: ['new_password'],
    message: 'Mật khẩu mới không được trùng mật khẩu cũ'
  })
  .refine((data) => data.new_password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Mật khẩu nhập lại không khớp'
  })

// ===== Types =====
export type LoginPayload = z.infer<typeof loginSchema>
export type RegisterPayload = z.infer<typeof registerSchema>
export type PersonalInfoPayload = z.infer<typeof personalInfoSchema>
export type ChangePasswordPayload = z.infer<typeof changePasswordSchema>
