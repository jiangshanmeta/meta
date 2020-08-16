/**
 * @param {number[]} a
 * @param {number[]} b
 * @return {number}
 */
var smallestDifference = function(a, b) {
    a.sort((c,d)=>c-d);
    b.sort((c,d)=>c-d);
    let result = Math.abs(a[0]-b[0]);
    let index1 = 0;
    let index2 = 0;
    while(index1<a.length && index2<b.length){
        if(a[index1] === b[index2]){
            return 0;
        }
        result = Math.min(result,Math.abs(a[index1]-b[index2]));
        if(a[index1]>b[index2]){
            index2++;
        }else{
            index1++;
        }
    }
    return result;
};