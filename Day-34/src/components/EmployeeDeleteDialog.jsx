import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function EmployeeDeleteDialog({
    open,
    employee,
    onClose,
    onConfirm,
}) {
    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Xác nhận xoá</DialogTitle>
            <DialogContent>
                <Typography>
                    Bạn có chắc chắn muốn xoá nhân viên{" "}
                    <strong>{employee?.name}</strong> không?
                </Typography>
            </DialogContent>
            <DialogActions sx={{ p: 3, pt: 1 }}>
                <Button
                    size="large"
                    sx={{ flexGrow: 1 }}
                    variant="outlined"
                    onClick={onClose}
                >
                    Huỷ
                </Button>
                <Button
                    size="large"
                    sx={{ flexGrow: 1 }}
                    onClick={onConfirm}
                    color="error"
                    variant="contained"
                >
                    Xoá
                </Button>
            </DialogActions>
        </Dialog>
    );
}
