function longestCommonPrefix(arr1: number[], arr2: number[]): number {
    const root: any = {};
    for (const num of arr1) {
        const str = String(num);
        let prev = root;
        for (let i = 0; i < str.length; i++) {
            if (!prev[str[i]]) {
                prev[str[i]] = {}
            }
            prev = prev[str[i]]
        }
    }
    let result = 0;
    for (const num of arr2) {
        const str = String(num);
        let count = 0;
        let prev = root;
        for (let i = 0; i < str.length; i++) {
            if (!prev[str[i]]) {
                break;
            }
            prev = prev[str[i]]
            count++
        }
        result = Math.max(result, count)
    }

    return result;
};