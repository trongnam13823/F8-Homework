import { z } from "zod";

export const contactSchema = z.object({
    firstName: z.string().trim().min(1, "Họ không được để trống"),
    lastName: z.string().trim().min(1, "Tên không được để trống"),
    email: z.email("Email không hợp lệ").trim(),
    phone: z.string().trim().min(8, "Số điện thoại không hợp lệ"),
    avatar: z.string().trim().min(1, "Vui lòng chọn ảnh"),
});
