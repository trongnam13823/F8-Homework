function StudentItem({ student }) {
    return (
        <div style={{ marginBottom: "10px" }}>
            <h2>{student.name}</h2>
            <p>Tuổi: {student.age}</p>
            <p>Ngành học: {student.major}</p>
        </div>
    );
}

export default StudentItem;
