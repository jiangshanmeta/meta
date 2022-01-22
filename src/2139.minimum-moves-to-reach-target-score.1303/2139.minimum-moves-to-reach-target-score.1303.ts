function minMoves (target: number, maxDoubles: number): number {
    let result = 0;
    while (target !== 1) {
        if (target & 1) {
            result++;
            target--;
        } else if (maxDoubles) {
            result++;
            maxDoubles--;
            target >>= 1;
        } else {
            result += target - 1;
            break;
        }
    }
    return result;
}
