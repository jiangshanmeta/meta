function decode(encoded: number[]): number[] {
    let xor1ton = 0;
    const n = encoded.length+1;
    for(let i=1;i<=n;i++){
        xor1ton ^= i;
    }
    let xor0n = 0;
    let xorFirst = 0;
    for(let i=0;i<encoded.length;i++){
        xor0n ^= encoded[i];
        xorFirst ^= xor0n
    }

    const result = [xorFirst^xor1ton];
    for(let i=0;i<encoded.length;i++){
        result[i+1] = result[i]^encoded[i];
    }
    return result
};