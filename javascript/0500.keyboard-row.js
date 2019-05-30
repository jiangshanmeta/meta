/**
 * @param {string[]} words
 * @return {string[]}
 */
// hash
const row1Map = {
    q:true,
    w:true,
    e:true,
    r:true,
    t:true,
    y:true,
    u:true,
    i:true,
    o:true,
    p:true,
};

const row2Map = {
    a:true,
    s:true,
    d:true,
    f:true,
    g:true,
    h:true,
    j:true,
    k:true,
    l:true,
}

const row3Map = {
    z:true,
    x:true,
    c:true,
    v:true,
    b:true,
    n:true,
    m:true,
};

const rowMap = [row1Map,row2Map,row3Map];

var findWords = function(words) {
    return words.filter((word)=>{
        word = word.toLowerCase().split('');
        const letter1 = word[0];
        const row = rowMap.find((row)=>{
            return row.hasOwnProperty(letter1);
        });
        
        return word.every((letter)=>{
            return row.hasOwnProperty(letter);
        });
        
    });
};