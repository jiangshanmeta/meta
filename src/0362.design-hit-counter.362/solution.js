/**
 * Initialize your data structure here.
 */
var HitCounter = function () {
    this.seq = [];
};

/**
 * Record a hit.
        @param timestamp - The current timestamp (in seconds granularity).
 * @param {number} timestamp
 * @return {void}
 */
HitCounter.prototype.hit = function (timestamp) {
    this.seq.push(timestamp);
};

/**
 * Return the number of hits in the past 5 minutes.
        @param timestamp - The current timestamp (in seconds granularity).
 * @param {number} timestamp
 * @return {number}
 */
HitCounter.prototype.getHits = function (timestamp) {
    while (this.seq.length && this.seq[0] <= timestamp - 300) {
        this.seq.shift();
    }
    return this.seq.length;
};

/**
 * Your HitCounter object will be instantiated and called as such:
 * var obj = new HitCounter()
 * obj.hit(timestamp)
 * var param_2 = obj.getHits(timestamp)
 */
