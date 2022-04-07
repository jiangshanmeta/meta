/**
 * @param {string} current
 * @param {string} correct
 * @return {number}
 */
var convertTime = function (current, correct) {
    let [h1, m1, ] = parseTime(current);
    const [h2, m2, ] = parseTime(correct);
    let result = 0;
    let diff = 0;
    if (m1 > m2) {
        h1++;
        diff = m2 + 60 - m1;
    } else {
        diff = m2 - m1;
    }
    for (const num of [15, 5, ]) {
        if (diff >= num) {
            const rest = diff % num;
            result += (diff - rest) / num;
            diff = rest;
        }
    }
    result += diff;
    if (h1 > h2) {
        result += 24 - (h1 - h2);
    } else {
        result += h2 - h1;
    }
    return result;
};

function parseTime (time) {
    return [
        +time.slice(0, 2),
        +time.slice(3),
    ];
}
