/**
 * @param {number} n
 * @param {number[][]} languages
 * @param {number[][]} friendships
 * @return {number}
 */
var minimumTeachings = function (n, languages, friendships) {
    const sets = languages.map((lang) => {
        return new Set(lang);
    });
    const unrelatePeople = friendships.filter(([a, b, ]) => {
        if (hasCommon(sets[a - 1], sets[b - 1])) {
            return false;
        }
        return true;
    });

    const peopleSet = new Set();
    const langCounts = new Array(n + 1).fill(0);
    unrelatePeople.forEach(([a, b, ]) => {
        if (!peopleSet.has(a)) {
            peopleSet.add(a);
            for (const lang of sets[a - 1]) {
                langCounts[lang]++;
            }
        }
        if (!peopleSet.has(b)) {
            peopleSet.add(b);
            for (const lang of sets[b - 1]) {
                langCounts[lang]++;
            }
        }
    });
    const maxCount = Math.max(...langCounts);
    return peopleSet.size - maxCount;
};

function hasCommon (set1, set2) {
    for (const lang of set1) {
        if (set2.has(lang)) {
            return true;
        }
    }
    return false;
}
