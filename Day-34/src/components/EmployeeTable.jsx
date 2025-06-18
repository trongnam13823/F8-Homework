import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import EditIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import DeleteIcon from "@mui/icons-material/DeleteOutlineOutlined";
import PropTypes from "prop-types";

export default function EmployeeTable({ employees, onEdit, onDelete }) {
    return (
        <TableContainer sx={{ mt: 2 }}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell align="right">Age</TableCell>
                        <TableCell>Address</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {employees.map((e) => (
                        <TableRow key={e.id}>
                            <TableCell>{e.id}</TableCell>
                            <TableCell>{e.name}</TableCell>
                            <TableCell align="right">{e.age}</TableCell>
                            <TableCell>{e.address}</TableCell>
                            <TableCell sx={{ display: "flex", gap: 2 }}>
                                <EditIcon
                                    color="success"
                                    sx={{ fontSize: 28, cursor: "pointer" }}
                                    onClick={() => onEdit(e)}
                                />
                                <DeleteIcon
                                    color="error"
                                    sx={{ fontSize: 28, cursor: "pointer" }}
                                    onClick={() => onDelete(e)}
                                />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
