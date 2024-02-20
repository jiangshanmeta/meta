function maxOperations(nums: number[]): number {
    const M = nums.length;
    if (M === 2) {
        return 1
    }


    const calc = (L: number, R: number, T: number) => {
        const dp = new Array<number[]>(M);
        for (let i = 0; i < dp.length; i++) {
            dp[i] = new Array<number>(M).fill(0);
        }
        for (let i = R - 1; i >= L; i--) {
            for (let j = i + 1; j <= R; j++) {
                let item = 0;
                if (nums[i] + nums[i + 1] === T) {
                    let cur = 1;
                    if (i + 2 < M) {
                        cur += dp[i + 2][j]
                    }
                    item = Math.max(item, cur);
                }
                if (nums[i] + nums[j] === T) {
                    let cur = 1;
                    if (i + 1 < M) {
                        cur += dp[i + 1][j - 1];
                    }
                    item = Math.max(item, cur);
                }
                if (nums[j] + nums[j - 1] === T) {
                    let cur = 1;
                    if (j - 2 > -1) {
                        cur += dp[i][j - 2];
                    }
                    item = Math.max(item, cur);
                }
                dp[i][j] = item;
            }

        }
        return dp[L][R] + 1;
    }

    return Math.max(
        calc(2, M - 1, nums[0] + nums[1]),
        calc(1, M - 2, nums[0] + nums[M - 1]),
        calc(0, M - 3, nums[M - 1] + nums[M - 2])
    )


};