const colors = [
    {
        id: 1,
        name: "color 1",
    },
    {
        id: 3,
        name: "color 3",
    },
    {
        id: 4,
        name: "color 4",
    },
    {
        id: 7,
        name: "color 7",
    },
    {
        id: 9,
        name: "color 9",
    },
];

const flowers = [
    {
        id: 1,
        name: "flower 1",
        colorId: 1,
    },
    {
        id: 2,
        name: "flower 2",
        colorId: 1,
    },
    {
        id: 3,
        name: "flower 3",
        colorId: 3,
    },
    {
        id: 4,
        name: "flower 4",
        colorId: 4,
    },
    {
        id: 5,
        name: "flower 5",
        colorId: 4,
    },
    {
        id: 6,
        name: "flower 6",
        colorId: 7,
    },
    {
        id: 7,
        name: "flower 7",
        colorId: 9,
    },
];

// let colorIndex = 0;

// ┌────────────────────────────────────┐
// │const result = flowers.map((flower))│
// └┬───────────────────────────────────┘
//  │
//  │
//  │ 1                ┌──────────────────────────────────────────────┐
//  ├─────────────────►│while (colors[colorIndex].id < flower.colorId)│
//  │                  └┬─────────────────────────────────────────────┘
//  │                   │
//  │                   ▼
//  │                  ┌────────────┐
//  │                  │colorIndex++│
//  │                  └────────────┘
//  │
//  │
//  │ 2                 ┌────────────────────────────────────────┐ no ┌────┐
//  ├───► const color = │flower.colorId === colors[colorIndex].id├───►│null│
//  │                   └┬───────────────────────────────────────┘    └────┘
//  │                    │
//  │                    │yes
//  │                    │
//  │                    ▼
//  │                   ┌───────────────────────┐
//  │                   │colors[colorIndex].name│
//  │                   └───────────────────────┘
//  │ 3
//  └───► return {...flower, color}

let colorIndex = 0;

const result = flowers.map((flower) => {
    while (colors[colorIndex].id < flower.colorId) colorIndex++;

    const color = flower.colorId === colors[colorIndex].id ? colors[colorIndex].name : null;

    return {
        id: flower.id,
        name: flower.name,
        colorId: flower.colorId,
        color,
    };
});

console.log(result);
