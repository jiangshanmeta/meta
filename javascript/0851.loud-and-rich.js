/**
 * @param {number[][]} richer
 * @param {number[]} quiet
 * @return {number[]}
 */
var loudAndRich = function(richer, quiet) {
    // 有向图初始化
    const result = new Array(quiet.length);
    const graph = new Array(quiet.length);
    for(let i=0;i<quiet.length;i++){
        result[i] = i;
        graph[i] = [];
    }
    
    for(let i=0;i<richer.length;i++){
        (graph[richer[i][0]]).push(richer[i][1]);
    }
    
    for(let i=0;i<result.length;i++){
        // BFS DFS 其实都行
        const queue = [i];
        while(queue.length){
            const index = queue.shift();
            const sound = quiet[result[index]];
            for(let j=0;j<graph[index].length;j++){
                const relateIndex = graph[index][j];
                
                if(quiet[result[relateIndex]]>sound ){
                    result[relateIndex] = result[index];
                    queue.push(relateIndex);
                }
            }
        }
    }
    
    return result;
};