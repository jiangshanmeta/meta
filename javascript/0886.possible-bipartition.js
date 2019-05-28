/**
 * @param {number} N
 * @param {number[][]} dislikes
 * @return {boolean}
 */
var possibleBipartition = function(N, dislikes) {
    const map = [];
    for(let i=1;i<N+1;i++){
        map[i] = [];
    }
    for(let i=0;i<dislikes.length;i++){
        map[dislikes[i][0]].push(dislikes[i][1]);
        map[dislikes[i][1]].push(dislikes[i][0]);
    }

    const visited = new Array(N+1).fill(false);
    visited[0] = true;
    const personGroupMap = {};
    while(true){
        // 考虑多个连通分量
        const firstUnvisted = visited.findIndex(item=>!item);
        if(firstUnvisted === -1){
            return true
        }
        // DFS或者BFS都行
        const stack = [firstUnvisted];
        personGroupMap[firstUnvisted] = 0;
        
        while(stack.length){
            const node = stack.pop();

            visited[node] = true;
            const selfGroup = personGroupMap[node];
            const otherGroup = selfGroup === 0?1:0;
            
            const dislike = map[node];
            for(let i=0;i<dislike.length;i++){
                // 没有标记分组的标记分组，进入未探寻序列
                if(personGroupMap[dislike[i]] === undefined){
                    personGroupMap[dislike[i]] = otherGroup;
                    stack.push(dislike[i]);
                }else if(personGroupMap[dislike[i]] === selfGroup){
                    // 已标记的已经进入探寻序列，看是否在同一个分组
                    return false;
                }
            }
            
        }
    }
};