/**
 * @param {string} S
 * @return {string}
 */

const vowels = {
    A:true,
    a:true,
    E:true,
    e:true,
    I:true,
    i:true,
    O:true,
    o:true,
    U:true,
    u:true,
}

var toGoatLatin = function(S) {
    return S.split(" ").map((letter,index)=>{
        const suffix = 'a'.repeat(index+1);
        
        if(vowels[letter[0]]){
            return letter+'ma' + suffix;
        }
        
        return letter.slice(1)+letter[0]+'ma'+suffix;
    }).join(" ");
};