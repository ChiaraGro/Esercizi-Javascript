function sum(...numbers) {
    return numbers.reduce((prev, curr) => prev + curr,  0);
    // num1 + num2 + num3 + num4 + num5;
}

console.log(sum(1, 2, 3, 4, 5));