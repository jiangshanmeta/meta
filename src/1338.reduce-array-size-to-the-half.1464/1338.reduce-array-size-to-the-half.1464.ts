function minSetSize(arr: number[]): number {
    const map:{
        [x:number]:number
    } = {};

    for(let i=0;i<arr.length;i++){
        map[arr[i]] = (map[arr[i]] || 0)+1;
    }

    const seq = Object.values(map).sort((a,b)=>b-a);

    let result = 0;
    let count = 0;
    let index = 0;
    while(count<arr.length/2){
        count += seq[index++];
        result++;
    }
    return result;
};