/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function(edges) {
    const graph = new Array(edges.length+1);
    for(let i=1;i<edges.length+1;i++){
        graph[i] = [];
    }
    for(let i=0;i<edges.length;i++){
        graph[edges[i][0]].push(edges[i][1]);
        graph[edges[i][1]].push(edges[i][0]);
    }
    const used = new Array(edges.length+1);
    used[1] = true;

    const cycle = {};
    function helper(prevIndex,index){

        for(let i=0;i<graph[index].length;i++){
            if(graph[index][i] === prevIndex){
                continue;
            }
            if(used[graph[index][i]]){
                for(let i=1;i<used.length;i++){
                    if(used[i]){
                        cycle[i] = true;
                    }
                }
                return true;
            }
            used[graph[index][i]] = true;
            
            if(helper(index,graph[index][i])){
                return true;
            }
            used[graph[index][i]] = false;

        }
    }
    helper(0,1);
    for(let i=edges.length-1;i>-1;i--){
        if(cycle[edges[i][0]] && cycle[edges[i][1]]){
            return edges[i]
        }
    }
    
    
};