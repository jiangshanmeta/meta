/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var minDominoRotations = function(A, B) {
    let aVal = A[0];
    let bVal = B[0];
    // aCount意思是A[0]不和B[0]交换 A[index]和aVal比较
    let aCount = 0;
    let bCount = 0;
    // aReverseCount意思是A[0]和B[0]交换 B[index]和aVal比较
    let aReverseCount = 1;
    let bReverseCount = 1;
    // 当A[index]和B[index]都不等于aVal时，aFlag置为false 即此时不能得到全为aVal的值
    // 后面也无需和aVal比较了
    let aFlag = true;
    let bFlag = true;
    let index = 1;
    while((aFlag || bFlag) && index<A.length){
        if(aFlag){
            if(A[index] !== aVal){
                if(B[index] === aVal){
                    aCount++;
                }else{
                    aFlag = false;
                }
            }
            
            if(B[index] !== aVal && A[index] === aVal){
                aReverseCount++;
            }
            
            
        }
        if(bFlag){
            if(B[index] !== bVal){
                if(A[index] === bVal){
                    bCount++;
                }else{
                    bFlag = false;
                }
            }
            
            if(A[index] !== bVal && B[index] === bVal){
                bReverseCount++;
            }
        
        }
        index++;
    }
    
    aCount = aFlag?Math.min(aCount,aReverseCount):Infinity;
    bCount = bFlag?Math.min(bCount,bReverseCount):Infinity;
    
    const count = Math.min(aCount,bCount);
    if(count === Infinity){
        return -1;
    }
    return count;
};