// const students = [
//     { name: "An", class: "12A1", score: 8.5 },
//     { name: "Bình", class: "12A1", score: 9.2 },
//     { name: "Cường", class: "12A2", score: 7.5 },
//     { name: "Dung", class: "12A2", score: 9.0 },
//     { name: "Em", class: "12A3", score: 8.0 },
// ];

// const topStudents = {}

// ┌───────────────────────────────┐
// │for (const student of students)│
// └┬──────────────────────────────┘
// │
// │
// │        ┌────────────────────────────────────────┐
// │        │//is new class                          │
// │     ┌──┤topStudents[student.class] === undefined│
// │     │  └────────────────────────────────────────┘
// │     │
// │   ┌─┤ or
// │   │ │
// │   │ │  ┌────────────────────────────────────────────────┐
// │   │ └──┤//is higher score                               │
// │   │    │student.score > topStudents[student.class].score│
// └──►│    └────────────────────────────────────────────────┘
//     │
//     │yes
//     │
//     │    ┌────────────────────────────────────┐
//     └───►│topStudents[student.class] = student│
//          └────────────────────────────────────┘

// const result = [];

// ┌────────────────────────────────────────────────────┐
// │for (const topStudent of Object.values(topStudents))│
// └┬───────────────────────────────────────────────────┘
// │
// │
// │   ┌───────────────────────┐
// └──►│result.push(topStudent)│
//     └───────────────────────┘

const students = [
    { class: "12A1", name: "An", score: 8.5 },
    { class: "12A1", name: "Bình", score: 9.2 },
    { class: "12A2", name: "Cường", score: 7.5 },
    { class: "12A2", name: "Dung", score: 9.0 },
    { class: "12A3", name: "Em", score: 8.0 },
];

function findTopStudentsByClass(students) {
    const topStudents = {};

    for (const student of students) {
        if (topStudents[student.class] === undefined || student.score > topStudents[student.class].score) {
            topStudents[student.class] = student;
        }
    }

    const result = [];

    for (const topStudent of Object.values(topStudents)) {
        result.push(topStudent);
    }

    return result;
}

console.log(findTopStudentsByClass(students));
