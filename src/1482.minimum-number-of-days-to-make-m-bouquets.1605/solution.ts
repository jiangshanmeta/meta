function minDays (bloomDay: number[], m: number, k: number): number {
    if (bloomDay.length < m * k) {
        return -1;
    }
    const MAX = Math.max(...bloomDay);
    let low = 1;
    let high = MAX;
    let res = MAX;
    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        let index = 0;
        let count = 0;
        while (index < bloomDay.length) {
            if (bloomDay[index] > mid) {
                index++;
                continue;
            }
            let acc = 1;
            index++;
            while (index < bloomDay.length && bloomDay[index] <= mid) {
                index++;
                acc++;
            }

            count += Math.floor(acc / k);
        }
        if (count < m) {
            low = mid + 1;
        } else {
            res = Math.min(res, mid);
            high = mid - 1;
        }
    }
    return res;
}
