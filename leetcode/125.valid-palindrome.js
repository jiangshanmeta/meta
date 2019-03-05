/**
 * @param {string} s
 * @return {boolean}
 */

const map = {
    a:true,
    b:true,
    c:true,
    d:true,
    e:true,
    f:true,
    g:true,
    h:true,
    i:true,
    j:true,
    k:true,
    l:true,
    m:true,
    n:true,
    o:true,
    p:true,
    q:true,
    r:true,
    s:true,
    t:true,
    u:true,
    v:true,
    w:true,
    x:true,
    y:true,
    z:true,
    0:true,
    1:true,
    2:true,
    3:true,
    4:true,
    5:true,
    6:true,
    7:true,
    8:true,
    9:true,
}

var isPalindrome = function(s) {
    s = s.trim().toLowerCase();
    if(!s){
        return true;
    }
    // 双指针
    let low = 0;
    let high = s.length-1;
    
    while(low<high){
        while(low<high && !map[s[low]]){
            low++;
        }
        while(low<high && !map[s[high]]){
            high--;
        }
        
        
        if(s[low] !== s[high]){
            return false;
        }
        low++;
        high--;

    }
    return true;
};