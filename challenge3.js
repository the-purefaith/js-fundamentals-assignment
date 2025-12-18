let evenCount = 0;
let oddCount = 0;

for (let number = 1; number <= 20; number++) {
    if (number % 2 === 0) {
        console.log(`${number} is even`);
        evenCount++;
    } else {
        console.log(`${number} is odd`);
        oddCount++;
    }
}

console.log(`Summary: Even numbers: ${evenCount} Odd numbers: ${oddCount}`);