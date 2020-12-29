/**
 * @param {number[][]} points
 * @return {number}
 */
var maxWidthOfVerticalArea = function(points) {
    const xs = [...new Set(points.map(p=>p[0]))].sort((a,b)=>a-b);
    let result = 0;
    for(let i=1;i<xs.length;i++){
        result = Math.max(result,xs[i]-xs[i-1]);
    }
    return result
};