import StudentItem from "./StudentItem";

function StudentList({ students }) {
    return (
        <div>
            {students.map((student) => (
                <StudentItem key={student.id} student={student} />
            ))}
        </div>
    );
}

export default StudentList;
