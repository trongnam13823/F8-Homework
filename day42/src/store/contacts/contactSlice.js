import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API = "http://localhost:3001/contacts";

// GET
export const fetchContacts = createAsyncThunk("contacts/fetch", async (_, thunkAPI) => {
    try {
        const res = await axios.get(API);
        return res.data;
    } catch (err) {
        return thunkAPI.rejectWithValue(err.message || "Lỗi khi tải danh bạ");
    }
});

// POST
export const addContact = createAsyncThunk("contacts/add", async (data, thunkAPI) => {
    try {
        const res = await axios.post(API, data);
        return res.data;
    } catch (err) {
        return thunkAPI.rejectWithValue(err.message || "Lỗi khi thêm liên hệ");
    }
});

// PUT
export const updateContact = createAsyncThunk("contacts/update", async ({ id, data }, thunkAPI) => {
    try {
        const res = await axios.put(`${API}/${id}`, data);
        return res.data;
    } catch (err) {
        return thunkAPI.rejectWithValue(err.message || "Lỗi khi cập nhật liên hệ");
    }
});

// DELETE
export const deleteContact = createAsyncThunk("contacts/delete", async (id, thunkAPI) => {
    try {
        await axios.delete(`${API}/${id}`);
        return id;
    } catch (err) {
        return thunkAPI.rejectWithValue(err.message || "Lỗi khi xóa liên hệ");
    }
});

const slice = createSlice({
    name: "contacts",
    initialState: {
        data: [],
        status: "idle",
        error: null,
        searchTerm: "",
    },
    reducers: {
        setSearchTerm(state, action) {
            state.searchTerm = action.payload;
        },
    },
    extraReducers(builder) {
        builder
            .addCase(fetchContacts.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchContacts.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.data = action.payload;
            })
            .addCase(fetchContacts.rejected, (state) => {
                state.status = "failed";
                state.error = "Lỗi tải danh bạ";
            })
            .addCase(addContact.fulfilled, (state, action) => {
                state.data.push(action.payload);
            })
            .addCase(updateContact.fulfilled, (state, action) => {
                const index = state.data.findIndex((c) => c.id === action.payload.id);
                if (index !== -1) state.data[index] = action.payload;
            })
            .addCase(deleteContact.fulfilled, (state, action) => {
                state.data = state.data.filter((c) => c.id !== action.payload);
            });
    },
});

export const { setSearchTerm } = slice.actions;
export default slice.reducer;
