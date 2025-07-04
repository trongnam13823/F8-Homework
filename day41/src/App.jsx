import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct, deleteProduct as actionDeleteProduct, updateProduct } from "./store/product/product.actions";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import SearchBar from "./components/SearchBar";
import Button from "@mui/material/Button";
import ProductTable from "./components/ProductTable";
import ProductForm from "./components/ProductForm";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import AddIcon from "@mui/icons-material/Add";
import ConfirmDelete from "./components/ConfirmDelete";

export default function App() {
    const dispatch = useDispatch();
    const [dialogFormOpen, setDialogFormOpen] = useState(false);
    const [dialogConfirmDeleteOpen, setDialogConfirmDeleteOpen] = useState(false);
    const [editingProduct, setEditingProduct] = useState(null);
    const [deleteProduct, setDeleteProduct] = useState(null);
    const [snackbar, setSnackbar] = useState({ open: false, message: "", severity: "success" });

    const handleAddProduct = () => {
        setEditingProduct(null);
        setDialogFormOpen(true);
    };

    const handleEditProduct = (product) => {
        setEditingProduct(product);
        setDialogFormOpen(true);
    };

    const handleDeleteProduct = (product) => {
        setDeleteProduct(product);
        setDialogConfirmDeleteOpen(true);
    };

    const handleConfirmDelete = () => {
        dispatch(actionDeleteProduct(deleteProduct.id));
        setSnackbar({
            open: true,
            message: "Xóa sản phẩm thành công!",
            severity: "success",
        });
        setDialogConfirmDeleteOpen(false);
    };

    const handleSubmitProduct = (productData) => {
        if (editingProduct) {
            dispatch(updateProduct(editingProduct.id, productData));
            setSnackbar({
                open: true,
                message: "Cập nhật sản phẩm thành công!",
                severity: "success",
            });
        } else {
            dispatch(addProduct(productData));
            setSnackbar({
                open: true,
                message: "Thêm sản phẩm thành công!",
                severity: "success",
            });
        }
    };

    const handleCloseSnackbar = () => {
        setSnackbar({ ...snackbar, open: false });
    };

    return (
        <Container maxWidth="lg" sx={{ py: 4 }}>
            <Typography variant="h4" component="h1" gutterBottom align="center">
                Quản lý sản phẩm
            </Typography>

            <Box sx={{ mb: 3 }}>
                <Grid container spacing={2} size={{ xs: 12, md: 12 }}>
                    <Grid size={{ xs: 12, md: 8 }}>
                        <SearchBar />
                    </Grid>
                    <Grid size={{ xs: 12, md: 4 }}>
                        <Button
                            variant="contained"
                            startIcon={<AddIcon />}
                            onClick={handleAddProduct}
                            fullWidth
                            sx={{ height: 56 }}
                        >
                            Thêm sản phẩm
                        </Button>
                    </Grid>
                </Grid>
            </Box>

            <ProductTable onEdit={handleEditProduct} onDelete={handleDeleteProduct} />

            {dialogFormOpen && (
                <ProductForm
                    open={dialogFormOpen}
                    onClose={() => setDialogFormOpen(false)}
                    product={editingProduct}
                    onSubmit={handleSubmitProduct}
                />
            )}

            {deleteProduct && dialogConfirmDeleteOpen && (
                <ConfirmDelete
                    open={dialogConfirmDeleteOpen}
                    onClose={() => setDialogConfirmDeleteOpen(false)}
                    onConfirm={handleConfirmDelete}
                    product={deleteProduct}
                />
            )}

            <Snackbar open={snackbar.open} autoHideDuration={3000} onClose={handleCloseSnackbar}>
                <Alert onClose={handleCloseSnackbar} severity={snackbar.severity} sx={{ width: "100%" }}>
                    {snackbar.message}
                </Alert>
            </Snackbar>
        </Container>
    );
}
