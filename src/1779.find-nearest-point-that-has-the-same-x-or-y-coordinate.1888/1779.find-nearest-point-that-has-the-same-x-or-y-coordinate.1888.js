/**
 * @param {number} x
 * @param {number} y
 * @param {number[][]} points
 * @return {number}
 */
var nearestValidPoint = function(x, y, points) {
    let result = -1;
    let minDis = Infinity;
    for(let i=0;i<points.length;i++){
        const [xi,yi] = points[i];
        if(xi === x || yi === y){
            const dis = Math.abs(xi-x)+Math.abs(yi-y);
            if(dis<minDis){
                result = i;
                minDis = dis;
            }
        }
    }
    return result;
};