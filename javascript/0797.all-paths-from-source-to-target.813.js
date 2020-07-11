/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
    
    function getPath(index,cache,graph){
        if(cache[index] ){
            return cache[index];   
        }
        const sequence = [];
        for(let i=0;i<graph[index].length;i++){
            const nextIndex = graph[index][i];
            if(nextIndex === graph.length-1){
                sequence.push([index,graph.length-1])
            }else{
                const nextPath = getPath(nextIndex,cache,graph);
                for(let j=0;j<nextPath.length;j++){
                    sequence.push([index].concat(nextPath[j]));
                }
            }
            
        }
        cache[index] = sequence;
        
        return sequence;
    }
    
    
    return getPath(0,{},graph);
};