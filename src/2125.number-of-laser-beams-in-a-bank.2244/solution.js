/**
 * @param {string[]} bank
 * @return {number}
 */
var numberOfBeams = function (bank) {
    let result = 0;
    let lastEquipment = 0;
    for (const row of bank) {
        const count = getCount(row);
        if (count === 0) {
            continue;
        }
        result += lastEquipment * count;
        lastEquipment = count;
    }
    return result;
};

function getCount (row) {
    let result = 0;
    for (const item of row) {
        if (item === '1') {
            result++;
        }
    }
    return result;
}
