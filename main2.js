const { faker } = require('@faker-js/faker');

let arr = Array.from(Array(10))
arr = arr.map((i) => faker.person.firstName())

console.table(arr)

function bubbleSort(arr) {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        for (let a = 0; a < len - i - 1; a++) {
            if (arr[a] > arr[a + 1]) {
                let tmp = arr[a];
                arr[a] = arr[a + 1];
                arr[a + 1] = tmp;
            }
        }
    }
    return arr;
}

console.table(bubbleSort(arr));