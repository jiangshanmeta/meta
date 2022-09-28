/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @param {string[][]} pairs
 * @return {boolean}
 */
var areSentencesSimilarTwo = function (words1, words2, pairs) {
    if (words1.length !== words2.length) {
        return false;
    }

    const map = {};
    for (let [a, b, ] of pairs) {
        if (!map[a]) {
            map[a] = a;
        }
        if (!map[b]) {
            map[b] = b;
        }
        let parentA = map[a];
        let parentB = map[b];
        while (map[parentA] !== parentA) {
            parentA = map[parentA];
        }
        while (map[parentB] !== parentB) {
            parentB = map[parentB];
        }
        if (parentA !== parentB) {
            if (parentA < parentB) {
                map[parentB] = parentA;
            } else {
                map[parentA] = parentB;
            }
        }
        const commonParent = map[parentA];
        while (a !== map[a]) {
            const next = map[a];
            map[a] = commonParent;
            a = next;
        }
        while (b !== map[b]) {
            const next = map[b];
            map[b] = commonParent;
            b = next;
        }
    }

    Object.keys(map).forEach((a) => {
        let node = a;
        while (node !== map[node]) {
            node = map[node];
        }
        while (a !== map[a]) {
            const next = map[a];
            map[a] = node;
            a = next;
        }
    });

    for (let i = 0; i < words1.length; i++) {
        if (words1[i] === words2[i]) {
            continue;
        }
        if (map[words1[i]] && map[words2[i]] && map[words1[i]] === map[words2[i]]) {
            continue;
        }
        return false;
    }

    return true;
};
