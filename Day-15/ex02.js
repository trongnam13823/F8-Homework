// left = 0
// right = arr.length - 1

// ┌─────────────────────┐
// │while (left <= right)│
// └┬────────────────────┘
// │
// │1
// ├───►  mid = Math.floor((left + right) / 2)
// │
// │      tìm thấy, trả về chỉ số
// │
// │2    ┌───────────────────┐ yes
// ├───► │arr[mid] === target├─────► return mid
// │     └┬──────────────────┘
// │      │
// │      │no
// │      ▼
// │
// │      tìm phía bên phải
// │     ┌─────────────────┐ yes
// │     │arr[mid] < target│─────► left = mid + 1
// │     └┬────────────────┘
// │      │
// │      │no
// │      └──────────────────────► right = mid - 1
// │      tìm phía bên trái
// │
// │
// │3
// └───►  không tìm thấy ──────────► return -1

function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        // tìm thấy, trả về chỉ số
        if (arr[mid] === target) {
            return mid;
        }
        // tìm phía bên phải
        else if (arr[mid] < target) {
            left = mid + 1;
        }
        // tìm phía bên trái
        else {
            right = mid - 1;
        }
    }

    // không tìm thấy
    return -1;
}

// Ví dụ sử dụng:
const numbers = [1, 3, 5, 7, 9, 11, 13];
const target = 9;
const index = binarySearch(numbers, target);

console.log(index);
