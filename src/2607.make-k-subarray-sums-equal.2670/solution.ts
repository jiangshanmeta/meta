function makeSubKSumEqual (arr: number[], k: number): number {
    const matched = new Array<boolean>(arr.length);
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        if (matched[i]) {
            continue;
        }

        let index = i;
        const sub:number[] = [];

        while (!matched[index]) {
            matched[index] = true;
            sub.push(arr[index]);
            index = (index + k) % arr.length;
        }

        sub.sort((a, b) => a - b);

        for (const item of sub) {
            result += Math.abs(item - sub[sub.length >> 1]);
        }
    }

    return result;
}
