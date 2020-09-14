/**
 * @param {string} croakOfFrogs
 * @return {number}
 */
const charIndexMap = {
    r: 0,
    o: 1,
    a: 2,
    k: 3,
};

const nextIndexMap = {
    c: 0,
    r: 1,
    o: 2,
    a: 3,
};

var minNumberOfFrogs = function (croakOfFrogs) {
    const counts = [
        0, 0, 0, 0, ];
    let frogs = 0;
    let inUsingFrogs = 0;
    for (let i = 0; i < croakOfFrogs.length; i++) {
        if (croakOfFrogs[i] === 'c') {
            if (inUsingFrogs === frogs) {
                frogs++;
            }
            inUsingFrogs++;
        } else {
            if (counts[charIndexMap[croakOfFrogs[i]]] === 0) {
                return -1;
            }
            counts[charIndexMap[croakOfFrogs[i]]]++;
        }
        if (croakOfFrogs[i] !== 'k') {
            counts[nextIndexMap[croakOfFrogs[i]]]--;
        } else {
            inUsingFrogs--;
        }
    }
    if (!counts.every(item => item === 0)) {
        return -1;
    }

    return frogs;
};
