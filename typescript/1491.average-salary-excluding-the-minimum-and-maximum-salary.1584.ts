function average(salary: number[]): number {
    let maxVal:number = salary[0];
    let minVal:number = salary[0];
    let sum:number = salary[0];
    for(let i=1;i<salary.length;i++){
        sum += salary[i];
        maxVal = Math.max(salary[i],maxVal);
        minVal = Math.min(salary[i],minVal);
    }
    return (sum-maxVal-minVal)/(salary.length-2);
};