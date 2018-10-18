/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function(bits) {
    let index = 0;
    while(index<bits.length){
        if(index === bits.length-1){
            return true;
        }
        
        if(bits[index] === 1){
            index += 2;
        }else{
            index++;
        }
        
        
    }
    return false;
};