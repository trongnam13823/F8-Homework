// src/components/ConfirmDialog.jsx

import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography } from "@mui/material";

export default function ConfirmDialog({
    open,
    title = "Xác nhận",
    message = "Bạn có chắc chắn muốn tiếp tục?",
    onClose,
    onConfirm,
    confirmText = "Xóa",
    cancelText = "Hủy",
    confirmColor = "error",
}) {
    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>{title}</DialogTitle>
            <DialogContent>
                <Typography>{message}</Typography>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>{cancelText}</Button>
                <Button onClick={onConfirm} color={confirmColor} variant="contained">
                    {confirmText}
                </Button>
            </DialogActions>
        </Dialog>
    );
}
