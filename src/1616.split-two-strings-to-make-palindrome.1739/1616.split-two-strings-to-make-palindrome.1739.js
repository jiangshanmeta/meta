/**
 * @param {string} a
 * @param {string} b
 * @return {boolean}
 */
var checkPalindromeFormation = function(a, b) {
    if(check1(a) || check1(b) || check2(a,b) || check2(b,a)){
        return true;
    }
    return false;
};

function check1(a,left=0,right=a.length-1){
    while(left<right){
        if(a[left] !== a[right]){
            return false;
        }
        left++;
        right--;
    }
    return true;
}

function check2(a,b){
    let left = 0;
    let right = a.length-1;
    while(left<right){
        if(a[left] !== b[right]){
            return check1(a,left,right) || check1(b,left,right);
        }
        left++;
        right--;
    }
    return true;
}