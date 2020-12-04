/**
 * @param {string[]} source
 * @return {string[]}
 */
var removeComments = function (source) {
    const result = [];
    let i = 0;
    while (i < source.length) {
        const line = source[i];
        let j = 0;
        let comment = false;
        while (j < line.length - 1) {
            if (line[j] === '/') {
                // 是行注释 //
                if (line[j + 1] === '/') {
                    comment = true;
                    j > 0 && result.push(line.substring(0, j));
                    i++;
                    break;
                } else if (line[j + 1] === '*') {
                    // 块注释
                    comment = true;
                    const rest1 = line.substring(0, j);

                    const index = line.indexOf('*/', j + 2);
                    let rest2 = '';
                    // 块注释也可能是在同一行
                    if (index !== -1) {
                        rest2 = line.substring(index + 2);
                    } else {
                        // 块注释在不同行
                        i++;
                        while (source[i].indexOf('*/') === -1) {
                            i++;
                        }
                        const index = source[i].indexOf('*/');
                        rest2 = source[i].substring(index + 2);
                    }

                    if (rest1 || rest2) {
                        // 块注释后面可能还有其他注释
                        //   /*comment*/code //line comment
                        // 所以要覆盖source[i]再处理一遍
                        source[i] = `${rest1}${rest2}`;
                    } else {
                        i++;
                    }
                    break;
                }
            }
            j++;
        }
        if (!comment) {
            result.push(line);
            i++;
        }
    }
    return result;
};
