function toGoatLatin(S: string): string {
    const list = S.split(' ');
    for(let i=0;i<list.length;i++){
        if(isVowel(list[i][0])){
            list[i] += 'ma';
        }else{
            const sub = list[i].split('');
            sub.push(sub.shift()!);
            sub.push('ma');
            list[i] = sub.join('');
        }
        list[i] += 'a'.repeat(i+1)
    }
    return list.join(' ');
};
const set = new Set<string>([
    'a',
    'e',
    'i',
    'o',
    'u',
    'A',
    'E',
    'I',
    'O',
    'U'
])
function isVowel(s:string):boolean{
    return set.has(s);
}