/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} succProb
 * @param {number} start
 * @param {number} end
 * @return {number}
 */
// Dijkstra
var maxProbability = function(n, edges, succProb, start, end) {
    const graphByEdge = {};
    const graphByP = {};
    for(let i=0;i<edges.length;i++){
        const [from,to] = edges[i];
        if(!graphByEdge[from]){
            graphByEdge[from] = [to];
        }else{
            graphByEdge[from].push(to);
        }
        
        if(!graphByEdge[to]){
            graphByEdge[to] = [from];
        }else{
            graphByEdge[to].push(from);
        }
        const p = succProb[i];
        if(!graphByP[from]){
            graphByP[from] = [p];
        }else{
            graphByP[from].push(p);
        }
        
        if(!graphByP[to]){
            graphByP[to] = [p];
        }else{
            graphByP[to].push(p);
        }
    }
    
    const ps = new Array(n).fill(0);
    ps[start] = 1;
    const appended = new Array(n).fill(false);
    // appended[start] = true;
    

    
    let rest = n;
    while(rest){
        let newNode = -1;
        let newP = 0;
        for(let i=0;i<n;i++){
            if(appended[i]){
                continue;
            }
            if(ps[i]>newP){
                newNode = i;
                newP = ps[i];
            }
        }
        if(newNode === -1){
            break;
        }
        appended[newNode] = true;
        if(graphByEdge[newNode]){
            for(let i=0;i<graphByEdge[newNode].length;i++){
                const to = graphByEdge[newNode][i];
                const pEdge = graphByP[newNode][i];
                
                const np = ps[newNode]*pEdge;
                if(np>ps[to]){
                    ps[to] = np;
                }
            }
        }
        
    }
    
    return ps[end]
};