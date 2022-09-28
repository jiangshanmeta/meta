/**
 * @param {string} startUrl
 * @param {HtmlParser} htmlParser
 * @return {string[]}
*/
var crawl = function (startUrl, htmlParser) {
    const set = new Set();
    const domain = getDomain(startUrl);
    // const result = [startUrl];
    set.add(startUrl);
    const stack = [startUrl, ];
    while (stack.length) {
        const node = stack.pop();
        const relateNodes = htmlParser.getUrls(node);
        for (const url of relateNodes) {
            if (getDomain(url) !== domain) {
                continue;
            }
            if (set.has(url)) {
                continue;
            }
            set.add(url);
            stack.push(url);
        }
    }
    return [...set, ];
};

function getDomain (url) {
    const endIndex = url.indexOf('/', 7);
    if (endIndex === -1) {
        return url;
    }
    return url.slice(0, endIndex);
}
