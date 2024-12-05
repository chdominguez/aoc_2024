const input = require('fs').readFileSync('day5_input.txt', 'utf-8');

// Get first the rules and then the pages
const rules = input.split("\n\n")[0].split("\n");
const pages = input.split("\n\n")[1].split("\n");

// Create a map for the rules for each number
const rulesMap = new Map();

rules.forEach(rule => {
    const ruleArray = rule.split("|");
    const n = Number(ruleArray[0]);
    const r = Number(ruleArray[1]);

    if (!rulesMap.has(n)) {
        rulesMap.set(n, [])
    }

    rulesMap.get(n).push(r);

});

function findLowest(arr) {

    let lowest = arr[0];
    for (let i = 0; i < arr.length; i++) {
        const currNum = arr[i];
        const currRules = rulesMap.get(currNum);

        if (!currRules) {
            continue
        }

        if (currRules.includes(lowest)) {
            lowest = currNum
        }
    }
    return lowest
}

// Now we have to sort the pages accordingly
const middlesAlreadySorted = []
const middlesNotSorted = []
pages.map(p => {
    const sorted = []
    const original = p.split(",").map(p => Number(p))
    let currentPages = [...original]

    while (currentPages.length > 1) {
        const lowest = findLowest(currentPages);

        // Remove from the array the lowest
        currentPages.splice(currentPages.indexOf(lowest), 1)

        sorted.push(lowest)

    }

    // Add the latest one
    sorted.push(currentPages[0])

    const middle = Number(sorted[Math.floor(sorted.length / 2)])

    // Check if the original array was already sorted
    if (JSON.stringify(sorted) === JSON.stringify(original)) {
        middlesAlreadySorted.push(middle)
    } else {
        middlesNotSorted.push(middle)
    }
})

console.log("Sorted middles sum: " + middlesAlreadySorted.reduce((a, b) => a + b))
console.log("Not sorted middles sum: " + middlesNotSorted.reduce((a, b) => a + b))
