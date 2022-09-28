class FreqStack {
    freqMap:Map<number, number>;
    freqGroup:Map<number, number[]>;
    maxFreq = 0;
    constructor () {
        this.freqMap = new Map<number, number>();
        this.freqGroup = new Map<number, number[]>();
    }

    push (val: number): void {
        const freq = this.freqMap.has(val) ? this.freqMap.get(val) + 1 : 1;
        if (!this.freqGroup.has(freq)) {
            this.freqGroup.set(freq, []);
        }
        this.freqGroup.get(freq).push(val);
        this.freqMap.set(val, freq);
        this.maxFreq = Math.max(this.maxFreq, freq);
    }

    pop (): number {
        const group = this.freqGroup.get(this.maxFreq)!;
        const result = group.pop()!;
        if (group.length === 0) {
            this.maxFreq--;
        }
        this.freqMap.set(result, this.freqMap.get(result)! - 1);
        return result;
    }
}

/**
 * Your FreqStack object will be instantiated and called as such:
 * var obj = new FreqStack()
 * obj.push(val)
 * var param_2 = obj.pop()
 */
