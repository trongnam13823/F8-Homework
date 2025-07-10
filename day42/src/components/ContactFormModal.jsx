import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField,
    Button,
    Stack,
    Typography,
    Box,
} from "@mui/material";
import { useEffect, useState } from "react";
import { contactSchema } from "../schemas/contactSchema";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const fileToBase64 = (file) =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });

const fields = [
    { name: "firstName", label: "Họ" },
    { name: "lastName", label: "Tên" },
    { name: "email", label: "Email" },
    { name: "phone", label: "Số điện thoại" },
];

export default function ContactFormModal({ open, onClose, onSubmit, initial }) {
    const [form, setForm] = useState({ firstName: "", lastName: "", email: "", phone: "", avatar: "" });
    const [errors, setErrors] = useState({});

    useEffect(() => {
        if (initial) setForm(initial);
        else setForm({ firstName: "", lastName: "", email: "", phone: "", avatar: "" });
        setErrors({});
    }, [initial, open]);

    const handleChange = (e) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleAvatarChange = async (e) => {
        const file = e.target.files?.[0];
        if (file) {
            const base64 = await fileToBase64(file);
            setForm((prev) => ({ ...prev, avatar: base64 }));
        }
    };

    const handleSubmit = () => {
        const result = contactSchema.safeParse(form);

        if (!result.success) {
            const newErrors = {};
            result.error.issues.forEach((err) => {
                newErrors[err.path[0]] = err.message;
            });
            setErrors(newErrors);
        } else {
            onSubmit(result.data);
            onClose();
        }
    };

    return (
        <Dialog open={open} onClose={onClose} closeAfterTransition={false}>
            <DialogTitle>{initial ? "Chỉnh sửa liên hệ" : "Thêm liên hệ"}</DialogTitle>
            <DialogContent>
                <Stack spacing={2} mt={1}>
                    {fields.map(({ name, label }) => (
                        <TextField
                            key={name}
                            label={label}
                            name={name}
                            value={form[name]}
                            onChange={handleChange}
                            error={!!errors[name]}
                            helperText={errors[name]}
                            fullWidth
                        />
                    ))}

                    {form.avatar && (
                        <img
                            src={form.avatar}
                            alt="preview"
                            style={{
                                marginTop: 8,
                                width: 80,
                                height: 80,
                                objectFit: "cover",
                                borderRadius: "50%",
                                border: "1px solid #ccc",
                            }}
                        />
                    )}

                    <Box>
                        <Button
                            sx={{
                                textTransform: "unset",
                                ...(errors.avatar && {
                                    borderColor: "currentcolor",
                                    color: "#d32f2f",
                                }),
                            }}
                            fullWidth
                            component="label"
                            variant="outlined"
                            startIcon={<CloudUploadIcon />}
                        >
                            Chọn ảnh đại diện
                            <input type="file" hidden accept="image/*" onChange={handleAvatarChange} />
                        </Button>

                        {errors.avatar && (
                            <Typography color="#d32f2f" fontSize={12} mx="14px" mt="3px">
                                {errors.avatar}
                            </Typography>
                        )}
                    </Box>
                </Stack>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Hủy</Button>
                <Button onClick={handleSubmit} variant="contained">
                    Lưu
                </Button>
            </DialogActions>
        </Dialog>
    );
}
