//  const arr = []
//  let minIndex = 0
//  let maxIndex = 0

//  ┌──────────────┐ no   ┌───────────┐
//  │arr.length > 0├─────►│empty array│
//  └──────┬───────┘      └───────────┘
//         │
//         │yes
//         │
//         ▼
//  ┌────────────────────────────────────┐
//  │for (let i = 0; i < arr.length; i++)│
//  └──────────────┬─────────────────────┘
//                 │
//                 │
//                 │
//                 ▼
//          ┌──────────────────────┐ yes
//          │arr[i] < arr[minIndex]├─────► minIndex = i
//          └──────────────────────┘
//                 │
//                 │
//                 │
//                 ▼
//          ┌──────────────────────┐ yes
//          │arr[i] > arr[maxIndex]│─────► maxIndex = i
//          └──────────────────────┘

const arr = [2, 3, 456, 78, 5, -9, 3, 6, 3];
let minIndex = 0;
let maxIndex = 0;

if (arr.length > 0) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < arr[minIndex]) minIndex = i;
        if (arr[i] > arr[maxIndex]) maxIndex = i;
    }

    console.log("Index of the smallest element:", minIndex);
    console.log("Index of the largest element:", maxIndex);
    console.log("Smallest element:", arr[minIndex]);
    console.log("Largest element:", arr[maxIndex]);
} else {
    console.log("Empty array");
}
