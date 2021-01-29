/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let result = 0;
    const heightStack = [];
    const indexStack = [];
    for(let i=0;i<height.length;i++){
        const h = height[i];
        while(heightStack.length>1 && h>=heightStack[heightStack.length-1]){
            const last2 = heightStack[heightStack.length-2];
            if(last2>=heightStack[heightStack.length-1]){
                heightStack.pop();
                indexStack.pop();
            }else{
                break
            }


        }
        heightStack.push(h);
        indexStack.push(i);
    }
    for(let i=0;i<heightStack.length-1;i++){
        const h = Math.min(heightStack[i],heightStack[i+1]);
        const l = indexStack[i];
        const r = indexStack[i+1];
        for(let j=l+1;j<r;j++){
            result += h-height[j];
        }
    }
    return result
};