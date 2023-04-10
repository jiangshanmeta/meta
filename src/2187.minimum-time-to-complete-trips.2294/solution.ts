function minimumTime (time: number[], totalTrips: number): number {
    let low = 1;
    let high = totalTrips * Math.min(...time);
    let result = high;
    const check = (t:number) => {
        let count = 0;
        for (let i = 0; i < time.length; i++) {
            count += Math.floor(t / time[i]);
            if (count >= totalTrips) {
                return true;
            }
        }
        return false;
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
