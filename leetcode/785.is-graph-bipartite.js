/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function(graph) {
    const visited = new Array(graph.length).fill(false);
    let restCount = graph.length;
    const queue = [];
    const groups = [{},{}];
    const indexGroupMap = {};
    
    while(restCount>0){
        // 考虑到多个连通分量
        let firstUnvisitedNode = visited.findIndex((item)=>!item);
        queue.push(firstUnvisitedNode);
        groups[0][firstUnvisitedNode] = true;
        indexGroupMap[firstUnvisitedNode] = 0;
        visited[firstUnvisitedNode] = true;
        restCount--;
        
        // BSF
        while(queue.length){
            const node = queue.shift();
            const curGroup = groups[indexGroupMap[node]];
            const nextGroupIndex = indexGroupMap[node]===1?0:1;
            const nextGroup = groups[nextGroupIndex];
            
            let relatives = graph[node];
            for(let i=0;i<relatives.length;i++){
                let nextNode = relatives[i];
                // 已经分配到同一个组上 分配失败
                if(curGroup[nextNode]){
                    return false;
                }
                groups[nextGroupIndex][nextNode] = true;
                indexGroupMap[nextNode] = nextGroupIndex;
                
                if(!visited[nextNode]){
                    visited[nextNode] = true;
                    restCount--;
                    queue.push(nextNode);
                }
            }
            
        }
        
    }
    return true;
};