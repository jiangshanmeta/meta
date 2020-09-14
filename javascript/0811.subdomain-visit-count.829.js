/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function (cpdomains) {
    const hashMap = {};
    for (let i = 0; i < cpdomains.length; i++) {
        const pair = cpdomains[i];
        const spaceIndex = pair.indexOf(' ');
        const num = +pair.slice(0, spaceIndex);
        const domain = pair.slice(spaceIndex + 1);

        if (hashMap[domain] === undefined) {
            hashMap[domain] = num;
        } else {
            hashMap[domain] += num;
        }
        let dotIndex = domain.indexOf('.');
        while (dotIndex > -1) {
            const superDomain = domain.slice(dotIndex + 1);
            if (hashMap[superDomain] === undefined) {
                hashMap[superDomain] = num;
            } else {
                hashMap[superDomain] += num;
            }
            dotIndex = domain.indexOf('.', dotIndex + 1);
        }
    }

    return Object.keys(hashMap).map((domain) => `${hashMap[domain]} ${domain}`);
};
