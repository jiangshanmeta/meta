/**
 * @param {number[][]} points
 * @return {number}
 */
var minAreaRect = function(points) {
    // 按y坐标聚合
    const map = {};
    for(let i=0;i<points.length;i++){
        const [x,y] = points[i];
        if(map[y] === undefined){
            map[y] = {[x]:true};
        }else{
            map[y][x] = true;
        }
    }

    let minArea = Infinity;
    const ys = Object.keys(map);
    for(let i=0;i<ys.length-1;i++){
        const xs1Map = map[ys[i]];
        const xs1 = Object.keys(xs1Map);
        if(xs1.length === 1){
            continue;
        }
        for(let j=i+1;j<ys.length;j++){
            const xs2Map = map[ys[j]];
            const xs2 = Object.keys(xs2Map);
            if(xs2.length === 1){
                continue;
            }
            const deltaY = Math.abs(ys[j]-ys[i]);
            // 给定两个y坐标，找到x坐标一致的
            const candidates = [];
            for(let k=0;k<xs1.length;k++){
                if(xs2Map[xs1[k]]){
                    candidates.push(xs1[k]);
                }
            }
            if(candidates.length<2){
                continue;
            }
            candidates.sort((a,b)=>a-b);
            // 找到x坐标差值最小的
            const deltaXs = [];
            for(let m=1;m<candidates.length;m++){
                deltaXs.push(candidates[m]-candidates[m-1]);
            }
            const curMinArea = deltaY*Math.min(...deltaXs);
            if(curMinArea<minArea){
                minArea = curMinArea;
            }
        }
    }
    
    
    return minArea === Infinity?0:minArea;
};