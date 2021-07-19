# 扣分后的最大得分

很容易想到这是一道dp的题目，dp[i][j] = min(dp[i-1][k]-abs(j-k))+points[i][j];

于是可以写出第一版实现：

```javascript
var maxPoints = function(points) {
    const M = points.length;
    const N = points[0].length;
    let dp = new Array(N).fill(0);
    for(let i=0;i<M;i++){
        const newDp = new Array(N);
        for(let j=0;j<N;j++){
            let max = -Infinity;
            for(let k=0;k<N;k++){
                max = Math.max(max,dp[k]-Math.abs(j-k))
            }
            newDp[j] = max+points[i][j];
        }
        dp = newDp;
    }
    return Math.max(...dp);
};
```

这个实现时间复杂度是O(MN^2)，这么提交会被卡时间复杂度超时。

如何快速求出dp[i][j]?

我们先想这么一个问题，给你一个数组 A:number[], 需要得到一个数组 B:number[], 使得B[i] = max(A[j]) (j>=0 && j<=i)。很容易想到维护一个当前见过的最大值，有点前缀数组的味道了。

再进一步，求 C:number[], 使得C[i] = max(A[j]-(i-j)) (j>=0 && j<=i) ,则每次迭代，我们维护的见过的最大值减一即可。

再进一步，就是我们最终要解决的问题了，求 D:number[] ,使得D[i] = max(A[j] - abs(i-j))， 我们只需要参考求C的步骤，再加一个从右侧迭代即可。

```typescript
function maxPoints (points: number[][]): number {
    const M = points.length;
    const N = points[0].length;
    let dp = points[0];
    for (let i = 1; i < M; i++) {
        const nDp = new Array(N);
        let prefixMax = -Infinity;
        for (let j = 0; j < N; j++) {
            nDp[j] = Math.max(prefixMax, dp[j]);
            prefixMax = Math.max(prefixMax - 1, dp[j] - 1);
        }
        let suffixMax = -Infinity;
        for (let j = N - 1; j > -1; j--) {
            nDp[j] = Math.max(suffixMax, dp[j], nDp[j]) + points[i][j];
            suffixMax = Math.max(suffixMax - 1, dp[j] - 1);
        }
        dp = nDp;
    }
    return Math.max(...dp);
}

```
