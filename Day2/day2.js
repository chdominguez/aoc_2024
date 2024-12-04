// const input = require('fs').readFileSync('day2_input.txt', 'utf-8');
// const reports = input.split("\n").filter(r => r !== "");
// function isReportSafe(currentReportArray, applyDampener) {
//     let decreasing = false;
//     let isSafe = true;
//     for (let i = 0; i < currentReportArray.length - 1; i++) {
//         const currVal = Number(currentReportArray[i])
//         const nextVal = Number(currentReportArray[i + 1])
//         const diff = nextVal - currVal;
//         if (i === 0) {
//             decreasing = diff < 0;
//         } else {
//             if (decreasing && diff > 0) {
//                 isSafe = false;
//                 break;
//             } else if (!decreasing && diff < 0) {
//                 isSafe = false;
//                 break;
//             }
//         }
//         if (Math.abs(diff) > 3 || Math.abs(diff) < 1) {
//             isSafe = false;
//             break
//         }
//     }
//     if (!isSafe && applyDampener) {
//         // Apply the problem dampener for each index
//         console.log("Array is unsafe: " + currentReportArray)
//         for (let j = 0; j < currentReportArray.length; j++) {
//             let currArray = [...currentReportArray];
//             currArray.splice(j, 1); // Remove element in-place
//             console.log("Testing: " + currArray)
//             isSafe = isReportSafe(currArray, false);
//             if (isSafe) {
//                 break;
//             }
//         }
//     }
//     return isSafe;
// }
// let unsafeReports = 0
// let safeReports = 0
// reports.forEach(report => {
//     let currentReportArray = report.split(" ").filter(r => r !== " ")
//     let isSafe = isReportSafe(currentReportArray, true);
//     if (isSafe) {
//         safeReports++;
//     } else {
//         unsafeReports++;
//     }
// })
// console.log(`${safeReports} reports are safe.`)

const input = require('fs').readFileSync('day2_input.txt', 'utf-8');
const reports = input.trim().split("\n").filter(r => r.trim() !== "");

function isReportSafe(report) {
    let decreasing = null;

    for (let i = 0; i < report.length - 1; i++) {
        const currVal = Number(report[i]);
        const nextVal = Number(report[i + 1]);
        const diff = nextVal - currVal;

        // Skip invalid differences
        if (Math.abs(diff) > 3 || Math.abs(diff) < 1) {
            return false;
        }

        // Initialize direction if not set
        if (decreasing === null) {
            decreasing = diff < 0;
        }

        // Check if direction changes
        if ((decreasing && diff > 0) || (!decreasing && diff < 0)) {
            return false;
        }
    }

    return true;
}

const safeReports = reports.filter(report => {
    let currentReportArray = report.split(" ").filter(r => r !== " ");

    // Check if report is safe without removing anything
    if (isReportSafe(currentReportArray)) {
        return true;
    }

    // Try removing each element
    for (let j = 0; j < currentReportArray.length; j++) {
        let modifiedArray = [...currentReportArray];
        modifiedArray.splice(j, 1);

        if (isReportSafe(modifiedArray)) {
            return true;
        }
    }

    return false;
});

console.log(`${safeReports.length} reports are safe.`)