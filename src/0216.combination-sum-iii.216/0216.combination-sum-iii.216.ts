function combinationSum3 (k: number, n: number): number[][] {
    const result:number[][] = [];
    backTracking(1, n, k, [] as number[], result);
    return result;
}

function backTracking (num:number, rest:number, k:number, list:number[], result:number[][]) {
    if (rest === 0 && list.length === k) {
        result.push(list.slice());
    }

    if (rest < 0 || list.length >= k || num === 10) {
        return;
    }
    backTracking(num + 1, rest, k, list, result);

    list.push(num);
    backTracking(num + 1, rest - num, k, list, result);
    list.pop();
}
