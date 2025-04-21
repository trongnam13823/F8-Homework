//  const n = 0
//  let sum = 0
//  let i = 1

//               ┌───────┐  no
//    ┌─────────►│i <= n ├─────────►  console.log('sum: ' + sum)
//    │          └───────┘
//    │              │
//    │              │
//    │              │yes
//    │              │
//    │              ▼
//  ┌─┴─┐        ┌─────────────────┐
//  │i++│◄───────┤sum += i * (i + 1│
//  └───┘        └─────────────────┘

let sum = 0;
const n = 3;

for (let i = 1; i <= n; i++) {
    sum += i * (i + 1);
}

console.log("sum: " + sum);
