function circularGameLosers (n: number, k: number): number[] {
    const counts = new Array<boolean>(n).fill(false);
    let index = 0;
    let space = k;
    while (true) {
        if (!counts[index]) {
            counts[index] = true;
            index = (index + space) % n;
            space += k;
        } else {
            break;
        }
    }
    const result:number[] = [];
    for (let i = 0; i < n; i++) {
        if (!counts[i]) {
            result.push(i + 1);
        }
    }
    return result;
}
