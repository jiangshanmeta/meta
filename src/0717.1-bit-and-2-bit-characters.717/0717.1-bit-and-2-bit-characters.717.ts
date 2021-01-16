function isOneBitCharacter(bits: number[]): boolean {
    let index = 0;
    while(index<bits.length){
        if(bits[index] === 0){
            if(index === bits.length-1){
                return true;
            }
            index++;
            continue;
        }
        if(index === bits.length-1){
            return false;
        }
        index += 2;
    }
    return false;
};