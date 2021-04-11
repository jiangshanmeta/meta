class TwoSum {
    map:Map<number, number>
    constructor () {
        this.map = new Map<number, number>();
    }

    add (number: number): void {
        if (this.map.has(number)) {
            this.map.set(number, this.map.get(number) + 1);
        } else {
            this.map.set(number, 1);
        }
    }

    find (value: number): boolean {
        for (const [num, ] of this.map) {
            const rest = value - num;
            if (!this.map.has(rest)) {
                continue;
            }
            if (rest !== num) {
                return true;
            }
            if (this.map.get(rest) > 1) {
                return true;
            }
        }
        return false;
    }
}

/**
 * Your TwoSum object will be instantiated and called as such:
 * var obj = new TwoSum()
 * obj.add(number)
 * var param_2 = obj.find(value)
 */
