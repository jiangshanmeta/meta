/**
 * @param {number[][]} adjacentPairs
 * @return {number[]}
 */
var restoreArray = function(adjacentPairs) {
    const graph = {};
    for(let [a,b] of adjacentPairs){
        if(!graph[a]){
            graph[a] = [];
        }
        if(!graph[b]){
            graph[b] = [];
        }
        graph[a].push(b);
        graph[b].push(a);
    }
    const n = adjacentPairs.length+1;
    const keys = Object.keys(graph);
    const visited = {};
    const startKey = keys.find((key)=>graph[key].length === 1);
    visited[startKey] = true;
    const result = [+startKey];
    while(result.length<n){
        const key = result[result.length-1];
        const edges = graph[key];
        const nextKey = edges.find((node)=>!visited[node]);
        result.push(nextKey);
        visited[nextKey] = true
    }
    return result;
    // visited[startKey] = true
    
    
};