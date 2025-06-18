import { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import EditIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import DeleteIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { employees as initEmployees } from "./data.js";
import EmployeeDialog from "./components/EmployeeDialog";
import EmployeeDeleteDialog from "./components/EmployeeDeleteDialog";
import EmployeeTable from "./components/EmployeeTable.jsx";

function App() {
    const [employees, setEmployees] = useState(initEmployees);
    const [selected, setSelected] = useState(null);
    const [openDialog, setOpenDialog] = useState(false);
    const [openDeleteDialog, setOpenDeleteDialog] = useState(false);

    const openAdd = () => {
        setSelected(null);
        setOpenDialog(true);
    };

    const openEdit = (employee) => {
        setSelected(employee);
        setOpenDialog(true);
    };

    const handleUpdateEmployee = (data) => {
        setEmployees((prev) =>
            prev.map((emp) =>
                emp.id === selected.id ? { ...emp, ...data } : emp
            )
        );
    };

    const handleAddEmployee = (data) => {
        const newId = Math.max(0, ...employees.map((e) => e.id)) + 1;
        setEmployees((prev) => [...prev, { ...data, id: newId }]);
    };

    const handleOpenDeleteDialog = (employee) => {
        setSelected(employee);
        setOpenDeleteDialog(true);
    };

    const handleDeleteEmployee = () => {
        setEmployees((prev) => prev.filter((e) => e.id !== selected.id));
        setOpenDeleteDialog(false);
    };

    return (
        <Container>
            <Button
                variant="contained"
                onClick={openAdd}
                sx={{ ml: "auto", display: "block" }}
                size="large"
            >
                Add New
            </Button>

            <EmployeeTable
                employees={employees}
                onEdit={openEdit}
                onDelete={handleOpenDeleteDialog}
            />

            <EmployeeDeleteDialog
                open={openDeleteDialog}
                employee={selected}
                onClose={() => setOpenDeleteDialog(false)}
                onConfirm={handleDeleteEmployee}
            />

            <EmployeeDialog
                open={openDialog}
                employee={selected}
                onClose={() => setOpenDialog(false)}
                onSubmit={(data) => {
                    selected
                        ? handleUpdateEmployee(data)
                        : handleAddEmployee(data);
                    setOpenDialog(false);
                }}
            />
        </Container>
    );
}

export default App;
