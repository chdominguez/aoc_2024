const input = require('fs').readFileSync('day7_input.txt', 'utf-8');

const inputArray = input.trim().split("\n");

const equations = inputArray.map(e => {
    const equation = e.split(":")
    const result = Number(equation[0])
    const numbers = equation[1].split(" ").filter(n => n !== "").map(Number)
    return {
        result: result,
        numbers: numbers
    }
})

function generateCombinations(n, chars) {
    let results = [];

    function combine(combination, length) {
        if (length === n) {
            results.push(combination.join(''));
            return;
        }
        for (let char of chars) {
            combination.push(char);
            combine(combination, length + 1);
            combination.pop();
        }
    }

    combine([], 0);
    return results;
}


function getResult(numbers, oepratorsArray) {
    let currentResult = 0;
    for (let i = 0; i < numbers.length; i++) {
        const currNum = numbers[i];
        const currOperator = oepratorsArray[i];
        if (currOperator === "+") {
            currentResult += currNum
        } else if (currOperator === "*") {
            currentResult *= currNum
        } else if (currOperator === "|") {
            currentResult = Number(String(currentResult) + String(currNum))
        }
    }
    return currentResult
}

let eqWithSolutions = []
for (const e of equations) {

    const combinations = generateCombinations(e.numbers.length, ["+", "*", "|"])
    for (let i = 0; i < combinations.length; i++) {
        const result = getResult(e.numbers, combinations[i])
        if (result === e.result) {
            eqWithSolutions.push({
                equation: e,
                operators: combinations[i]
            })
            break
        }
    }
}

const calibration = eqWithSolutions.reduce((a, b) => a + b.equation.result, 0)

console.log("Calibration", calibration)