/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
// 和438题一样
var checkInclusion = function(s1, s2) {
    if(s1.length>s2){
        return false;
    }
    const aMap = {};
    for(let i=0;i<s1.length;i++){
        aMap[s1[i]] = (aMap[s1[i]] || 0) + 1;
    }
    const letters = Object.keys(aMap);
    
    let bMap = {};
    let bCount = 0;
    for(let i=0;i<s2.length;i++){
        if(!aMap[s2[i]]){
            bCount = 0;
            bMap = {};
            continue;
        }
        bMap[s2[i]] = (bMap[s2[i]] || 0) + 1;
        bCount++;
        
        if(bCount === s1.length){
            const match = letters.every((letter)=>{
                return aMap[letter] === bMap[letter];
            });
            
            if(match){
                return true;
            }
            
            bMap[s2[i-s1.length+1]]--;
            bCount--;    
        }
    }
    return false;
};