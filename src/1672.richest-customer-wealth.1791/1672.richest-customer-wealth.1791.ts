function maximumWealth(accounts: number[][]): number {
    let result = 0;
    for(let i=0;i<accounts.length;i++){
        let sum = 0;
        for(let j=0;j<accounts[i].length;j++){
            sum += accounts[i][j];
        }
        result = Math.max(result,sum);
    }
    return result;
};