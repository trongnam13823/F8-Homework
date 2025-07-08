import { useEffect, useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { getAllCategories } from "../store/category/category.selectors";
import { useSelector } from "react-redux";
import FormHelperText from "@mui/material/FormHelperText";

export default function ProductForm({ open, onClose, product, onSubmit }) {
    const [formData, setFormData] = useState({
        name: "",
        categoryId: "",
        orderNum: "",
    });
    const [errors, setErrors] = useState({});
    const categories = useSelector(getAllCategories);

    useEffect(() => {
        if (product) {
            setFormData({
                name: product.name,
                categoryId: product.categoryId,
                orderNum: product.orderNum,
            });
        } else {
            setFormData({ name: "", orderNum: "", categoryId: "" });
        }

        setErrors({});
    }, [product, open]);

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = "Tên sản phẩm không được để trống";
        }

        if (!formData.categoryId.trim()) {
            newErrors.categoryId = "Danh mục không được để trống";
        }

        if (!formData.orderNum || isNaN(formData.orderNum) || Number(formData.orderNum) <= 0) {
            newErrors.orderNum = "Số thứ tự phải là số dương";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async () => {
        if (validateForm()) {
            onSubmit({
                name: formData.name.trim(),
                categoryId: formData.categoryId,
                orderNum: Number(formData.orderNum),
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
            <DialogTitle>{product ? "Chỉnh sửa sản phẩm" : "Thêm sản phẩm mới"}</DialogTitle>
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
                            <Grid size={{ xs: 12 }}>
                                <FormControl fullWidth error={!!errors.categoryId}>
                                    <InputLabel id="category-select-label">Danh mục</InputLabel>
                                    <Select
                                        labelId="category-select-label"
                                        id="category-select"
                                        value={formData.categoryId}
                                        label="Danh mục"
                                        onChange={handleChange("categoryId")}
                                    >
                                        {categories.map((c) => {
                                            return <MenuItem value={c.id}>{c.name}</MenuItem>;
                                        })}
                                    </Select>
                                    <FormHelperText color="error">{errors.categoryId}</FormHelperText>
                                </FormControl>
                            </Grid>
                            <Grid size={{ xs: 12 }}>
                                <TextField
                                    fullWidth
                                    label="Số lượng"
                                    type="number"
                                    value={formData.orderNum}
                                    onChange={handleChange("orderNum")}
                                    error={!!errors.orderNum}
                                    helperText={errors.orderNum}
                                    variant="outlined"
                                />
                            </Grid>
                        </Grid>
                    </Box>
                </DialogContent>
                <DialogActions sx={{ px: 3, py: 2 }}>
                    <Button onClick={onClose}>Hủy</Button>
                    <Button type="submit" variant="contained">
                        {product ? "Chỉnh sửa" : "Thêm mới"}
                    </Button>
                </DialogActions>
            </form>
        </Dialog>
    );
}
