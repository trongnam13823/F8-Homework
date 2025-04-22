//   const num = null
//   let isPerfectSquare = false

//   num >= 0
//      │
//      │
//      │ yes
//      │
//      ▼

//   Take the square root of num and round down
//   ┌───────────────────────────────────────┐
//   │const sqrt = Math.floor(Math.sqrt(num))│
//   └───────────────────────────────────────┘
//      │
//      │
//      │
//      │
//      ▼

//   Does the rounded square root squared equal number?
//   ┌──────────────────────────────────────┐
//   │isPerfectSquare = sqrt * sqrt === num │
//   └──────────────────────────────────────┘

const num = 25;
let isPerfectSquare = false;

if (num >= 0) {
    const sqrt = Math.floor(Math.sqrt(num));
    isPerfectSquare = sqrt * sqrt === num;
}

console.log(`Is ${num} a perfect square?`, isPerfectSquare);
