/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function (operations) {
    let result = 0;
    for (let i = 0; i < operations.length; i++) {
        switch (operations[i]) {
        case 'X++':
        case '++X':
            result++;
            break;
        case 'X--':
        case '--X':
            result--;
        }
    }
    return result;
};
