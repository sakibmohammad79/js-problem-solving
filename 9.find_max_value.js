const numbers = [1, 2, 3, 2, 4, 1, 5, 3, 6];

const findMaxValue = (numbers) => {
    return Math.max(...numbers);
}

const maxNumber = findMaxValue(numbers);
console.log(maxNumber);