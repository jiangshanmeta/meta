/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    var arrs = Array.apply(null, {
        length: numRows,
    }).map(function () {
        return [];
    });

    var x = 0;
    var y = 0;
    var direction = 1;
    var strLen = s.length;
    var maxRow = numRows - 1;
    var item;
    for (var i = 0; i < strLen; i++) {
        item = s[i];
        arrs[x][y] = item;
        // 推算下一个的坐标
        if (x === maxRow) {
            direction = -1;
            y++;
            // 处理只有一行的情况
            if (x > 0) {
                x--;
            }
        } else if (x === 0 && direction === -1) {
            direction = 1;
            x++;
        } else {
            x += direction;
            if (direction === -1) {
                y++;
            }
        }
    }
    var strArr = arrs.reduce(function (arr, arrItem) {
        var fragment = arrItem.reduce(function (arr2, item) {
            if (item) {
                arr2.push(item);
            }
            return arr2;
        }, []).join('');

        arr.push(fragment);
        return arr;
    }, []);

    return strArr.join('');
};
