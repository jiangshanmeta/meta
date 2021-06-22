/**
 * @param {number[][]} logs
 * @return {number}
 */
var maximumPopulation = function (logs) {
    const counts = new Array(101).fill(0);
    for (const [birth, death, ] of logs) {
        counts[birth - 1950]++;
        counts[death - 1950]--;
    }
    let result = 0;
    let maxCount = counts[0];
    for (let i = 1; i < counts.length; i++) {
        counts[i] += counts[i - 1];
        if (counts[i] > maxCount) {
            result = i;
            maxCount = counts[i];
        }
    }

    return result + 1950;
};
