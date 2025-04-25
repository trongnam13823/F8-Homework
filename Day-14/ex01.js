// const students = [
//     { name: "An", class: "12A1" },
//     { name: "Bình", class: "12A2" },
//     { name: "Cường", class: "12A1" },
//     { name: "Dung", class: "12A3" },
//     { name: "Em", class: "12A2" }
//   ];

//   const grouped = {}

//  ┌───────────────────────────────┐
//  │for (const student of students)│
//  └┬──────────────────────────────┘
//   │
//   │
//   │   ┌────────────────────────────────────┐
//   ├──►│grouped[student.class] === undefined│
//   │   └┬───────────────────────────────────┘
//   │    │
//   │    │yes
//   │    │
//   │    ▼
//   │   ┌───────────────────────────┐
//   │   │grouped[student.class] = []│
//   │   └───────────────────────────┘
//   │
//   │
//   │   ┌─────────────────────────────────────────┐
//   └──►│grouped[student.class].push(student.name)│
//       └─────────────────────────────────────────┘

const students = [
    { name: "An", class: "12A1" },
    { name: "Bình", class: "12A2" },
    { name: "Cường", class: "12A1" },
    { name: "Dung", class: "12A3" },
    { name: "Em", class: "12A2" },
];

const grouped = {};

for (const student of students) {
    if (grouped[student.class] === undefined) {
        grouped[student.class] = [];
    }
    grouped[student.class].push(student.name);
}

console.log(grouped);
