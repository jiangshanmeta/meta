function minimumBoxes (apple: number[], capacity: number[]): number {
    let sum = 0;
    for (const n of apple) {
        sum += n;
    }
    let i = 0;
    capacity.sort((a, b) => b - a);
    for (;i < capacity.length; i++) {
        if (sum <= 0) {
            break;
        }
        sum -= capacity[i];
    }
    return i;
}
