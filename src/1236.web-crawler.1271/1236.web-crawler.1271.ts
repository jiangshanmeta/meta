/**
 * // This is the HtmlParser's API interface.
 * // You should not implement it, or speculate about its implementation
 * class HtmlParser {
 *      getUrls(url: string): string[] {}
 * }
 */

function crawl (startUrl: string, htmlParser: HtmlParser): string[] {
    const domain = parseDomain(startUrl);
    const set = new Set<string>();
    set.add(startUrl);
    const stack = [startUrl, ];
    while (stack.length) {
        const node = stack.pop();
        const urls = htmlParser.getUrls(node);
        for (let i = 0; i < urls.length; i++) {
            const domainI = parseDomain(urls[i]);
            if (domainI !== domain) {
                continue;
            }
            if (set.has(urls[i])) {
                continue;
            }
            stack.push(urls[i]);
            set.add(urls[i]);
        }
    }
    return [...set, ];
}

function parseDomain (str:string) {
    const index = str.indexOf('/', 8);
    if (index === -1) {
        return str;
    }
    return str.slice(0, index);
}
