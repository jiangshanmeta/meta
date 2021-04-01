function reformatNumber(number: string): string {
    const str = number.replace(/[-\s]/g,'');
    const result:string[] = [];
    let index = 0;
    while(str.length-index>4){
        result.push(str.slice(index,index+3));
        index += 3;
    }

    if(str.length-index === 4){
        result.push(str.slice(index,index+2));
        result.push(str.slice(index+2))
    }else{
        result.push(str.slice(index));
    }

    return result.join('-');
};