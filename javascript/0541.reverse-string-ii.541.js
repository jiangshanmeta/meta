/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    const sequence = s.split('');
    let index = 0;
    while(index<sequence.length){
        reverse(sequence,index,Math.min(index+k-1,s.length-1));
        index += 2*k;
    }
    return sequence.join('');
};

function reverse(sequence,left,right){
    while(left<right){
        const tmp = sequence[right];
        sequence[right] = sequence[left];
        sequence[left] = tmp;
        left++;
        right--;
    }
}