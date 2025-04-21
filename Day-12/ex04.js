//  const num = 0
//  let isPrime = false
//  let i = 2

// ┌────────┐  yes   ┌──────────────┐
// │num >= 2├──────► │isPrime = true│
// └────────┘        └───────┬──────┘
//                           │
//                           │
//                           ▼
//                   ┌───────────────────┐ no
//                   │i <= Math.sqrt(num)├────┐
//                   └─┬─────────────────┘    │
//                     │               ▲      │
//                     │               │      │
//                     │yes          ┌─┴─┐    │
//                     │             │i++│    │
//                     ▼             └─┬─┘    │
//                   ┌───────────┐ no  │      │
//                   │n % i === 0├─────┘      │
//                   └───────────┘            │
//                     │                      │
//                     │                      │
//                     │yes                   │
//                     │                      │
//                     ▼                      │
//                   ┌───────────────┐ no     ▼
//                   │isPrime = false├─────► console.log('isPrime: ' + isPrime)
//                   └───────────────┘

const num = -1;
let isPrime = false;

if (num >= 2) {
    isPrime = true;

    for (i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
}

console.log("isPrime: " + isPrime);
