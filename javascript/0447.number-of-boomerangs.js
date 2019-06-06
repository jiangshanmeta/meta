/**
 * @param {number[][]} points
 * @return {number}
 */

const cache = {2:2};

function getA2(n){
    if(cache[n]){
        return cache[n];
    }
    cache[n] = n*(n-1);
    return cache[n];
}


var numberOfBoomerangs = function(points) {
    const disMaps = Array.apply(null,{length:points.length}).map(()=>Object.create(null));

    for(let i=0;i<points.length;i++){
        const [x1,y1] = points[i];
        for(let j=i+1;j<points.length;j++){
            const [x2,y2] = points[j];
            const dis = (x2-x1)**2 + (y2-y1)**2;
            if(disMaps[i][dis] === undefined){
                disMaps[i][dis] = 1;
            }else{
                disMaps[i][dis]++;
            }
            
            if(disMaps[j][dis] === undefined){
                disMaps[j][dis] = 1;
            }else{
                disMaps[j][dis]++;
            }
        }
    }

    let sum = 0;
    for(let i=0;i<disMaps.length;i++){
        const disMap = disMaps[i];
        const dises = Object.keys(disMap);
        for(let j=0;j<dises.length;j++){
            const count = disMap[dises[j]];
            
            if(count === 1){
                continue;
            }
            sum += getA2(count)
        }
    }
    return sum;
};