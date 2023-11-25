const readline = require('readline');

function randomArray(length, min, max) {
    const array = [];
    for (let i = 0; i < length; i++) {
        array.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return array.sort((a, b) => a - b);
}

function binarySearch(array, target) {
    let l = 0;
    let r = array.length - 1;

    while (l <= r) {
        const m = Math.floor((l + r) / 2);

        if (array[m] === target) {
            return m;
        } else if (array[m] < target) {
            l = m + 1;
        } else {
            r = m - 1;
        }
    }

    return -1;
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Довжина?: ', (length) => {
    rl.question('Мінімальне значення: ', (min) => {
        rl.question('Максимальне значення: ', (max) => {
            const array = randomArray(parseInt(length), parseInt(min), parseInt(max));
            console.log('Згенерований масив:', array);
            rl.question('Число для пошуку: ', (target) => {
                const index = binarySearch(array, parseInt(target));

                if (index !== -1) {
                    console.log(`Число ${target} знайдено під індексом ${index}`);
                } else {
                    console.log(`Число ${target} не знайдено в масиві`);
                }

                rl.close();
            });
        });
    });
});
