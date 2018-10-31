/**
 * @param {number[][]} ghosts
 * @param {number[]} target
 * @return {boolean}
 */
var escapeGhosts = function(ghosts, target) {
    const dis = Math.abs(target[0]) + Math.abs(target[1]);
    for(let i=0;i<ghosts.length;i++){
        let gDis = Math.abs(target[0]-ghosts[i][0])+Math.abs(target[1]-ghosts[i][1]);
        if(gDis<dis+1){
            return false;
        }
    }
    return true;
};