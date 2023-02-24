class MapSum {
    sumMap = new Map<string, number>()
    valueMap = new Map<string, number>()
    constructor () {

    }

    insert (key: string, val: number): void {
        let delta = val;
        if (this.valueMap.has(key)) {
            delta = val - this.valueMap.get(key)!;
        }
        for (let i = 0; i < key.length; i++) {
            const prefix = key.slice(0, i + 1);
            if (this.sumMap.has(prefix)) {
                this.sumMap.set(prefix, this.sumMap.get(prefix)! + delta);
            } else {
                this.sumMap.set(prefix, val);
            }
        }

        this.valueMap.set(key, val);
    }

    sum (prefix: string): number {
        if (this.sumMap.has(prefix)) {
            return this.sumMap.get(prefix)!;
        }
        return 0;
    }
}

/**
 * Your MapSum object will be instantiated and called as such:
 * var obj = new MapSum()
 * obj.insert(key,val)
 * var param_2 = obj.sum(prefix)
 */
