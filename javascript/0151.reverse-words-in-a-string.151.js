/**
 * @param {string} s
 * @return {string}
 */
// 解法一 利用栈
var reverseWords = function(s) {
    const result = [];
    const stack = [];
    let index = s.length-1;
    while(index>-1 && s[index] === ' '){
        index--;
    }
    while(index>-1){
        while(index>-1 && s[index] !== ' '){
            stack.push(s[index--]);
        }
        while(stack.length){
            result.push(stack.pop());
        }
        result.push(' ');
        while(index>-1 && s[index] === ' '){
            index--;
        }
    }
    result.pop();
    return result.join('');
};
// 解法二 双指针
var reverseWords = function(s) {
    const sequence = s.split('');
    reverse(sequence,0,sequence.length-1);
    let index1 = 0;
    let index2 = 0;
    while(index2<sequence.length && sequence[index2] === ' '){
        index2++;
    }
    while(index2<sequence.length){
        let start = index2;
        while(index2<sequence.length && sequence[index2] !== ' '){
            index2++;
        }
        reverse(sequence,start,index2-1);
        while(start<index2){
            sequence[index1++] = sequence[start++];
        }
        sequence[index1++] = ' ';
        while(index2<sequence.length && sequence[index2] === ' '){
            index2++;
        }

    }
    sequence.length = Math.max(index1-1,0);
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