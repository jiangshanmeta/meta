function magicalString (n: number): number {
    const arr = [1, 2, 2, ];
    let index = 2;
    let item = 1;
    while (arr.length < n) {
        const count = arr[index];
        for (let i = 0; i < count; i++) {
            arr.push(item);
        }
        index++;
        item = item === 1 ? 2 : 1;
    }
    let res = 0;
    for (let i = 0; i < n; i++) {
        if (arr[i] === 1) {
            res++;
        }
    }
    return res;
}
