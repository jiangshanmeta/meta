function rand7(): number {
    return -1;
}

function rand10(): number {
    let x = 0;
    let y = 0;
    let index = 0;
    do{
        x = rand7();
        y = rand7();
        index = (x-1)*7+y;
    } while(index>40);
    return (index-1)%10+1;
};