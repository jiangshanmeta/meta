function maximumBinaryString(binary: string): string {
    const sequence = binary.split('');
    let index = 0;
    for(let i=0;i<sequence.length-1;i++){
        if(sequence[i] === '1'){
            continue;
        }
        index = Math.max(index,i+1);
        while(index<sequence.length && sequence[index] === '1'){
            index++;
        }
        if(index === sequence.length){
            break;
        }
        swap(sequence,i+1,index);
        sequence[i] = '1';
    }
    return sequence.join('');
};

function swap<T>(list:T[],i,j){
    const tmp = list[i];
    list[i] = list[j];
    list[j] = tmp;
}