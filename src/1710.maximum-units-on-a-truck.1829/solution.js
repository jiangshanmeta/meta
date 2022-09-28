/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function (boxTypes, truckSize) {
    boxTypes.sort((a, b) => b[1] - a[1]);
    let index = 0;
    let result = 0;
    while (index < boxTypes.length && truckSize > 0) {
        const useCount = Math.min(truckSize, boxTypes[index][0]);
        result += useCount * boxTypes[index][1];
        index++;
        truckSize -= useCount;
    }
    return result;
};
