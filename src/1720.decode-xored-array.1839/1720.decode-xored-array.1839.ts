function decode(encoded: number[], first: number): number[] {
    const result = new Array(encoded.length+1);
    result[0] = first;
    for(let i=0;i<encoded.length;i++){
        result[i+1] = result[i]^encoded[i]
    }
    return result;
};