function shortestToChar (S: string, C: string): number[] {
    const indexs:number[] = [];
    for (let i = 0; i < S.length; i++) {
        if (S[i] === C) {
            indexs.push(i);
        }
    }
    const result:number[] = new Array(S.length);
    for (let i = 0; i < indexs[0]; i++) {
        result[i] = indexs[0] - i;
    }
    for (let i = 0; i < indexs.length - 1; i++) {
        let left = indexs[i];
        let right = indexs[i + 1];
        let dis = 0;
        while (left <= right) {
            result[left++] = dis;
            result[right--] = dis;
            dis++;
        }
    }
    for (let i = indexs[indexs.length - 1]; i < result.length; i++) {
        result[i] = i - indexs[indexs.length - 1];
    }

    return result;
}
