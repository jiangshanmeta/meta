/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function(name, typed) {
    let index1 = 0;
    let index2 = 0;
    
    while(index1<name.length && index2<typed.length){
        const char1 = name[index1];
        const char2 = typed[index2];
        if(char1 !== char2){
            return false;
        }
        // 统计相同字母出现的个数
        let count1 = 1;
        while(name[index1+count1] === char1){
            count1++;
        }
        let count2 = 1;
        while(typed[index2+count2] === char2){
            count2++;
        }
        if(count1>count2){
            return false;
        }
        index1 += count1;
        index2 += count2;
    }
    
    if(index1 !== name.length || index2 !== typed.length){
        return false;
    }
    return true;
};