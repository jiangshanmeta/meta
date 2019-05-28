/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function(A) {
    A.forEach((arr)=>{
        let low = 0;
        let high = arr.length-1;
        
        while(low<high){
            let tmp = arr[low];
            arr[low] = arr[high] === 1?0:1;
            arr[high] = tmp===1?0:1;
            low++;
            high--;
        }
        if(low === high){
            arr[low] = arr[low] ===1?0:1;
        }

    });
    return A;
};