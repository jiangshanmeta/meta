class Bitset {
    isFliped = false;
    seq:number[];
    oneCount = 0;
    constructor (size: number) {
        this.seq = new Array<number>(size).fill(0);
    }

    fix (idx: number): void {
        if (this.isFliped) {
            if (this.seq[idx] === 1) {
                this.oneCount--;
                this.seq[idx] = 0;
            }
        } else {
            if (this.seq[idx] === 0) {
                this.oneCount++;
                this.seq[idx] = 1;
            }
        }
    }

    unfix (idx: number): void {
        if (this.isFliped) {
            if (this.seq[idx] === 0) {
                this.oneCount++;
                this.seq[idx] = 1;
            }
        } else {
            if (this.seq[idx] === 1) {
                this.oneCount--;
                this.seq[idx] = 0;
            }
        }
    }

    flip (): void {
        this.isFliped = !this.isFliped;
    }

    all (): boolean {
        if (this.isFliped) {
            return this.oneCount === 0;
        } else {
            return this.oneCount === this.seq.length;
        }
    }

    one (): boolean {
        if (this.isFliped) {
            return this.oneCount !== this.seq.length;
        } else {
            return this.oneCount > 0;
        }
    }

    count (): number {
        if (this.isFliped) {
            return this.seq.length - this.oneCount;
        } else {
            return this.oneCount;
        }
    }

    toString (): string {
        if (this.isFliped) {
            return this.seq.map(item => item ^ 1).join('');
        } else {
            return this.seq.join('');
        }
    }
}

/**
 * Your Bitset object will be instantiated and called as such:
 * var obj = new Bitset(size)
 * obj.fix(idx)
 * obj.unfix(idx)
 * obj.flip()
 * var param_4 = obj.all()
 * var param_5 = obj.one()
 * var param_6 = obj.count()
 * var param_7 = obj.toString()
 */
