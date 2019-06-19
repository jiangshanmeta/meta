/**
 * @param {number[][]} M
 * @return {number}
 */
// 求连通分量的个数
var findCircleNum = function(M) {
    const set = {};
    for(let i=0;i<M.length;i++){
        set[i] = true;
    }
    
    const maxLen = M.length;
    let count = 0;
    const queue = [];
    for(let i=0;i<maxLen;i++){
        if(set[i]){
            count++;
            set[i] = false;
            queue.push(i);
            while(queue.length){
                const item = queue.shift();
                for(let j=0;j<maxLen;j++){
                    if(j!==item &&   M[j][item] === 1 && set[j]){
                        queue.push(j);
                        set[j] = false;
                    }   
                }
            }
            
            
        }
    }

    return count;
};