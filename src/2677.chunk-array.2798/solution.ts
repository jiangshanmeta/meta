function chunk (arr: any[], size: number): any[][] {
    let index = 0;
    const result:any[][] = [];
    while (index < arr.length) {
        const c = [];
        while (index < arr.length && c.length < size) {
            c.push(arr[index++]);
        }
        result.push(c);
    }
    return result;
}
