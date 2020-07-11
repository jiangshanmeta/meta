/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    const sequence = s.split('');
    let index = 0;
    while(index<sequence.length){
        const start = index;
        while(index<sequence.length && sequence[index] !== ' '){
            index++;
        }
        reverse(sequence,start,index-1);
        index++;
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