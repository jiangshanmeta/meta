function groupThePeople (groupSizes: number[]): number[][] {
    const n = groupSizes.length;
    const buckets:number[][] = new Array(n + 1);
    for (let i = 0; i < n; i++) {
        const size = groupSizes[i];
        if (!Array.isArray(buckets[size])) {
            buckets[size] = [];
        }
        buckets[size].push(i);
    }
    const result:number[][] = [];
    for (let i = 0; i < n + 1; i++) {
        if (!Array.isArray(buckets[i])) {
            continue;
        }
        const ids = buckets[i];
        let index = 0;
        while (index < ids.length) {
            const group = [ids[index++], ];
            while (index < ids.length && group.length < i) {
                group.push(ids[index++]);
            }
            result.push(group);
        }
    }

    return result;
}
