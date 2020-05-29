/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {boolean[]} hasApple
 * @return {number}
 */
var minTime = function(n, edges, hasApple) {
    const tree = {};
    for(let i=0;i<edges.length;i++){
        const [from,to] = edges[i];
        if(!tree[from]){
            tree[from] = [];
        }
        tree[from].push(to);
        if(!tree[to]){
            tree[to] = [];
        }
        tree[to].push(from);
    }
    const visited = new Array(n).fill(false);
    visited[0] = true;
   
    return dfs(tree,visited,0,hasApple)
};

function dfs(tree,visited,index,hasApple){
    if(!tree[index]){
        return 0;
    }
    const subNodes = tree[index];
    let result = 0;
    for(let i=0;i<subNodes.length;i++){
        const node = subNodes[i];
        if(visited[node]){
            continue;
        }
        visited[node] = true;
        const subResult = dfs(tree,visited,node,hasApple);
        if(subResult>0){
            result += subResult+2;
        }else if(hasApple[node]){
            result += 2;
        }
    }
    return result;
}

