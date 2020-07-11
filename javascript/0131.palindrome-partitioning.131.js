/**
 * @param {string} s
 * @return {string[][]}
 */

function isPalindrome(s,low,high){
    while(low<high){
        if(s[low] !== s[high]){
            return false;
        }
        low++;
        high--;
    }
    return true;
}

var partition = function(s) {
    function backTracking(list,start,sequence){
        if(start === s.length){
            return sequence.push(list.slice())
        }
        
        for(let i=start;i<s.length;i++){
            if(isPalindrome(s,start,i)){
                list.push(s.slice(start,i+1));
                backTracking(list,i+1,sequence);
                list.pop();
            }
        }
    }
    const sequence = [];
    backTracking([],0,sequence);
    return sequence;
};