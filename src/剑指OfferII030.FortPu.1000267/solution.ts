class RandomizedSet {
    private valIndexMap = new Map<number, number>()
    private values = new Array<number>();
    constructor () {

    }

    insert (val: number): boolean {
        if (this.valIndexMap.has(val)) {
            return false;
        }
        this.valIndexMap.set(val, this.values.length);
        this.values.push(val);
        return true;
    }

    remove (val: number): boolean {
        if (!this.valIndexMap.has(val)) {
            return false;
        }
        const index = this.valIndexMap.get(val)!;
        if (index !== this.values.length - 1) {
            const lastVal = this.values[this.values.length - 1];
            this.values[index] = lastVal;
            this.valIndexMap.set(lastVal, index);
        }
        this.valIndexMap.delete(val);
        this.values.pop();
        return true;
    }

    getRandom (): number {
        const index = Math.floor(Math.random() * this.values.length);
        return this.values[index];
    }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
