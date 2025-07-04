import { useEffect, useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";

export default function ProductForm({ open, onClose, product, onSubmit }) {
    const [formData, setFormData] = useState({
        name: "",
        price: "",
        quantity: "",
        unit: "",
    });
    const [errors, setErrors] = useState({});

    useEffect(() => {
        if (product) {
            setFormData({
                name: product.name,
                price: product.price,
                quantity: product.quantity,
                unit: product.unit,
            });
        } else {
            setFormData({ name: "", price: "", quantity: "", unit: "" });
        }

        setErrors({});
    }, [product, open]);

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = "Tên sản phẩm không được để trống";
        }

        if (!formData.price || isNaN(formData.price) || Number(formData.price) <= 0) {
            newErrors.price = "Giá bán phải là số dương";
        }

        if (!formData.quantity || isNaN(formData.quantity) || Number(formData.quantity) <= 0) {
            newErrors.quantity = "Số lượng phải là số dương";
        }

        if (!formData.unit.trim()) {
            newErrors.unit = "Đơn vị không được để trống";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = () => {
        if (validateForm()) {
            onSubmit({
                name: formData.name.trim(),
                price: Number(formData.price),
                quantity: Number(formData.quantity),
                unit: formData.unit.trim(),
            });
            onClose();
        }
    };

    const handleChange = (field) => (event) => {
        setFormData({
            ...formData,
            [field]: event.target.value,
        });

        if (errors[field]) {
            setErrors({ ...errors, [field]: "" });
        }
    };

    return (
        <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth closeAfterTransition={false}>
            <DialogTitle>{product ? "Cập nhật sản phẩm" : "Thêm sản phẩm mới"}</DialogTitle>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    handleSubmit();
                }}
            >
                <DialogContent>
                    <Box sx={{ pt: 2 }}>
                        <Grid container spacing={2}>
                            <Grid size={{ xs: 12 }}>
                                <TextField
                                    fullWidth
                                    label="Tên sản phẩm"
                                    value={formData.name}
                                    onChange={handleChange("name")}
                                    error={!!errors.name}
                                    helperText={errors.name}
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid size={{ xs: 12, sm: 6 }}>
                                <TextField
                                    fullWidth
                                    label="Giá bán (VNĐ)"
                                    type="number"
                                    value={formData.price}
                                    onChange={handleChange("price")}
                                    error={!!errors.price}
                                    helperText={errors.price}
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid size={{ xs: 12, sm: 6 }}>
                                <TextField
                                    fullWidth
                                    label="Số lượng"
                                    type="number"
                                    value={formData.quantity}
                                    onChange={handleChange("quantity")}
                                    error={!!errors.quantity}
                                    helperText={errors.quantity}
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid size={{ xs: 12 }}>
                                <TextField
                                    fullWidth
                                    label="Đơn vị"
                                    value={formData.unit}
                                    onChange={handleChange("unit")}
                                    error={!!errors.unit}
                                    helperText={errors.unit}
                                    variant="outlined"
                                />
                            </Grid>
                        </Grid>
                    </Box>
                </DialogContent>
                <DialogActions sx={{ px: 3, py: 2 }}>
                    <Button onClick={onClose}>Hủy</Button>
                    <Button type="submit" variant="contained">
                        {product ? "Cập nhật" : "Thêm mới"}
                    </Button>
                </DialogActions>
            </form>
        </Dialog>
    );
}
