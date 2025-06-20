import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Login from "./components/Login";
import Post from "./components/Post";
import { ToastContainer } from "react-toastify";

import { ReactHooksWrapper, setHook } from "react-hooks-outside";

setHook("navigate", useNavigate);

const App = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/post" element={<Post />} />
        </Routes>
        <ToastContainer />
        <ReactHooksWrapper />
    </BrowserRouter>
);

export default App;
