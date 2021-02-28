function largestMerge(word1: string, word2: string): string {
    const result:string[] = [];
    let index1 = 0;
    let index2 = 0;
    while(index1<word1.length && index2<word2.length){
        if(word1[index1]>word2[index2]){
            result.push(word1[index1++]);
        }else if(word2[index2]>word1[index1]){
            result.push(word2[index2++]);
        }else {
            let index3 = index1+1;
            let index4 = index2+1;
            while(index3<word1.length && index4<word2.length && word1[index3] === word2[index4]){
                index3++;
                index4++;
            }
            if(index3<word1.length && index4<word2.length){
                if(word1[index3]>word2[index4]){
                    result.push(word1[index1++]);
                }else{
                    result.push(word2[index2++]);
                }
            }else if(index3<word1.length){
                result.push(word1[index1++]);
            }else{
                result.push(word2[index2++]);
            }

        }
    }
    
    if(index1<word1.length){
        result.push(word1.slice(index1));
    }
    if(index2<word2.length){
        result.push(word2.slice(index2));
    }
    return result.join('');
};