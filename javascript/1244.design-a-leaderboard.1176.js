
var Leaderboard = function() {
    this.hash = {};
};

/** 
 * @param {number} playerId 
 * @param {number} score
 * @return {void}
 */
Leaderboard.prototype.addScore = function(playerId, score) {
    this.hash[playerId] = (this.hash[playerId] || 0)+score;
};

/** 
 * @param {number} K
 * @return {number}
 */
Leaderboard.prototype.top = function(K) {
    const scores = Object.values(this.hash).sort((a,b)=>b-a);
    let result = 0;
    for(let i=0;i<K;i++){
        result += scores[i];
    }
    return result;
};

/** 
 * @param {number} playerId
 * @return {void}
 */
Leaderboard.prototype.reset = function(playerId) {
    this.hash[playerId] = 0;
};

/** 
 * Your Leaderboard object will be instantiated and called as such:
 * var obj = new Leaderboard()
 * obj.addScore(playerId,score)
 * var param_2 = obj.top(K)
 * obj.reset(playerId)
 */