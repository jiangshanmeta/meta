/**
 * @param {number} timeToLive
 */
var AuthenticationManager = function (timeToLive) {
    this.timeToLive = timeToLive;
    this.map = {};
};

/**
 * @param {string} tokenId
 * @param {number} currentTime
 * @return {void}
 */
AuthenticationManager.prototype.generate = function (tokenId, currentTime) {
    this.map[tokenId] = currentTime + this.timeToLive;
};

/**
 * @param {string} tokenId
 * @param {number} currentTime
 * @return {void}
 */
AuthenticationManager.prototype.renew = function (tokenId, currentTime) {
    if (!this.map[tokenId] || this.map[tokenId] <= currentTime) {
        return;
    }
    this.map[tokenId] = currentTime + this.timeToLive;
};

/**
 * @param {number} currentTime
 * @return {number}
 */
AuthenticationManager.prototype.countUnexpiredTokens = function (currentTime) {
    return Object.values(this.map).reduce((total, time) => {
        return total + (time > currentTime ? 1 : 0);
    }, 0);
};

/**
 * Your AuthenticationManager object will be instantiated and called as such:
 * var obj = new AuthenticationManager(timeToLive)
 * obj.generate(tokenId,currentTime)
 * obj.renew(tokenId,currentTime)
 * var param_3 = obj.countUnexpiredTokens(currentTime)
 */
