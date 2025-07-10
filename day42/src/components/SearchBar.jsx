import { TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { setSearchTerm } from "../store/contacts/contactSlice";

export default function SearchBar() {
    const dispatch = useDispatch();
    return (
        <TextField
            label="Tìm kiếm theo tên hoặc email"
            fullWidth
            margin="normal"
            onChange={(e) => dispatch(setSearchTerm(e.target.value.toLowerCase()))}
        />
    );
}
