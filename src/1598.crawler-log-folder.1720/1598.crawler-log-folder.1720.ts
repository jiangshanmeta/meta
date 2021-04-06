function minOperations (logs: string[]): number {
    let result = 0;
    for (let i = 0; i < logs.length; i++) {
        if (logs[i] === '../') {
            if (result !== 0) {
                result--;
            }
        } else if (logs[i] !== './') {
            result++;
        }
    }
    return result;
}
