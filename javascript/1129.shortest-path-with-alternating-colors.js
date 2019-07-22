/**
 * @param {number} n
 * @param {number[][]} red_edges
 * @param {number[][]} blue_edges
 * @return {number[]}
 */
// Dijkstra
var shortestAlternatingPaths = function(n, red_edges, blue_edges) {
    // redGraph 表示 key=>value有红色路径
    const redGraph = {};
    const blueGraph = {};
    for(let i=0;i<red_edges.length;i++){
        const [from,to] = red_edges[i];
        (redGraph[from] || (redGraph[from] = [])).push(to);
    }
    for(let i=0;i<blue_edges.length;i++){
        const [from,to] = blue_edges[i];
        (blueGraph[from] || (blueGraph[from] = [])).push(to);
    }
    // bluePath[i] 以蓝色路为最后一步到达i的最短路径
    const bluePath = new Array(n).fill(Infinity);
    const redPath = new Array(n).fill(Infinity);
    bluePath[0] = 0;
    redPath[0] = 0;

    const lastBlue = [0];
    const lastRed = [0];
    while(lastBlue.length || lastRed.length){
        while(lastBlue.length){
            const node = lastBlue.pop();
            const paths = redGraph[node];
            if(!paths){
                continue;
            }
            for(let i=0;i<paths.length;i++){
                if(bluePath[node]+1<redPath[paths[i]]){
                    redPath[paths[i]] = bluePath[node]+1;
                    lastRed.push(paths[i]);
                }
            }
        }
        while(lastRed.length){
            const node = lastRed.pop();
            const paths = blueGraph[node];
            if(!paths){
                continue;
            }
            for(let i=0;i<paths.length;i++){
                if(redPath[node]+1<bluePath[paths[i]]){
                    bluePath[paths[i]] = redPath[node]+1;
                    lastBlue.push(paths[i]);
                }
            }
        }
        
        
    }
    const result = new Array(n);
    for(let i=0;i<n;i++){
        if(bluePath[i] === Infinity && redPath[i] === Infinity){
            result[i] = -1;
        }else{
            result[i] = Math.min(bluePath[i],redPath[i]);
        }
    }
    return result;
};