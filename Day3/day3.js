const input = require('fs').readFileSync('day3_input.txt', 'utf-8');

// const input = "xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))"

const expression = /mul\(([0-9]{1,3}),([0-9]{1,3})\)|don't\(\)|do\(\)/g

const groups = [...input.matchAll(expression)]

let multResult = 0;
let multiply = true;
groups.forEach(g => {
    if (g[0] === "don't()") {
        multiply = false

    }

    if (g[0] === "do()") {
        multiply = true
    }

    if (multiply && g[0] !== "don't()" && g[0] !== "do()") {
        multResult += Number(g[1]) * Number(g[2])
    }
})

console.log("Result", multResult)
