/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    let startIndex = 0;
    let count = 0;
    // 找到第一个1的位置
    while(startIndex<flowerbed.length){
        if(flowerbed[startIndex] === 1){
            break;
        }
        startIndex++;
    }

    if(startIndex === flowerbed.length){
        return ((startIndex+1)/2 | 0) >= n;
    }
    // 左边能摆几个
    count += startIndex/2 | 0;
    
    //  2=>0 3=>1 4=>1 5=>2    
    // 找两个1之间有几个0
    let endIndex = startIndex+1;
    while(endIndex<flowerbed.length){
        if(flowerbed[endIndex] === 1){
            let zeroCount = endIndex-startIndex-1;
            if(zeroCount>2){
                count += (zeroCount-1)/2 | 0;
                if(count>=n){
                    return true;
                }
            }
            startIndex = endIndex;
        }
        endIndex++;
    }
    // 右边能摆几个
    if(startIndex<flowerbed.length){
        let zeroCount = flowerbed.length-startIndex-1;
        if(zeroCount>1){
            count += zeroCount/2 | 0;
        }
    }
    
    return count>=n;
};