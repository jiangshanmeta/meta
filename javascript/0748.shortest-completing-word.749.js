/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */

function countByLetter (word) {
    const map = {};
    for (let i = 0; i < word.length; i++) {
        if (map[word[i]] === undefined) {
            map[word[i]] = 1;
        } else {
            map[word[i]]++;
        }
    }
    return map;
}

function match (word, licenceMap, letters) {
    const map = countByLetter(word);
    for (let i = 0; i < letters.length; i++) {
        const letter = letters[i];
        if (map[letter] === undefined || map[letter] < licenceMap[letter]) {
            return false;
        }
    }
    return true;
}

var shortestCompletingWord = function (licensePlate, words) {
    licensePlate = licensePlate.toLowerCase().replace(/[^a-z]/g, '');
    const licenseMap = countByLetter(licensePlate);
    const licenseLetters = Object.keys(licenseMap);

    const groupByLength = words.reduce((map, word) => {
        const length = word.length;
        if (length < licensePlate.length) {
            return map;
        }
        if (map[length] === undefined) {
            map[length] = [
                word, ];
        } else {
            map[length].push(word);
        }
        return map;
    }, {});

    const lengths = Object.keys(groupByLength).sort((a, b) => a - b);

    for (let i = 0; i < lengths.length; i++) {
        const words2 = groupByLength[lengths[i]];
        for (let j = 0; j < words2.length; j++) {
            if (match(words2[j], licenseMap, licenseLetters)) {
                return words2[j];
            }
        }
    }
};
