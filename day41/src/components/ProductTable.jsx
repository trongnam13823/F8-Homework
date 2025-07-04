import { useSelector } from "react-redux";
import { getFilteredProducts } from "../store/product/product.selectors";
import Paper from "@mui/material/Paper";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export default function ProductTable({ onEdit, onDelete }) {
    const products = useSelector(getFilteredProducts);

    const formatPrice = (price) => {
        return new Intl.NumberFormat("vi-VN").format(price);
    };

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow sx={{ backgroundColor: "#f5f5f5" }}>
                        <TableCell>
                            <strong>ID</strong>
                        </TableCell>
                        <TableCell>
                            <strong>Tên sản phẩm</strong>
                        </TableCell>
                        <TableCell>
                            <strong>Giá bán (VNĐ)</strong>
                        </TableCell>
                        <TableCell>
                            <strong>Số lượng</strong>
                        </TableCell>
                        <TableCell>
                            <strong>Đơn vị</strong>
                        </TableCell>
                        <TableCell>
                            <strong>Hành động</strong>
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
                            <TableRow key={product.id} hover>
                                <TableCell>{product.id}</TableCell>
                                <TableCell>{product.name}</TableCell>
                                <TableCell>{formatPrice(product.price)}</TableCell>
                                <TableCell>{product.quantity}</TableCell>
                                <TableCell>{product.unit}</TableCell>
                                <TableCell>
                                    <IconButton onClick={() => onEdit(product)} color="primary" size="small">
                                        <EditIcon />
                                    </IconButton>
                                    <IconButton onClick={() => onDelete(product)} color="error" size="small">
                                        <DeleteIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
