/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function (boxes) {
    const result = new Array(boxes.length).fill(0);
    let leftDis = 0;
    let leftCount = 0;
    for (let i = 0; i < boxes.length; i++) {
        result[i] += leftDis;
        if (boxes[i] === '1') {
            leftCount++;
        }
        leftDis += leftCount;
    }
    let rightDis = 0;
    let rightCount = 0;
    for (let i = boxes.length - 1; i > -1; i--) {
        result[i] += rightDis;
        if (boxes[i] === '1') {
            rightCount++;
        }
        rightDis += rightCount;
    }

    return result;
};
