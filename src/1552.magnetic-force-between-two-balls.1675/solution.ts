function maxDistance (position: number[], m: number): number {
    position.sort((a, b) => a - b);
    let low = 1;
    let high = position[position.length - 1] - position[0];
    let result = 1;
    const check = (diff:number) => {
        let count = 1;
        let prev = position[0];
        for (let i = 1; i < position.length; i++) {
            if (position[i] - prev >= diff) {
                count++;
                prev = position[i];
            }
        }
        return count >= m;
    };
    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        if (check(mid)) {
            result = Math.max(result, mid);
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return result;
}
