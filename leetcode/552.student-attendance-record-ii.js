/**
 * @param {number} n
 * @return {number}
 */
// 动态规划
var checkRecord = function(n) {
    // P表示结尾为P的数量 L1表示结尾为最多一个L的数量 L2表示结尾为两个L的数量
    // A表示结尾为A的数量 
    // 前缀为pure的是不含A的数量
    // newP = P+L1+L2+A (所有的都可以在末尾添加P进行拓展)
    // newL1 = P+A (L1添加L变为L2 L2添加L违法)
    // newL2 = L1(只有L1添加L才能变为L2)
    // newA = pureP+pureL1+pureL2 (不含A的添加A变为结尾是A的)
    let P = 1;
    let L1 = 1;
    let L2 = 0;
    let A = 1;
    let pureP = 1;
    let pureL1 = 1;
    let pureL2 = 0;
    const mod = 10**9+7;
    
    for(let i=2;i<n+1;i++){
        const newP = (P+L1+L2+A)%mod;
        const newL1 = (P+A)%mod;
        const newL2 = L1;
        const newA = (pureP+pureL1+pureL2)%mod;
        
        P = newP;
        L1 = newL1;
        L2 = newL2;
        A = newA;
        
        const newPureP = (pureP+pureL1+pureL2)%mod;
        const newPureL1 = pureP;
        const newPureL2 = pureL1;
        
        pureP = newPureP;
        pureL1 = newPureL1;
        pureL2 = newPureL2;
    }
    // console.log(P,L1,L2,A)
    return (P+L1+L2+A)%(10**9+7);
};