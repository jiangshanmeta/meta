function getSneakyNumbers (nums: number[]): number[] {
    const arr = new Array<boolean>(nums.length - 2);
    const result:number[] = [];
    for (const n of nums) {
        if (arr[n]) {
            result.push(n);
        }
        arr[n] = true;
    }
    return result;
}
