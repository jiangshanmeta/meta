/**
 * @param {number[]} encoded
 * @return {number[]}
 */
var decode = function(encoded) {
    const n = encoded.length+1;
    let xor1 = 0;
    let xor2 = 0;
    for(let i=0;i<encoded.length;i++){
        xor1 ^= encoded[i];
        xor2 ^= xor1;
    }
    let xor3 = 0;
    for(let i=1;i<=n;i++){
        xor3 ^= i;
    }
    const result = [
        xor2^xor3,
    ]

    for(let i=0;i<encoded.length;i++){
        result[i+1] = result[i]^encoded[i]
    }
    
    return result
};