/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * Initialize your data structure here.
 */
var SummaryRanges = function () {
    this.list = [];
};

/**
 * @param {number} val
 * @return {void}
 */
SummaryRanges.prototype.addNum = function (val) {
    // 就是个二分查找 这里比较的是interval的end值
    let index = this.list.length;
    let low = 0;
    let high = this.list.length - 1;
    while (low <= high) {
        const mid = (low + high) >> 1;
        if (this.list[mid].end >= val) {
            index = Math.min(index, mid);
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    if (index === this.list.length) {
        // 虽然比最后一个的end值要大 但是也可能进行合并
        if (index > 0 && this.list[index - 1].end + 1 === val) {
            this.list[index - 1].end++;
        } else {
            this.list.push(new Interval(val, val));
        }
        // 要小于这个start才可能有合并或者添加新元素
    } else if (val < this.list[index].start) {
        if (val === this.list[index].start - 1) {
            // 把index和index-1对应元素合并
            if (index > 0 && this.list[index - 1].end + 1 === val) {
                this.list[index - 1].end = this.list[index].end;
                this.list.splice(index, 1);
            } else {
                // 更新index对应元素
                this.list[index].start--;
            }
        } else if (index > 0 && this.list[index - 1].end + 1 === val) {
            // val和index-1对应元素合并
            this.list[index - 1].end++;
        } else {
            // 无法合并 添加一个
            this.list.splice(index, 0, new Interval(val, val));
        }
    }
};

/**
 * @return {Interval[]}
 */
SummaryRanges.prototype.getIntervals = function () {
    return this.list;
};

/**
 * Your SummaryRanges object will be instantiated and called as such:
 * var obj = new SummaryRanges()
 * obj.addNum(val)
 * var param_2 = obj.getIntervals()
 */
