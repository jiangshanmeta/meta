function interpret(command: string): string {
    let result:string[] = [];
    let index = 0;
    while(index<command.length){
        if(command[index] === 'G'){
            result.push(command[index++]);
            continue;
        }
        if(command[index+1] === ')'){
            result.push('o');
            index += 2;
        }else{
            result.push('al');
            index +=4;
        }
    }
    return result.join('');
};