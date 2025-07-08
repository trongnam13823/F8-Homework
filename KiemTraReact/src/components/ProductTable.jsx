import { useSelector } from "react-redux";
import { getAllProducts } from "../store/product/product.selectors";
import Paper from "@mui/material/Paper";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { getAllCategoriesMap } from "../store/category/category.selectors";

export default function ProductTable({ onEdit, onDelete, onAdd }) {
    const products = useSelector(getAllProducts);
    const categories = useSelector(getAllCategoriesMap);

    return (
        <TableContainer component={Paper} sx={{ p: 3 }}>
            <Box sx={{ mb: 3, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <Typography variant="h5" component="h2">
                    Danh sách sản phẩm
                </Typography>
                <Button variant="contained" onClick={onAdd}>
                    Thêm mới
                </Button>
            </Box>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            <strong>ID</strong>
                        </TableCell>
                        <TableCell>
                            <strong>Tên sản phẩm</strong>
                        </TableCell>
                        <TableCell>
                            <strong>Danh mục</strong>
                        </TableCell>
                        <TableCell>
                            <strong>Số thứ tự</strong>
                        </TableCell>
                        <TableCell>
                            <strong>Thao tác</strong>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {products.length === 0 ? (
                        <TableRow>
                            <TableCell colSpan={6} align="center">
                                <Typography variant="body2" color="textSecondary">
                                    Không tìm thấy sản phẩm nào
                                </Typography>
                            </TableCell>
                        </TableRow>
                    ) : (
                        products.map((product) => (
                            <TableRow key={product?.id} hover>
                                <TableCell>{product?.id}</TableCell>
                                <TableCell>{product?.name}</TableCell>
                                <TableCell>{categories[product?.categoryId]?.name}</TableCell>
                                <TableCell>{product?.orderNum}</TableCell>
                                <TableCell>
                                    <Box sx={{ display: "flex", gap: 1 }}>
                                        <Button variant="outlined" onClick={() => onEdit(product)}>
                                            Sửa
                                        </Button>
                                        <Button variant="outlined" onClick={() => onDelete(product)} color="error">
                                            Xóa
                                        </Button>
                                    </Box>
                                </TableCell>
                            </TableRow>
                        ))
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
