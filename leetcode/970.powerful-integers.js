/**
 * @param {number} x
 * @param {number} y
 * @param {number} bound
 * @return {number[]}
 */
// 暴力算，没什么可说的，注意是1的情况
var powerfulIntegers = function(x, y, bound) {
    const result = [];
    const map = {};
    const cacheX = {};
    function getCacheX(i){
        if(cacheX[i] === undefined){
            cacheX[i] = x**i;
        }
        return cacheX[i];
    }
    const cacheY = {};
    function getCacheY(j){
        if(cacheY[j] === undefined){
            cacheY[j] = y**j;
        }
        return cacheY[j]
    }
    
    
    let i = 0;
    while(true){
        const xi = getCacheX(i);
        i++;
        if(xi>bound){
            break;
        }
        const rest = bound-xi;
        let j = 0;
        while(true){
            const yj = getCacheY(j);
            j++;
            if(yj>rest){
                break;
            }
            if(map[xi+yj] === undefined){
                map[xi+yj] = true;
                result.push(xi+yj);
            }
            if(y === 1){
                break;
            }
        }
        if(x === 1){
            break;
        }
    }
    return result;
};