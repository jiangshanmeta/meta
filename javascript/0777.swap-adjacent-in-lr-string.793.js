/**
 * @param {string} start
 * @param {string} end
 * @return {boolean}
 */
var canTransform = function (start, end) {
    let index1 = 0;
    let index2 = 0;
    while (index2 < end.length) {
        let rCount1 = 0;
        let lCount2 = 0;
        let rCount2 = 0;

        // 从end向start看 R只能左移 L只能右移
        while (index2 < end.length) {
            if (end[index2] === 'R') {
                rCount2++;
                break;
            } else if (end[index2] === 'L') {
                lCount2++;
                break;
            }
            index2++;
        }

        if (rCount2 === 1) {
            // 对于R的情况，在start未匹配位置向后找第一个R匹配，中间不能有L
            while (index1 < index2 + 1) {
                if (start[index1] === 'L') {
                    return false;
                } else if (start[index1] === 'R') {
                    rCount1++;
                    break;
                }
                index1++;
            }
            // start没有在左侧(含当前位置)的R
            if (rCount1 === 0) {
                return false;
            }
            index1++;
            index2++;
        } else if (lCount2 === 1) {
            // L的情况是看start对应位置右侧是否有匹配

            // start对应位置左侧未匹配区域只能有X
            while (index1 < index2) {
                if (start[index1++] !== 'X') {
                    return false;
                }
            }
            // 尝试进行匹配
            while (index1 < start.length) {
                if (start[index1] === 'R') {
                    return false;
                }
                if (start[index1] === 'L') {
                    break;
                }
                index1++;
            }
            // start找到最后也没找到对应的L
            if (index1 === start.length) {
                return false;
            }
            index1++;
            index2++;
        } else {
            // end只剩下X 意味着匹配到结束，start剩余位置也应只有X
            while (index1 < index2) {
                if (start[index1++] !== 'X') {
                    return false;
                }
            }
        }
    }
    return true;
};
