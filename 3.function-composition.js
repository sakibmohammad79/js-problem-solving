const square = (num) => {
    return num * num;
}
const double = (num) => {
    return num * 2;
}
const add = (num) =>{
    return num + 5;
}

const composedFunction=(num) => {
    const squareResult = square(num);
    const doubleResult = double(squareResult);
    const result = add(doubleResult);
    return result;
}

const result = composedFunction(3);
console.log(result);