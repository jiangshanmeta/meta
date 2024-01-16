function getIndexs (s1:string, s2:string) {
    const indexs:number[] = [];
    let index = 0;
    while (index !== -1) {
        index = s1.indexOf(s2, index);
        if (index !== -1) {
            indexs.push(index);
            index++;
        }
    }
    return indexs;
}

function beautifulIndices (s: string, a: string, b: string, k: number): number[] {
    const indexsA = getIndexs(s, a);
    if (indexsA.length === 0) {
        return [];
    }
    const indexsB = getIndexs(s, b);
    if (indexsB.length === 0) {
        return [];
    }
    let left = 0;
    const result:number[] = [];
    for (const index of indexsA) {
        while (left < indexsB.length) {
            if (indexsB[left] <= index && indexsB[left] < index - k) {
                left++;
            } else {
                break;
            }
        }

        if (left === indexsB.length) {
            break;
        }

        if (Math.abs(index - indexsB[left]) <= k) {
            result.push(index);
        }
    }
    return result;
}
