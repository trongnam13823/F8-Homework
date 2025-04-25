// const students = [
//     { name: "An", class: "12A1", score: 8.5 },
//     { name: "Bình", class: "12A1", score: 9.2 },
//     { name: "Cường", class: "12A2", score: 7.5 },
//     { name: "Dung", class: "12A2", score: 9.0 },
//     { name: "Em", class: "12A3", score: 8.0 },
// ];

// const classSummary = {};

// ┌───────────────────────────────┐
// │for (const student of students)│
// └┬──────────────────────────────┘
// │
// │
// │    Nếu lớp chưa tồn tại trong classSummary thì khởi tạo
// │   ┌─────────────────────────────────────┐
// ├──►│classSummary[className] === undefined│
// │   └┬────────────────────────────────────┘
// │    │
// │    │yes
// │    │
// │    ▼
// │   ┌────────────────────────────────────────────────────────────┐
// │   │classSummary[className] = { totalScore: 0, studentCount: 0 }│
// │   └────────────────────────────────────────────────────────────┘
// │
// │
// │    Cộng dồn điểm và tăng số lượng học sinh
// │   ┌─────────────────────────────────────────────────────┐
// └──►│classSummary[className].totalScore += student.score; │
//     │classSummary[className].studentCount++;              │
//     └─────────────────────────────────────────────────────┘

// const result = [];

// ┌─────────────────────────────────────┐
// │for (const className in classSummary)│
// └┬────────────────────────────────────┘
// │
// │
// │    Tính điểm trung bình của từng lớp
// │   ┌───────────────────────────────────────────────────────────────┐
// │   │const summary = classSummary[className];                       │
// ├──►│const averageScore = summary.totalScore / summary.studentCount;│
// │   └───────────────────────────────────────────────────────────────┘
// │
// │   ┌─────────────────────────────────────────────────────────────┐
// └──►│result.push({ class: className, averageScore: averageScore })│
//     └─────────────────────────────────────────────────────────────┘

const students = [
    { name: "An", class: "12A1", score: 8.5 },
    { name: "Bình", class: "12A1", score: 9.2 },
    { name: "Cường", class: "12A2", score: 7.5 },
    { name: "Dung", class: "12A2", score: 9.0 },
    { name: "Em", class: "12A3", score: 8.0 },
];

const classSummary = {};

for (const student of students) {
    const className = student.class;

    // Nếu lớp chưa tồn tại trong classSummary thì khởi tạo
    if (classSummary[className] === undefined) {
        classSummary[className] = { totalScore: 0, studentCount: 0 };
    }

    // Cộng dồn điểm và tăng số lượng học sinh
    classSummary[className].totalScore += student.score;
    classSummary[className].studentCount++;
}

const result = [];

for (const className in classSummary) {
    // Tính điểm trung bình của từng lớp
    const summary = classSummary[className];
    const averageScore = summary.totalScore / summary.studentCount;

    result.push({ class: className, averageScore: averageScore });
}

console.log(result);
