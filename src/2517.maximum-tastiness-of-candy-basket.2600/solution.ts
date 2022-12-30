function maximumTastiness (price: number[], k: number): number {
    price.sort((a, b) => a - b);

    const check = (x:number) => {
        let last = price[0];
        let count = 1;
        let index = 1;
        while (index < price.length && count < k) {
            if (price[index] - last >= x) {
                last = price[index];
                count++;
            }
            index++;
        }
        return count === k;
    };
    let result = 0;
    let low = 0;
    let high = price[price.length - 1] - price[0];
    while (low <= high) {
        const mid = low + ((high - low) >> 1);
        if (check(mid)) {
            result = Math.max(result, mid);
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return result;
}
