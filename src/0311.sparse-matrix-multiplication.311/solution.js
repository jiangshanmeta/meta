/**
 * @param {number[][]} mat1
 * @param {number[][]} mat2
 * @return {number[][]}
 */
var multiply = function (mat1, mat2) {
    const M = mat1.length;
    const N = mat2[0].length;
    const result = new Array(M);
    const mat1Datas = new Array(M);
    const mat1Indexs = new Array(M);
    for (let i = 0; i < mat1.length; i++) {
        const datas = [];
        const indexs = [];
        for (let j = 0; j < mat1[i].length; j++) {
            if (mat1[i][j] === 0) {
                continue;
            }
            datas.push(mat1[i][j]);
            indexs.push(j);
        }
        mat1Datas[i] = datas;
        mat1Indexs[i] = indexs;
    }
    const mat2Datas = new Array(N);
    const mat2Indexs = new Array(N);
    for (let j = 0; j < N; j++) {
        const datas = [];
        const indexs = [];
        for (let i = 0; i < mat2.length; i++) {
            if (mat2[i][j] === 0) {
                continue;
            }
            datas.push(mat2[i][j]);
            indexs.push(i);
        }
        mat2Datas[j] = datas;
        mat2Indexs[j] = indexs;
    }

    for (let i = 0; i < M; i++) {
        result[i] = new Array(N);
        for (let j = 0; j < N; j++) {
            result[i][j] = calc(mat1Datas[i], mat1Indexs[i], mat2Datas[j], mat2Indexs[j]);
        }
    }

    return result;
};

function calc (datas1, indexs1, datas2, indexs2) {
    let result = 0;
    let index1 = 0;
    let index2 = 0;
    while (index1 < datas1.length && index2 < datas2.length) {
        if (indexs1[index1] < indexs2[index2]) {
            index1++;
        } else if (indexs1[index1] > indexs2[index2]) {
            index2++;
        } else {
            result += datas1[index1++] * datas2[index2++];
        }
    }
    return result;
}
