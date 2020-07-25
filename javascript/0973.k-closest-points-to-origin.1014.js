/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
var kClosest = function(points, K) {
    const map = {};
    const dises = [];
    for(let i=0;i<points.length;i++){
        const dis = points[i][0]**2 + points[i][1]**2;
        if(map[dis] === undefined){
            dises.push(dis);
            map[dis] = [points[i]];
        }else{
            map[dis].push(points[i]);
        }
    }

    dises.sort((a,b)=>a-b);
    const result = [];
    let count = 0;
    for(let i=0;i<dises.length;i++){
        result.push(...map[dises[i]]);
        count += map[dises[i]].length;

        if(count === K){
            break;
        }
    }
    return result;
};