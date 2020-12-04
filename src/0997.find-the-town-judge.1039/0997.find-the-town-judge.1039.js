/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function (N, trust) {
    const trustArr = new Array(N + 1).fill(0);
    const trustedArr = new Array(N + 1).fill(0);
    for (let i = 0; i < trust.length; i++) {
        const [
            a, b, ] = trust[i];
        trustArr[a]++;
        trustedArr[b]++;
    }
    // console.log(trustArr,trustedArr)
    for (let i = 1; i <= N; i++) {
        if (trustedArr[i] === N - 1 && trustArr[i] === 0) {
            return i;
        }
    }

    return -1;
};
