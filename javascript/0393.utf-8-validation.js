/**
 * @param {number[]} data
 * @return {boolean}
 */
// 其实不需要转成二进制字符串的
// 通过数字大小判断即可 然而不想找边界
var validUtf8 = function(data) {
    let index = 0;
    while(index<data.length){
        const binaryData = data[index].toString(2).padStart(8,'0');
        if(binaryData[0] === "0"){
            index++;
            continue;
        }
        
        let count = 0;
        for(let i=1;i<8;i++){
            if(binaryData[i] === "0"){
                break;
            }
            count++;
        }
        if(count === 0 || count>3){
            return false;
        }
        
        if(index+count>=data.length){
            return false;
        }
        for(let i=0;i<count;i++){
            const binaryData = data[index+i+1].toString(2).padStart(8,'0');
            if(binaryData[0] !== "1" || binaryData[1] !== "0"){
                return false;
            }
        }
        index += (count+1);
    }
    return true;
};