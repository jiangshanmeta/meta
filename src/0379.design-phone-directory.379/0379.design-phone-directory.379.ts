class PhoneDirectory {
    used = new Set<number>();
    candidate:number[] = [];
    constructor (maxNumbers: number) {
        for (let i = maxNumbers - 1; i > -1; i--) {
            this.candidate.push(i);
        }
    }

    get (): number {
        if (this.candidate.length === 0) {
            return -1;
        }
        const result = this.candidate.pop();
        this.used.add(result);
        return result;
    }

    check (number: number): boolean {
        return !this.used.has(number);
    }

    release (number: number): void {
        if (!this.used.has(number)) {
            return;
        }
        this.used.delete(number);
        this.candidate.push(number);
    }
}

/**
 * Your PhoneDirectory object will be instantiated and called as such:
 * var obj = new PhoneDirectory(maxNumbers)
 * var param_1 = obj.get()
 * var param_2 = obj.check(number)
 * obj.release(number)
 */
