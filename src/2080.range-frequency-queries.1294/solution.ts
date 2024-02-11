class RangeFreqQuery {
    map = new Map<number, number[]>();
    constructor(arr: number[]) {
        for (let i = 0; i < arr.length; i++) {
            if (!this.map.has(arr[i])) {
                this.map.set(arr[i], []);
            }
            this.map.get(arr[i])!.push(i);
        }
    }

    query(left: number, right: number, value: number): number {
        if (!this.map.has(value)) {
            return 0;
        }
        const list = this.map.get(value)!;
        let low = 0;
        let high = list.length - 1;
        let l = -1;
        while (low <= high) {
            const mid = (low + high) >> 1;
            if (list[mid] < left) {
                low = mid + 1;
            } else {
                l = mid;
                high = mid - 1;
            }
        }
        if (l === -1 || list[l] > right) {
            return 0;
        }

        low = l;
        high = list.length - 1;
        let r = -1;
        while (low <= high) {
            const mid = (low + high) >> 1;
            if (list[mid] > right) {
                high = mid - 1;
            } else {
                r = mid;
                low = mid + 1;
            }

        }

        return r - l + 1
    }
}

/**
 * Your RangeFreqQuery object will be instantiated and called as such:
 * var obj = new RangeFreqQuery(arr)
 * var param_1 = obj.query(left,right,value)
 */