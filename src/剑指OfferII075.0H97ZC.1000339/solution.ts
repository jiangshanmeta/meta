function relativeSortArray (arr1: number[], arr2: number[]): number[] {
    const rest:number[] = [];
    const map = new Map<number, number>();
    for (let i = 0; i < arr2.length; i++) {
        map.set(arr2[i], 0);
    }
    for (let i = 0; i < arr1.length; i++) {
        if (map.has(arr1[i])) {
            map.set(arr1[i], map.get(arr1[i]) + 1);
        } else {
            rest.push(arr1[i]);
        }
    }
    const result:number[] = [];
    for (let i = 0; i < arr2.length; i++) {
        const count = map.get(arr2[i]);
        for (let j = 0; j < count; j++) {
            result.push(arr2[i]);
        }
    }
    result.push(...rest.sort((a, b) => a - b));
    return result;
}
