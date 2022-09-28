function minimumPerimeter (neededApples: number): number {
    let low = 1;
    let high = Math.cbrt(neededApples);
    let r = Math.floor(high);
    while (low <= high) {
        const mid = (low + high) >> 1;
        const total = getTotalByRadius(mid);
        if (total < neededApples) {
            low = mid + 1;
        } else {
            high = mid - 1;
            r = Math.min(r, mid);
        }
    }
    return r * 8;
}

function getTotalByRadius (r:number) {
    return (r + 1) * (r + 1) * r * 4 - (r + 1) * r * 2;
}
