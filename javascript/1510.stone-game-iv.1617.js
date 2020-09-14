/**
 * @param {number} n
 * @return {boolean}
 */
var winnerSquareGame = function (n) {
    const dp = new Array(n + 1);
    dp[0] = false;
    dp[1] = true;
    const squares = [];
    for (let i = 1; i <= n; i++) {
        const s = i * i;
        if (s > n) {
            break;
        }
        squares.push(s);
    }

    for (let i = 2; i < dp.length; i++) {
        let otherwin = true;
        for (let j = 0; j < squares.length; j++) {
            if (i - squares[j] < 0) {
                break;
            }
            if (!dp[i - squares[j]]) {
                otherwin = false;
                break;
            }
        }
        if (otherwin) {
            dp[i] = false;
        } else {
            dp[i] = true;
        }
    }

    return dp[n];
};
