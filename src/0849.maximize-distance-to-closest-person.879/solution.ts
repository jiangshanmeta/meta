function maxDistToClosest (seats: number[]): number {
    let index = -1;
    let result = 0;
    for (let i = 0; i < seats.length; i++) {
        if (seats[i] === 0) {
            continue;
        }
        if (index === -1) {
            result = i;
        } else {
            result = Math.max(result, (i - index) >> 1);
        }
        index = i;
    }
    result = Math.max(result, seats.length - index - 1);
    return result;
}
