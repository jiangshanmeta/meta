/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} A
 * @param {Interval[]} B
 * @return {Interval[]}
 */
var intervalIntersection = function (A, B) {
    const result = [];
    let indexA = 0;
    let indexB = 0;
    while (indexA < A.length && indexB < B.length) {
        const intervalA = A[indexA];
        const intervalB = B[indexB];
        if (intervalA.end < intervalB.start) {
            indexA++;
        } else if (intervalB.end < intervalA.start) {
            indexB++;
        } else {
            const start = Math.max(intervalA.start, intervalB.start);
            const end = Math.min(intervalA.end, intervalB.end);
            result.push(new Interval(start, end));
            intervalA.end === end && indexA++;
            intervalB.end === end && indexB++;
        }
    }

    return result;
};
