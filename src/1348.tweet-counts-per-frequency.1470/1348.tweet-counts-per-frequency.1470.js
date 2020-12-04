const freqDeltaMap = {
    minute: 60,
    hour: 3600,
    day: 86400,
};

var TweetCounts = function () {
    this.tsMap = {};
    this.dirtyMap = {};
};

/**
 * @param {string} tweetName
 * @param {number} time
 * @return {void}
 */
TweetCounts.prototype.recordTweet = function (tweetName, time) {
    if (!this.tsMap[tweetName]) {
        this.tsMap[tweetName] = [];
    }
    this.dirtyMap[tweetName] = true;
    this.tsMap[tweetName].push(time);
};

/**
 * @param {string} freq
 * @param {string} tweetName
 * @param {number} startTime
 * @param {number} endTime
 * @return {number[]}
 */
TweetCounts.prototype.getTweetCountsPerFrequency = function (freq, tweetName, startTime, endTime) {
    const delta = freqDeltaMap[freq];
    if (!this.tsMap[tweetName]) {
        this.tsMap[tweetName] = [];
        this.dirtyMap[tweetName] = false;
    }

    if (this.dirtyMap[tweetName]) {
        this.tsMap[tweetName].sort((a, b) => a - b);
        this.dirtyMap[tweetName] = false;
    }
    const tss = this.tsMap[tweetName];

    const result = [];
    let startIndex = -1;
    let low = 0;
    let high = tss.length - 1;
    while (low <= high) {
        const mid = (low + high) >> 1;
        if (tss[mid] < startTime) {
            startIndex = Math.max(startIndex, mid);
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    startIndex++;
    while (startTime <= endTime) {
        startTime = Math.min(startTime + delta, endTime + 1);

        if (startIndex === tss.length || tss[startIndex] >= startTime) {
            result.push(0);
        } else {
            let count = 0;
            while (startIndex < tss.length && tss[startIndex] < startTime) {
                count++;
                startIndex++;
            }
            result.push(count);
        }
    }
    return result;
};

/**
 * Your TweetCounts object will be instantiated and called as such:
 * var obj = new TweetCounts()
 * obj.recordTweet(tweetName,time)
 * var param_2 = obj.getTweetCountsPerFrequency(freq,tweetName,startTime,endTime)
 */
