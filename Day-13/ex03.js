//  let numbers = [5, 1, 9, 8, 10];
//  let element = 4;

//  ┌────────────────────────────────────────────┐
//  │for (let i = 0; i < numbers.length - 1; i++)│
//  └──┬─────────────────────────────────────────┘
//     │
//     ▼
//  ┌────────────────┐
//  │let minIndex = i│
//  └────────────────┘

//      ┌──────────────────────────────────────────────┐
//      │┌────────────────────────────────────────────┐│
//      ││for (let j = i + 1; j < numbers.length; j++)││
//      │└──┬─────────────────────────────────────────┘│
//      │   │                                          │
//      │   ▼                                          │
//      │┌──────────────────────────────┐              │
//      ││numbers[j] < numbers[minIndex]│              │
//      │└──┬───────────────────────────┘              │
//      │   │                                          │
//      │   │ yes                                      │
//      │   ▼                                          │
//      │┌────────────┐                                │
//      ││minIndex = j│                                │
//   ┌──┤└────────────┘                                │
//   │  └──────────────────────────────────────────────┘
//   │
//   ▼
//  ┌────────────────────────────────────────────────────────┐
//  │Swap the smallest element with the element at position i│
//  └────────────────────────────────────────────────────────┘

//  let newNumbers = [];
//  let inserted = false;

//  ┌──────────────────────────────────────────┐
//  │┌────────────────────────────────────────┐│
//  ││for (let i = 0; i < numbers.length; i++)││
//  │└────────────────────────────────────────┘│
//  │                                          │
//  │┌─────────────────────────────────┐       │
//  ││!inserted && element < numbers[i]│       │
//  │└──┬──────────────────────────────┘       │
//  │   │                                      │
//  │   │ yes                                  │
//  │   ▼                                      │
//  │┌────────────────────────┐                │
//  ││newNumbers.push(element)│                │
//  ││inserted = true         │                │
//  │└────────────────────────┘                │
//  │                                          │
//  │┌───────────────────────────┐             │
//  ││newNumbers.push(numbers[i])│             │
//  │└───────────────────────────┘             │
//  └──────────────────────────────────────────┘

//  ┌─────────┐ yes  ┌────────────────────────┐
//  │!inserted├─────►│newNumbers.push(element)│
//  └─────────┘      └────────────────────────┘

// Bài 04 - Dùng selection sort và push
var numbers = [5, 1, 9, 8, 10];
var element = 4;

// Bước 1: Selection sort
for (let i = 0; i < numbers.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < numbers.length; j++) {
        if (numbers[j] < numbers[minIndex]) {
            minIndex = j;
        }
    }
    // Hoán đổi
    let temp = numbers[i];
    numbers[i] = numbers[minIndex];
    numbers[minIndex] = temp;
}

console.log("Sau bước 1:", numbers);

// Bước 2: Chèn phần tử vào mảng đã sắp xếp dùng push()
let newNumbers = [];
let inserted = false;

for (let i = 0; i < numbers.length; i++) {
    if (!inserted && element < numbers[i]) {
        newNumbers.push(element);
        inserted = true;
    }
    newNumbers.push(numbers[i]);
}

// Nếu element lớn hơn tất cả các phần tử
if (!inserted) {
    newNumbers.push(element);
}

console.log("Sau bước 2:", newNumbers);
