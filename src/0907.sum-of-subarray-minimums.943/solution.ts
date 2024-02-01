function sumSubarrayMins (arr: number[]): number {
    const MOD = 10 ** 9 + 7;
    let result = 0;
    const stack:number[] = [];
    for (let i = 0; i < arr.length; i++) {
        while (stack.length && arr[stack[stack.length - 1]] >= arr[i]) {
            const index = stack.pop()!;
            const left = index - (stack.length > 0 ? stack[stack.length - 1] : -1);
            const right = i - index;
            result = (result + left * right * arr[index]) % MOD;
        }
        stack.push(i);
    }

    for (let i = stack.length - 1; i > -1; i--) {
        const left = stack[i] - (i > 0 ? stack[i - 1] : -1);
        const right = arr.length - stack[i];
        result = (result + left * right * arr[stack[i]]) % MOD;
    }
    return result;
}
