
var MyCalendar = function () {
    this.times = [];
};

/**
 * @param {number} start
 * @param {number} end
 * @return {boolean}
 */
MyCalendar.prototype.book = function (start, end) {
    const times = this.times;
    // 每次插入都按序插入
    // 该用二分的
    for (let i = 0; i < times.length; i++) {
        if (end <= times[i].start) {
            times.splice(i, 0, {
                start,
                end,
            });
            return true;
        }
        if (start >= times[i].end) {
            continue;
        }
        return false;
    }
    times.push({
        start,
        end,
    });
    return true;
};

/**
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = Object.create(MyCalendar).createNew()
 * var param_1 = obj.book(start,end)
 */
