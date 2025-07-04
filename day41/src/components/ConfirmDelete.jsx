import DialogTitle from "@mui/material/DialogTitle";
import WarningIcon from "@mui/icons-material/Warning";
import DeleteIcon from "@mui/icons-material/Delete";
import DialogContent from "@mui/material/DialogContent";
import Dialog from "@mui/material/Dialog";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";

export default function ConfirmDelete({ open, onClose, onConfirm, product }) {
    return (
        <Dialog open={open} onClose={onClose} closeAfterTransition={false}>
            <DialogTitle id="confirm-delete-title" sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <WarningIcon color="warning" />
                Xác nhận xóa sản phẩm
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="confirm-delete-description">
                    Bạn có chắc chắn muốn xóa sản phẩm <strong>"{product.name}"</strong> không?
                    <br />
                    Hành động này không thể hoàn tác.
                </DialogContentText>
            </DialogContent>
            <DialogActions sx={{ px: 3, pb: 2 }}>
                <Button onClick={onClose} variant="outlined">
                    Hủy
                </Button>
                <Button onClick={onConfirm} variant="contained" color="error" startIcon={<DeleteIcon />}>
                    Xóa
                </Button>
            </DialogActions>
        </Dialog>
    );
}
