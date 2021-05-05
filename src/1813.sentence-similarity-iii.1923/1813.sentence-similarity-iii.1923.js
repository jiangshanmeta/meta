/**
 * @param {string} sentence1
 * @param {string} sentence2
 * @return {boolean}
 */
var areSentencesSimilar = function (sentence1, sentence2) {
    let list1 = sentence1.split(' ');
    let list2 = sentence2.split(' ');
    if (list1.length < list2.length) {
        const tmp = list1;
        list1 = list2;
        list2 = tmp;
    }
    if (list1.length === list2.length) {
        return isSame(list1, list2);
    }
    if (matchEnd(list1, list2)) {
        return true;
    }
    const left1 = 0;
    let left2 = 0;
    while (left2 < list2.length && list1[left2] === list2[left2]) {
        left2++;
    }
    if (left2 === list2.length) {
        return true;
    }

    let right1 = list1.length - 1;
    let right2 = list2.length - 1;
    while (right2 >= left2 && list1[right1] === list2[right2]) {
        right1--;
        right2--;
    }

    return right2 < left2;
};

function isSame (list1, list2) {
    for (let i = 0; i < list1.length; i++) {
        if (list1[i] !== list2[i]) {
            return false;
        }
    }
    return true;
}

// function matchStart(list1,list2){
//     for(let i=0;i<list2.length;i++){
//         if(list1[i] !== list2[i]){
//             return false;
//         }
//     }
//     return true;
// }

function matchEnd (list1, list2) {
    let index1 = list1.length - 1;
    let index2 = list2.length - 1;
    while (index2 > -1) {
        if (list1[index1] !== list2[index2]) {
            return false;
        }
        index1--;
        index2--;
    }
    return true;
}
