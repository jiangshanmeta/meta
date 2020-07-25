/**
 * @param {number[]} A
 * @return {number}
 */
var maxTurbulenceSize = function(A) {
    let result = 1;
    let count = 2;
    let sign = 1;
    let index = 0;
    while(index<A.length-1){
        if(A[index] === A[index+1]){
            index++;
            continue;
        }
        if(A[index]>A[index+1]){
            count = 2;
            result = Math.max(result,count);
            sign = -1;
            index++;
            while(index<A.length){
                if(sign*(A[index]-A[index+1])>0){
                    count++;
                    result = Math.max(result,count);
                    index++;
                    sign = -sign;
                }else{
                    break;
                }
            }        
        }else{
            count = 2;
            result = Math.max(result,count);
            sign = 1;
            index++;
            while(index<A.length){
                if(sign*(A[index]-A[index+1])>0){
                    count++;
                    result = Math.max(result,count);
                    index++;
                    sign = -sign;
                }else{
                    break;
                }
            }
            
        }
        
    }
    
    return result;
};