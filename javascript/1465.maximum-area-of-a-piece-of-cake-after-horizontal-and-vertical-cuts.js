/**
 * @param {number} h
 * @param {number} w
 * @param {number[]} horizontalCuts
 * @param {number[]} verticalCuts
 * @return {number}
 */
var maxArea = function(h, w, horizontalCuts, verticalCuts) {
    horizontalCuts.sort((a,b)=>a-b);
    if(horizontalCuts[0] !== 0){
        horizontalCuts.unshift(0)
    }
    if(horizontalCuts[horizontalCuts.length-1] !== h){
        horizontalCuts.push(h);
    }
    const deltaHorizontal = [];
    for(let i=1;i<horizontalCuts.length;i++){
        deltaHorizontal.push(horizontalCuts[i]-horizontalCuts[i-1]);
    }
    deltaHorizontal.sort((a,b)=>b-a);
    
    verticalCuts.sort((a,b)=>a-b);
    if(verticalCuts[0] !== 0){
        verticalCuts.unshift(0);
    }
    if(verticalCuts[verticalCuts.length-1] !== w){
        verticalCuts.push(w);
    }
    const deltaVertical = [];
    for(let i=1;i<verticalCuts.length;i++){
        deltaVertical.push(verticalCuts[i]-verticalCuts[i-1]);
    }
    deltaVertical.sort((a,b)=>b-a);
    return deltaHorizontal[0]*deltaVertical[0]%(10**9+7)
};