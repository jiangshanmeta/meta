/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function(n, edges) {
    const depth = new Array(n).fill(0);
    const graph = new Array(n);
    const graph2 = new Array(n);
    for(let i=0;i<n;i++){
        graph[i] = [];
        graph2[i] = [];
    }
    for(let i=0;i<edges.length;i++){
        graph2[edges[i][0]].push(edges[i][1]);
        graph2[edges[i][1]].push(edges[i][0]);
    }
    const used = new Array(n).fill(false);
    used[0] = true;
    const stack = [0];
    while(stack.length){
        const node = stack.pop();
        for(let i=0;i<graph2[node].length;i++){
            if(used[graph2[node][i]]){
                continue;
            }
            graph[node].push(graph2[node][i]);
            stack.push(graph2[node][i]);
            used[graph2[node][i]] = true;
        }
    }
    

    function dfs(index){
        if(graph[index].length === 0){
            return 0;
        }
        
        const disList = graph[index].map((item)=>dfs(item));
        
        const maxDis = Math.max(...disList)+1;
        depth[index] = Math.max(maxDis,depth[index]);
        
        for(let i=0;i<disList.length;i++){
            let dis = 0;
            for(let j=0;j<disList.length;j++){
                if(i === j){
                    continue;
                }
                dis = Math.max(dis,disList[j]+1);
            }
            dfs2(graph[index][i],dis+1);
        }
        return maxDis;
    }
    
    function dfs2(index,dis){
        depth[index] = Math.max(depth[index],dis++);
        for(let i=0;i<graph[index].length;i++){
            dfs2(graph[index][i],dis);
        }
    }
    
    dfs(0);
    
    const minDepth = Math.min(...depth);
    const result = [];
    for(let i=0;i<n;i++){
        if(depth[i] === minDepth){
            result.push(i);
        }
    }
    return result;
};