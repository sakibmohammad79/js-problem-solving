const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 10, 11];

const getSumOfEvenNum = (number) => {
    const evenNumber = number.filter(num => num % 2 == 0);
    const sumOfEven = evenNumber.reduce((acc, current)=> acc + current, 0);
    return sumOfEven;
}

const result = getSumOfEvenNum(numbers);
console.log(result);