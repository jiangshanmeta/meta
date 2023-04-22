class TimeLimitedCache {
    map = new Map<number, {value:number, expire:number}>()
    constructor () {

    }

    set (key: number, value: number, duration: number): boolean {
        this._expire();
        const time = Date.now();
        const expire = time + duration;
        if (this.map.has(key)) {
            this.map.set(key, {
                value,
                expire,
            });
            return true;
        } else {
            this.map.set(key, {
                value,
                expire,
            });
            return false;
        }
    }

    get (key: number): number {
        this._expire();
        if (this.map.has(key)) {
            return this.map.get(key).value;
        } else {
            return -1;
        }
    }

    count (): number {
        this._expire();
        return this.map.size;
    }

    _expire () {
        const keys = [...this.map.keys(), ];
        const time = Date.now();
        for (const key of keys) {
            if (this.map.get(key).expire <= time) {
                this.map.delete(key);
            }
        }
    }
}

/**
 * Your TimeLimitedCache object will be instantiated and called as such:
 * var obj = new TimeLimitedCache()
 * obj.set(1, 42, 1000); // false
 * obj.get(1) // 42
 * obj.count() // 1
 */
