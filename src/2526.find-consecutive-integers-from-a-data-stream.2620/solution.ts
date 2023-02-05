// 比较老实的做法是维护一个队列并且跟踪最后一个非value的值

class DataStream {
    // count统计从后往前有几个连续的数等于value
    private count = 0;
    constructor (readonly value: number, readonly k: number) {

    }

    consec (num: number): boolean {
        if (num === this.value) {
            this.count++;
        } else {
            this.count = 0;
        }
        return this.count >= this.k;
    }
}

/**
 * Your DataStream object will be instantiated and called as such:
 * var obj = new DataStream(value, k)
 * var param_1 = obj.consec(num)
 */
