class RecentCounter {
    private queen:number[];
    constructor () {
        this.queen = [];
    }

    ping (t: number): number {
        this.queen.push(t);
        while (this.queen[0] < t - 3000) {
            this.queen.shift();
        }
        return this.queen.length;
    }
}

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
