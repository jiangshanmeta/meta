function candy(ratings: number[]): number {
    const left:number[] = new Array(ratings.length);
    for(let i=0;i<ratings.length;i++){
        if(i>0 && ratings[i]>ratings[i-1]){
            left[i] = left[i-1]+1;
        }else{
            left[i] = 1;
        }
    }
    let result = 0;
    let right = 0;
    for(let i=ratings.length-1;i>-1;i--){
        if(i<ratings.length-1 && ratings[i+1]<ratings[i]){
            right++;
        }else{
            right = 1;
        }
        result += Math.max(right,left[i]);
    }
    return result
};