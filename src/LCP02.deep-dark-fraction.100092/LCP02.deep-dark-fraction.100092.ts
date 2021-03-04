function fraction(cont: number[]): number[] {
    const result = [
        cont[cont.length-1],
        1
    ];
    for(let i=cont.length-2;i>-1;i--){
        swap(result,0,1);
        result[0] += cont[i]*result[1];
        const m = gcd(result[0],result[1]);
        result[0] /= m;
        result[1] /= m;
    }
    return result
};

function gcd (a:number, b:number):number {
    if (a < b) {
        const tmp = a;
        a = b;
        b = tmp;
    }
    while (b !== 0) {
        const tmp = a % b;
        a = b;
        b = tmp;
    }
    return a;
}

function swap<T>(arr:T[],i,j){
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}