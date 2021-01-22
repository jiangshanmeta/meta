function numberOfLines(widths: number[], s: string): number[] {
    let result = 1;
    let row = 0;
    for(let i=0;i<s.length;i++){
        const w = widths[s.charCodeAt(i)-97];
        if(row+w>100){
            result++;
            row = w;
        }else{
            row += w;
        }
    }
    return [
        result,
        row,
    ]
};