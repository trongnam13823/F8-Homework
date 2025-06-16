import React, { useState } from "react";
import StudentList from "./StudentList";

function Ex02() {
    const [students, _] = useState([
        { id: 1, name: "Nguyễn Văn An", age: 20, major: "CNTT" },
        { id: 2, name: "Lê Thị Bích", age: 21, major: "Marketing" },
        { id: 3, name: "Trần Quốc Cường", age: 22, major: "Kế toán" },
    ]);

    return (
        <div>
            <h2>Danh sách sinh viên</h2>
            <StudentList students={students} />
        </div>
    );
}

export default Ex02;
