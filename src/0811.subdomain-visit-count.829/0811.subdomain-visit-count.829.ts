function subdomainVisits (cpdomains: string[]): string[] {
    const map = new Map<string, number>();
    for (let i = 0; i < cpdomains.length; i++) {
        const infos = cpdomains[i].split(' ');
        const count = +infos[0];
        const domainList = infos[1].split('.');
        while (domainList.length) {
            const domain = domainList.join('.');
            map.set(domain, map.has(domain) ? map.get(domain) + count : count);
            domainList.shift();
        }
    }

    const result:string[] = [];
    for (const [domain, count, ] of map) {
        result.push(`${count} ${domain}`);
    }
    return result;
}
