class HitCounter {
    seq:number[] = [];
    constructor () {

    }

    hit (timestamp: number): void {
        this.seq.push(timestamp);
    }

    getHits (timestamp: number): number {
        while (this.seq.length && this.seq[0] <= timestamp - 300) {
            this.seq.shift();
        }
        return this.seq.length;
    }
}

/**
 * Your HitCounter object will be instantiated and called as such:
 * var obj = new HitCounter()
 * obj.hit(timestamp)
 * var param_2 = obj.getHits(timestamp)
 */
