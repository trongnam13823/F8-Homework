// let fare = 0
// const km = 0

// Calculate fare per km
// ┌─────────────────────────────────────────────────────────────────┐
// │          yes                                                    │
// │km <= 1  ─────►  fare = km * 15000;                              │
// │   │                                                             │
// │   │                                                             │
// │   │no                                                           │
// │   │                                                             │
// │   ▼      yes                                                    │
// │km <= 5  ─────►  fare = 1 * 15000 + (km - 1) * 13500;            │
// │   │                                                             │
// │   │                                                             │
// │   │no                                                           │
// │   │                                                             │
// │   └──────────►  fare = 1 * 15000 + 4 * 13500 + (km - 5) * 11000;│
// └─────────────────────────────────────────────────────────────────┘

// Apply 10% discount if traveling over 120km
// ┌────────────────────────────────────┐
// │           yes                      │
// │km > 120  ─────►  fare = fare * 0.9 │
// └────────────────────────────────────┘

let fare = 0;
const km = 130;

// Calculate fare per km
if (km <= 1) {
    fare = km * 15000;
} else if (km <= 5) {
    fare = 1 * 15000 + (km - 1) * 13500;
} else {
    fare = 1 * 15000 + 4 * 13500 + (km - 5) * 11000;
}

console.log("Fare: ", fare);

// Apply 10% discount if traveling over 120km
if (km > 120) {
    fare *= 0.9;
}

console.log("Fare: ", fare);
