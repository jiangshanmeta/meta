/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function(cpdomains) {
    const hashMap = {};
    for(let i=0;i<cpdomains.length;i++){
        let pair = cpdomains[i];
        let spaceIndex = pair.indexOf(' ');
        let num = +pair.slice(0,spaceIndex);
        let domain = pair.slice(spaceIndex+1);
        
        if(hashMap[domain] === undefined){
            hashMap[domain] = num;
        }else{
            hashMap[domain] += num;
        }
        let dotIndex = domain.indexOf('.');
        while(dotIndex>-1){
            let superDomain = domain.slice(dotIndex+1);
            if(hashMap[superDomain] === undefined){
                hashMap[superDomain] = num;
            }else{
                hashMap[superDomain] += num;
            }
            dotIndex = domain.indexOf('.',dotIndex+1);
        }
    }
    
    return Object.keys(hashMap).map((domain)=>`${hashMap[domain]} ${domain}`);
};