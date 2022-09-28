function findRestaurant (list1: string[], list2: string[]): string[] {
    const map = new Map<string, number>();
    for (let i = 0; i < list1.length; i++) {
        map.set(list1[i], i);
    }
    const result:string[] = [];
    let indexSum = list1.length + list2.length;
    for (let i = 0; i < list2.length; i++) {
        if (!map.has(list2[i])) {
            continue;
        }
        const curIndexSum = i + map.get(list2[i])!;
        if (curIndexSum < indexSum) {
            result.length = 0;
            result.push(list2[i]);
            indexSum = curIndexSum;
        } else if (curIndexSum === indexSum) {
            result.push(list2[i]);
        }
    }
    return result;
}
