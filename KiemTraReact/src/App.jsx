import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
    addProduct,
    deleteProduct as actionDeleteProduct,
    updateProduct,
    setProduct,
} from "./store/product/product.actions";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import ProductTable from "./components/ProductTable";
import ProductForm from "./components/ProductForm";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import ConfirmDelete from "./components/ConfirmDelete";
import Box from "@mui/material/Box";
import productApi from "./api/product.api";
import categoriesApi from "./api/categories.api";
import { setCategory } from "./store/category/category.actions";

export default function App() {
    const dispatch = useDispatch();
    const [dialogFormOpen, setDialogFormOpen] = useState(false);
    const [dialogConfirmDeleteOpen, setDialogConfirmDeleteOpen] = useState(false);
    const [editingProduct, setEditingProduct] = useState(null);
    const [deleteProduct, setDeleteProduct] = useState(null);
    const [snackbar, setSnackbar] = useState({ open: false, message: "", severity: "success" });

    useEffect(() => {
        Promise.all([productApi.getAll(), categoriesApi.getAll()]).then(function (results) {
            const products = results[0];
            const categories = results[1];

            dispatch(setProduct(products));
            dispatch(setCategory(categories));
        });
    }, [dispatch]);

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

    const handleConfirmDelete = async () => {
        const res = await productApi.delete(deleteProduct.id);
        if (res.id) {
            dispatch(actionDeleteProduct(deleteProduct.id));
            setSnackbar({
                open: true,
                message: "Xóa sản phẩm thành công!",
                severity: "success",
            });
        } else {
            setSnackbar({
                open: true,
                message: "Xóa sản phẩm thất bại",
                severity: "error",
            });
        }

        setDialogConfirmDeleteOpen(false);
    };

    const handleSubmitProduct = async (productData) => {
        if (editingProduct) {
            const res = await productApi.put(editingProduct.id, productData);

            if (res?.id) {
                dispatch(updateProduct(editingProduct.id, productData));
                setSnackbar({
                    open: true,
                    message: "Cập nhật sản phẩm thành công!",
                    severity: "success",
                });
            } else {
                setSnackbar({
                    open: true,
                    message: "Cập nhật sản phẩm thất bại!",
                    severity: "error",
                });
            }
        } else {
            const res = await productApi.add(productData);
            if (res?.id) {
                dispatch(addProduct({ id: res.id, ...productData }));
                setSnackbar({
                    open: true,
                    message: "Thêm sản phẩm thành công!",
                    severity: "success",
                });
            } else {
                setSnackbar({
                    open: true,
                    message: "Thêm sản phẩm thất bại!",
                    severity: "error",
                });
            }
        }
    };

    const handleCloseSnackbar = () => {
        setSnackbar({ ...snackbar, open: false });
    };

    return (
        <Box sx={{ minWidth: "100vw", minHeight: "100vh", backgroundColor: "#eee" }}>
            <Container maxWidth="lg" sx={{ py: 4 }}>
                <Typography variant="h4" component="h1" gutterBottom align="center" mb={4}>
                    Quản lý sản phẩm
                </Typography>

                <ProductTable onEdit={handleEditProduct} onDelete={handleDeleteProduct} onAdd={handleAddProduct} />

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

                <Snackbar
                    open={snackbar.open}
                    anchorOrigin={{ vertical: "top", horizontal: "right" }}
                    autoHideDuration={3000}
                    onClose={handleCloseSnackbar}
                >
                    <Alert onClose={handleCloseSnackbar} severity={snackbar.severity} sx={{ width: "100%" }}>
                        {snackbar.message}
                    </Alert>
                </Snackbar>
            </Container>
        </Box>
    );
}
