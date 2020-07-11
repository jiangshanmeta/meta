/**
 * @param {number[]} seats
 * @return {number}
 */
var maxDistToClosest = function(seats) {    
    let startIndex = seats.indexOf(1);
    let maxCount = startIndex-0;
    
    while(true){
        let nextIndex = seats.indexOf(1,startIndex+1);
        if(nextIndex === -1){
            if(seats.length-1-startIndex>maxCount){
                maxCount = seats.length-1-startIndex;
            }
            break;
        }else{
            const mid = (startIndex+nextIndex)/2 | 0;
            if(mid-startIndex>maxCount){
                maxCount = mid-startIndex;
            }
        }
        startIndex = nextIndex;
    }
    
    return maxCount;
};