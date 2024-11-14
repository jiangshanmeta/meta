class Solution {
    w:number[];
    sum:number;
    constructor (w: number[]) {
        let sum = w[0];

        for (let i = 1; i < w.length; i++) {
            sum += w[i];
            w[i] += w[i - 1];
        }
        this.w = w;
        this.sum = sum;
    }

    pickIndex (): number {
        const num = Math.floor(Math.random() * this.sum);
        let low = 0;
        let high = this.w.length - 1;

        while (low <= high) {
            const mid = low + ((high - low) >> 1);
            const max = this.w[mid];
            if (num >= max) {
                low = mid + 1;
            } else if (mid > 0 && num < this.w[mid - 1]) {
                high = mid - 1;
            } else {
                return mid;
            }
        }

        return 0;
    }
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */
