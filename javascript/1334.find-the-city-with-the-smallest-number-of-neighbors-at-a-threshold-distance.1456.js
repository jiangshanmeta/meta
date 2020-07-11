/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} distanceThreshold
 * @return {number}
 */
var findTheCity = function(n, edges, distanceThreshold) {
    // Floyd 算法 算出两点间最短距离 时间O(N^3)
    const dists = new Array(n);
    for(let i=0;i<n;i++){
        dists[i] = new Array(n).fill(Infinity);
        dists[i][i] = 0;
    }
    for(let i=0;i<edges.length;i++){
        const [from,to,cost] = edges[i];
        dists[from][to] = cost;
        dists[to][from] = cost;
    }
    for(let k=0;k<n;k++){
        for(let i=0;i<n;i++){
            for(let j=0;j<n;j++){
                if(dists[i][j]>dists[i][k]+dists[k][j]){
                    dists[i][j] = dists[i][k] + dists[k][j];
                }
            }
        }
    }
    let minNeighbour = n;
    let minNeighbourCity = -1;
    for(let i=0;i<n;i++){
        let count = 0;
        for(let j=0;j<n;j++){
            if(dists[i][j]<=distanceThreshold){
                count++;
            }
        }
        if(count<=minNeighbour){
            minNeighbour = count;
            minNeighbourCity = i;
        }
        
    }
    return minNeighbourCity;
};