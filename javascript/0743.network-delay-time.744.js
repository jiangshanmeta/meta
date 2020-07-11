/**
 * @param {number[][]} times
 * @param {number} N
 * @param {number} K
 * @return {number}
 */
// Dijkstra
var networkDelayTime = function(times, N, K) {
    const graph = [];
    for(let i=1;i<N+1;i++){
        graph[i] = [];
    }
    for(let i=0;i<times.length;i++){
        graph[times[i][0]].push(times[i]);
    }
    const costs = new Array(N+1).fill(Infinity);

    costs[0] = 0;
    costs[K]  = 0;
    let candidates = [];
    for(let i=0;i<graph[K].length;i++){
        costs[graph[K][i][1]] = graph[K][i][2];
        candidates.push(graph[K][i][1]);
    }
    
    while(candidates.length){
        let j = -1;
        let index = -1;
        let cost = Infinity;
        for(let i=0;i<candidates.length;i++){
            if(costs[candidates[i]]<cost){
                j = i;
                index = candidates[i];
                cost = costs[candidates[i]];
            }
        }
        candidates.splice(j,1);
        for(let i=0;i<graph[index].length;i++){
            if(costs[index]+graph[index][i][2]<costs[graph[index][i][1]]){
                costs[graph[index][i][1]] = costs[index]+graph[index][i][2];
                if(!candidates.includes(graph[index][i][1])){
                    candidates.push(graph[index][i][1]);
                }
            }
        }
        
    }
    
    const max = Math.max(...costs);
    return max === Infinity?-1:max;
};