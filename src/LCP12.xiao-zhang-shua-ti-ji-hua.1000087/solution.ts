function minTime (time: number[], m: number): number {
    let low = 0;
    let high = time.reduce((acc, item) => acc + item, 0);
    let result = high;
    const check = (T:number) => {
        let index = 0;
        let count = 0;
        while (index < time.length) {
            count++;
            let sum = time[index++];
            let max = sum;
            while (index < time.length) {
                max = Math.max(max, time[index]);
                sum += time[index];
                if (sum <= T + max) {
                    index++;
                } else {
                    break;
                }
            }
        }
        return count <= m;
    };
    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        if (check(mid)) {
            result = Math.min(result, mid);
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    return result;
}
