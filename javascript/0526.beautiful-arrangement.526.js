/**
 * @param {number} N
 * @return {number}
 */
var countArrangement = function (N) {
    const arr = [];
    const used = [];

    for (let i = 0; i < N; i++) {
        arr.push(i + 1);
        used.push(false);
    }

    let counter = 0;
    function backTracking (count, arr, used) {
        if (count === N) {
            return counter++;
        }

        for (let i = 0; i < arr.length; i++) {
            if (used[i]) {
                continue;
            }
            const item = arr[i];
            const pos = count + 1;
            const a = Math.max(arr[i], pos);
            const b = Math.min(arr[i], pos);
            if (a % b === 0) {
                used[i] = true;
                backTracking(pos, arr, used);
                used[i] = false;
            }
        }
    }
    backTracking(0, arr, used);

    return counter;
};
