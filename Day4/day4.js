const input = require('fs').readFileSync('day4_input.txt', 'utf-8');

const inputArray = input.split("\n")

const xIndeces = []

for (let i = 0; i < inputArray.length; i++) {
    let currentArray = inputArray[i]
    for (let j = 0; j < currentArray.length; j++) {
        if (currentArray[j] === "X") {
            xIndeces.push([i, j])
        }
    }
}

// For each X, wee need to search, horizontally, backwards, up, down
// and both directions diagonally
let xmasCount = 0;
for (let i = 0; i < xIndeces.length; i++) {
    const currentX = xIndeces[i]
    const currentXRow = currentX[0]
    const currentXCol = currentX[1]

    // Search for the M horizontally in the right direction
    if (inputArray[currentXRow]?.[currentXCol + 1] === "M") {

        // Check if the "AS" is found
        if (inputArray[currentXRow]?.[currentXCol + 2] === "A" && inputArray[currentXRow]?.[currentXCol + 3] === "S") {
            xmasCount++
        }

    }



    if (inputArray[currentXRow]?.[currentXCol - 1] === "M") {
        // Check if the "AS" is found
        if (inputArray[currentXRow]?.[currentXCol - 2] === "A" && inputArray[currentXRow]?.[currentXCol - 3] === "S") {
            xmasCount++
        }
    }

    if (inputArray[currentXRow - 1]?.[currentXCol] === "M") {
        // Check if the "AS" is found
        if (inputArray[currentXRow - 2]?.[currentXCol] === "A" && inputArray[currentXRow - 3]?.[currentXCol] === "S") {
            xmasCount++
        }
    }

    if (inputArray[currentXRow + 1]?.[currentXCol] === "M") {
        // Check if the "AS" is found
        if (inputArray[currentXRow + 2]?.[currentXCol] === "A" && inputArray[currentXRow + 3]?.[currentXCol] === "S") {
            xmasCount++
        }
    }

    // Search diagonally

    if (inputArray[currentXRow - 1]?.[currentXCol - 1] === "M") {
        if (inputArray[currentXRow - 2]?.[currentXCol - 2] === "A" && inputArray[currentXRow - 3]?.[currentXCol - 3] === "S") {
            xmasCount++
        }
    }

    if (inputArray[currentXRow - 1]?.[currentXCol + 1] === "M") {
        if (inputArray[currentXRow - 2]?.[currentXCol + 2] === "A" && inputArray[currentXRow - 3]?.[currentXCol + 3] === "S") {
            xmasCount++
        }
    }

    if (inputArray[currentXRow + 1]?.[currentXCol - 1] === "M") {
        if (inputArray[currentXRow + 2]?.[currentXCol - 2] === "A" && inputArray[currentXRow + 3]?.[currentXCol - 3] === "S") {
            xmasCount++
        }
    }

    if (inputArray[currentXRow + 1]?.[currentXCol + 1] === "M") {
        if (inputArray[currentXRow + 2]?.[currentXCol + 2] === "A" && inputArray[currentXRow + 3]?.[currentXCol + 3] === "S") {
            xmasCount++
        }
    }

}

console.log("XMAS found ", xmasCount)


const aIndeces = []

for (let i = 0; i < inputArray.length; i++) {
    let currentArray = inputArray[i]
    for (let j = 0; j < currentArray.length; j++) {
        if (currentArray[j] === "A") {
            aIndeces.push([i, j])
        }
    }
}

let x_mas_count = 0
// Search for 2 diagonal M and 2 S
for (let i = 0; i < aIndeces.length; i++) {
    const currentA = aIndeces[i]
    const currentARow = currentA[0]
    const currentACol = currentA[1]

    let found = 0
    if (inputArray[currentARow - 1]?.[currentACol - 1] === "M" && inputArray[currentARow + 1]?.[currentACol + 1] === "S") {
        found++
    }

    if (inputArray[currentARow - 1]?.[currentACol + 1] === "M" && inputArray[currentARow + 1]?.[currentACol - 1] === "S") {
        found++
    }

    if (inputArray[currentARow + 1]?.[currentACol - 1] === "M" && inputArray[currentARow - 1]?.[currentACol + 1] === "S") {
        found++
    }

    if (inputArray[currentARow + 1]?.[currentACol + 1] === "M" && inputArray[currentARow - 1]?.[currentACol - 1] === "S") {
        found++
    }

    if (found === 2) {
        x_mas_count++
    }


}


console.log("X-MAS found ", x_mas_count)