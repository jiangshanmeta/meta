class FrequencyTracker {
    map1 = new Map<number, number>()
    map2 = new Map<number, number>()
    constructor () {

    }

    add (number: number): void {
        const fre = this.map1.get(number) || 0;
        increase(this.map1, number);

        if (fre > 0) {
            decrease(this.map2, fre);
        }
        increase(this.map2, fre + 1);
    }

    deleteOne (number: number): void {
        if (!this.map1.has(number)) {
            return;
        }
        const fre = this.map1.get(number)!;
        if (fre === 0) {
            return;
        }
        decrease(this.map1, number);

        decrease(this.map2, fre);

        increase(this.map2, fre - 1);
    }

    hasFrequency (frequency: number): boolean {
        return this.map2.has(frequency) && this.map2.get(frequency) !== 0;
    }
}

function increase (map:Map<number, number>, key:number) {
    if (map.has(key)) {
        map.set(key, map.get(key)! + 1);
    } else {
        map.set(key, 1);
    }
}

function decrease (map:Map<number, number>, key:number) {
    if (!map.has(key)) {
        return;
    }
    const c = map.get(key)!;
    map.set(key, c - 1);
}

/**
 * Your FrequencyTracker object will be instantiated and called as such:
 * var obj = new FrequencyTracker()
 * obj.add(number)
 * obj.deleteOne(number)
 * var param_3 = obj.hasFrequency(frequency)
 */
