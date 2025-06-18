import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";

export default function EmployeeDialog({ open, employee, onClose, onSubmit }) {
    const [form, setForm] = useState({ name: "", age: "", address: "" });
    const [errors, setErrors] = useState({});

    useEffect(() => {
        if (employee) {
            setForm(employee);
        } else {
            setForm({ name: "", age: "", address: "" });
        }
        setErrors({});
    }, [employee, open]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleBlur = (e) => {
        const { name } = e.target;
        const validationErrors = validate();
        setErrors((prev) => ({ ...prev, [name]: validationErrors[name] }));
    };

    const validate = () => {
        const errs = {};
        if (!form.name.trim()) errs.name = "Vui lòng nhập tên";
        if (!form.age) {
            errs.age = "Vui lòng nhập tuổi";
        } else if (isNaN(form.age)) {
            errs.age = "Tuổi phải là số";
        } else if (form.age < 1 || form.age > 100) {
            errs.age = "Tuổi phải từ 1 đến 100";
        }
        if (!form.address.trim()) errs.address = "Vui lòng nhập địa chỉ";
        return errs;
    };

    const handleSubmit = () => {
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        onSubmit({ ...form, age: Number(form.age) });
    };

    return (
        <Dialog open={open} onClose={onClose} fullWidth>
            <DialogTitle>
                {employee ? "Edit Employee" : "Add Employee"}
            </DialogTitle>
            <DialogContent
                sx={{ display: "flex", flexDirection: "column", gap: 2 }}
            >
                <TextField
                    sx={{ mt: 1 }}
                    label="Name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={!!errors.name}
                    helperText={errors.name}
                />
                <TextField
                    label="Age"
                    name="age"
                    type="number"
                    value={form.age}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={!!errors.age}
                    helperText={errors.age}
                />
                <TextField
                    label="Address"
                    name="address"
                    value={form.address}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={!!errors.address}
                    helperText={errors.address}
                />
            </DialogContent>
            <DialogActions sx={{ p: 3, pt: 1 }}>
                <Button
                    size="large"
                    sx={{ flexGrow: 1 }}
                    variant="outlined"
                    onClick={onClose}
                >
                    Cancel
                </Button>
                <Button
                    size="large"
                    sx={{ flexGrow: 1 }}
                    variant="contained"
                    onClick={handleSubmit}
                >
                    {employee ? "Save" : "Add"}
                </Button>
            </DialogActions>
        </Dialog>
    );
}
