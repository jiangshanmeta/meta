/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var minReorder = function(n, connections) {
    const edges = {};
    const neighbours = {};
    for(let i=0;i<connections.length;i++){
        const [from,to] = connections[i];
        if(!edges[from]){
            edges[from] = [];
        }
        edges[from].push(to);
        if(!neighbours[from]){
            neighbours[from] = [];
        }
        neighbours[from].push(to);
        if(!neighbours[to]){
            neighbours[to] = [];
        }
        neighbours[to].push(from);
    }
    const visited = new Array(n).fill(false);
    visited[0] = true;
    const stack = [0];
    let result = 0;
    while(stack.length){
        const node = stack.pop();
        const neighbour = neighbours[node] || [];
        const edge = edges[node] || [];
        for(let i=0;i<neighbour.length;i++){
            const rNode = neighbour[i];
            if(visited[rNode]){
                continue;
            }
            visited[rNode] = true;
            if(edge.includes(rNode)){
                result++;
            }
            stack.push(rNode);
        }
        
    }
    return result;
};