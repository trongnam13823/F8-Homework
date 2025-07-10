import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts, deleteContact, addContact, updateContact } from "../store/contacts/contactSlice";
import ContactCard from "../components/ContactCard";
import ContactFormModal from "../components/ContactFormModal";
import ConfirmDialog from "../components/ConfirmDialog";
import SearchBar from "../components/SearchBar";
import { Box, Typography, Button, Grid } from "@mui/material";
import { Snackbar, Alert } from "@mui/material";

export default function ContactPage() {
    const dispatch = useDispatch();
    const { data, status, searchTerm } = useSelector((state) => state.contacts);

    const [selectedContact, setSelectedContact] = useState(null);
    const [formOpen, setFormOpen] = useState(false);
    const [confirmOpen, setConfirmOpen] = useState(false);

    const [snackbar, setSnackbar] = useState({
        open: false,
        message: "",
        severity: "success", // success | error | warning | info
    });

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    const filteredContacts = data.filter((c) => {
        return (
            `${c.firstName} ${c.lastName}`.toLowerCase().includes(searchTerm) ||
            c.email.toLowerCase().includes(searchTerm)
        );
    });

    const handleAddNew = () => {
        setSelectedContact(null);
        setFormOpen(true);
    };

    const handleEdit = (contact) => {
        setSelectedContact(contact);
        setFormOpen(true);
    };

    const handleSave = async (data) => {
        try {
            if (selectedContact) {
                await dispatch(updateContact({ id: selectedContact.id, data })).unwrap();
                showSnackbar("Đã cập nhật liên hệ thành công", "success");
            } else {
                await dispatch(addContact(data)).unwrap();
                showSnackbar("Đã thêm liên hệ mới", "success");
            }
            setFormOpen(false);
            setSelectedContact(null);
        } catch (error) {
            showSnackbar(error, "error");
        }
    };

    const handleDeleteClick = (contact) => {
        setSelectedContact(contact);
        setConfirmOpen(true);
    };

    const handleConfirmDelete = async () => {
        try {
            if (selectedContact?.id) {
                await dispatch(deleteContact(selectedContact.id)).unwrap();
                showSnackbar("Đã xóa liên hệ", "success");
            }
        } catch (error) {
            showSnackbar(error, "error");
        } finally {
            setConfirmOpen(false);
            setSelectedContact(null);
        }
    };

    const showSnackbar = (message, severity = "success") => {
        setSnackbar({ open: true, message, severity });
    };

    return (
        <Box>
            <Box display="flex" justifyContent="space-between" alignItems="center" mt={2}>
                <Typography variant="h5">Quản lý Danh bạ</Typography>
                <Button variant="contained" onClick={handleAddNew}>
                    + Thêm liên hệ
                </Button>
            </Box>

            <SearchBar />

            {status === "loading" && <Typography mt={2}>Loading...</Typography>}
            {status === "failed" && <Typography mt={2}>Lỗi khi tải dữ liệu</Typography>}

            <Grid container spacing={2} mt={1}>
                {filteredContacts.map((contact) => (
                    <Grid item xs={12} sm={6} md={3} key={contact.id}>
                        <ContactCard
                            contact={contact}
                            onEdit={() => handleEdit(contact)}
                            onDelete={() => handleDeleteClick(contact)}
                        />
                    </Grid>
                ))}
            </Grid>

            <ContactFormModal
                open={formOpen}
                onClose={() => {
                    setFormOpen(false);
                    setSelectedContact(null);
                }}
                onSubmit={handleSave}
                initial={selectedContact}
            />

            <ConfirmDialog
                open={confirmOpen}
                title="Xác nhận xóa"
                message={
                    selectedContact
                        ? `Bạn có chắc muốn xóa liên hệ "${selectedContact.firstName} ${selectedContact.lastName}"?`
                        : ""
                }
                onClose={() => setConfirmOpen(false)}
                onConfirm={handleConfirmDelete}
                confirmText="Xóa"
                cancelText="Hủy"
                confirmColor="error"
            />

            <Snackbar
                open={snackbar.open}
                autoHideDuration={3000}
                onClose={() => setSnackbar({ ...snackbar, open: false })}
                anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            >
                <Alert
                    onClose={() => setSnackbar({ ...snackbar, open: false })}
                    severity={snackbar.severity}
                    sx={{ width: "100%" }}
                >
                    {snackbar.message}
                </Alert>
            </Snackbar>
        </Box>
    );
}
