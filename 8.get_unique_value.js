const numbers = [1, 2, 3, 2, 4, 1, 5, 3, 6];

const uniqueValue = (numbers) => {
    return [...new Set(numbers)];
}

const uniqueNumbers = uniqueValue(numbers);
console.log(uniqueNumbers);