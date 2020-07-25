/**
 * @param {number[]} A
 * @return {number}
 */
var oddEvenJumps = function(A) {
    const arr = new Array(A.length);
    arr[arr.length-1] = [true,true];
    for(let i=arr.length-2;i>-1;i--){
        let item = A[i];

        let oddVal = Infinity;
        let oddRst = false;
        let evenVal = -Infinity;
        let evenRst = false;
        for(let j=i+1;j<A.length;j++){
            if(A[i]<=A[j] && A[j]<oddVal){
                oddVal = A[j];
                oddRst = arr[j][1];
            }
            if(A[i]>=A[j] && A[j]>evenVal){
                evenVal = A[j];
                evenRst = arr[j][0];
            }
        }
        arr[i] = [oddRst,evenRst];
    }
    
    let count = 0;
    for(let i=0;i<arr.length;i++){
        arr[i][0] && count++;
    }

    return count;
};