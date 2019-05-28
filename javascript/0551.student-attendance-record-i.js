/**
 * @param {string} s
 * @return {boolean}
 */
// 按题意遍历计数就好了
var checkRecord = function(s) {
    let absentCount = 0;
    let lateCount = 0;
    for(let i=0;i<s.length;i++){
        switch(s[i]){
            case 'P':
                lateCount = 0;
                break;
            case 'L':
                lateCount++;
                if(lateCount === 3){
                    return false;
                }
                break;
            case 'A':
                lateCount = 0;
                absentCount++;
                if(absentCount === 2){
                    return false;
                }
                break;
        }
    }
    return true;
};