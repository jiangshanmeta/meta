function maxNumberOfBalloons(text: string): number {
    let b = 0;
    let a = 0;
    let l = 0;
    let o = 0;
    let n = 0;
    for(let i=0;i<text.length;i++){
        if(text[i] === 'b'){
            b++;
        }else if(text[i] === 'a'){
            a++;
        }else if(text[i] === 'l'){
            l++;
        }else if(text[i] === 'o'){
            o++;
        }else if(text[i] === 'n'){
            n++;
        }
    }
    return Math.min(b,a,l>>1,o>>1,n);
};