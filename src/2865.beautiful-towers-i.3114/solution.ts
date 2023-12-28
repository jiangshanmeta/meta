function maximumSumOfHeights (maxHeights: number[]): number {
    const suffixStack = [0, ];
    const suffixIndexs = [maxHeights.length, ];
    const suffixSum = [0, ];
    const suffix = new Array<number>(maxHeights.length);
    for (let i = maxHeights.length - 1; i > -1; i--) {
        const n = maxHeights[i];
        while (n < suffixStack[suffixStack.length - 1]) {
            suffixStack.pop();
            suffixIndexs.pop();
            suffixSum.pop();
        }

        const sum = n * (suffixIndexs[suffixIndexs.length - 1] - i) + suffixSum[suffixSum.length - 1];
        suffixStack.push(n);
        suffixIndexs.push(i);
        suffixSum.push(sum);
        suffix[i] = sum;
    }

    const prefixStack = [0, ];
    const prefixIndexs = [-1, ];
    const prefixSum = [0, ];
    let res = 0;
    for (let i = 0; i < maxHeights.length; i++) {
        const n = maxHeights[i];
        while (n < prefixStack[prefixStack.length - 1]) {
            prefixStack.pop();
            prefixIndexs.pop();
            prefixSum.pop();
        }

        const sum = n * (i - prefixIndexs[prefixIndexs.length - 1]) + prefixSum[prefixSum.length - 1];
        prefixStack.push(n);
        prefixIndexs.push(i);
        prefixSum.push(sum);
        res = Math.max(res, sum + suffix[i] - n);
    }
    return res;
}
