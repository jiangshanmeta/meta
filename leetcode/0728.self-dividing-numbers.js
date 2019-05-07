/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    const rst = [];
    for(let i=left;i<right+1;i++){
        let val = i;
        let flag = true;
        // 判断一个数是否可以被自我除
        while(val>0){
            const lastDigit = val%10;
            if(lastDigit === 0){
                flag = false;
                break;
            }
            
            if( i%(val%10) !== 0){
                flag = false;
                break;
            }
            val = (val-lastDigit)/10;
        }
        flag && rst.push(i);
    }
    return rst;
};