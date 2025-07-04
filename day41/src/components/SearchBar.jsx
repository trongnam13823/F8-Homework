import { useDispatch, useSelector } from "react-redux";
import { getSearchTerm } from "../store/product/product.selectors";
import { setSearchTerm } from "../store/product/product.actions";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchBar() {
    const dispatch = useDispatch();
    const searchTerm = useSelector(getSearchTerm);

    const handleSearchChange = (event) => {
        dispatch(setSearchTerm(event.target.value));
    };

    return (
        <TextField
            fullWidth
            label="Tìm kiếm theo tên hoặc ID"
            value={searchTerm}
            onChange={handleSearchChange}
            slotProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <SearchIcon />
                    </InputAdornment>
                ),
            }}
            variant="outlined"
            sx={{ mb: 2 }}
        />
    );
}
