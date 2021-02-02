/**
 * @param {string} number
 * @return {string}
 */
var reformatNumber = function(number) {
    const sequence = [];
    for(let i=0;i<number.length;i++){
        if(number[i] === ' ' || number[i] === '-'){
            continue;
        }
        sequence.push(number[i]);
    }
    const result = [];
    let index = 0;
    while(index<sequence.length){
        const rest = sequence.length-index;

        if(rest === 4){

            result.push(`${sequence[index]}${sequence[index+1]}`);
            index += 2;
            result.push(`${sequence[index]}${sequence[index+1]}`);
            index += 2;
        }else{
            const sub = [];
            let count = 0;
            while(count<3 && index<sequence.length){
                sub.push(sequence[index++]);
                count++;
            }
            result.push(sub.join(''));
        }
        
    }
    
    return result.join('-');
};