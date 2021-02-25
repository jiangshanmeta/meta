function countGoodRectangles(rectangles: number[][]): number {
    let maxLen = 0;
    let maxCount = 0;
    for(let i=0;i<rectangles.length;i++){
        const len = Math.min(...rectangles[i]);
        if(len>maxLen){
            maxLen = len;
            maxCount = 1;
        }else if(len === maxLen){
            maxCount++;
        }
    }
    return maxCount;
};