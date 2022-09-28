/**
 * @param {string} title
 * @return {string}
 */
var capitalizeTitle = function (title) {
    const setence = title.split(' ');
    return setence.map((word) => {
        if (word.length < 3) {
            return word.toLowerCase();
        }
        return word[0].toUpperCase() + word.slice(1).toLowerCase();
    }).join(' ');
};
