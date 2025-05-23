//  const array = [1, 2, 3, 2, 4, 1, 5, 3];
//  const result = [];

//  ┌─────────────────────────────────────────────────┐
//  │ ┌──────────────────────────────────────┐        │
//  │ │for (let i = 0; i < array.length; i++)│        │
//  │ └──┬───────────────────────────────────┘        │
//  │    │                                            │
//  │    ▼                                            │
//  │ ┌──────────────────┐                            │
//  │ │let exists = false│                            │
//  │ └──────────────────┘                            │
//  │                                                 │
//  │     ┌─────────────────────────────────────────┐ │
//  │     │┌───────────────────────────────────────┐│ │
//  │     ││for (let j = 0; j < result.length; j++)││ │
//  │     │└───────────────────────────────────────┘│ │
//  │     │                                         │ │
//  │     │                                         │ │
//  │     │┌──────────────────────┐                 │ │
//  │     ││array[i] === result[j]│                 │ │
//  │     │└──┬───────────────────┘                 │ │
//  │     │   │                                     │ │
//  │     │   │ yes                                 │ │
//  │     │   ▼                                     │ │
//  │     │┌─────────────┐                          │ │
//  │  ┌──┼┤exists = true│                          │ │
//  │  │  │└─────────────┘                          │ │
//  │  │  └─────────────────────────────────────────┘ │
//  │  │ break                                        │
//  │  ▼                                              │
//  │ ┌────────────────┐ yes  ┌─────────────────────┐ │
//  │ │exists === false├─────►│result.push(array[i])│ │
//  │ └────────────────┘      └─────────────────────┘ │
//  └─────────────────────────────────────────────────┘

const array = [1, 2, 3, 2, 4, 1, 5, 3];
const result = [];

for (let i = 0; i < array.length; i++) {
    let exists = false;

    for (let j = 0; j < result.length; j++) {
        if (array[i] === result[j]) {
            exists = true;
            break;
        }
    }

    if (exists === false) {
        result.push(array[i]);
    }
}

console.log(result);
