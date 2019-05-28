/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function(A) {
    let evenIndex = 0;
    let oddIndex = 1;
    while(evenIndex<A.length){
        if(A[evenIndex]&1){
            while(true){
                if((A[oddIndex]&1) === 0){
                    const tmp = A[evenIndex];
                    A[evenIndex] = A[oddIndex];
                    A[oddIndex] = tmp;
                    oddIndex += 2;
                    break;
                }
                oddIndex += 2;
            }
        }
        evenIndex += 2;
    }
    return A;
};