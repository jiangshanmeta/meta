var RecentCounter = function () {
    this.queen = [];
};

/**
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function (t) {
    this.queen.push(t);
    while (this.queen[0] < t - 3000) {
        this.queen.shift();
    }
    return this.queen.length;
};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
