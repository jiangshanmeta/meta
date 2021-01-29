/**
 * @param {number[]} digits
 * @return {string}
 */
var largestMultipleOfThree = function(digits) {
    const counts = new Array(10).fill(0);
    let sum = 0;
    for(let i=0;i<digits.length;i++){
        sum += digits[i];
        counts[digits[i]]++;
    }
    let onlyZero = true;
    for(let i=1;i<10;i++){
        if(counts[i]){
            onlyZero = false;
            break;
        }
    }
    if(onlyZero){
        return '0';
    }

    const totalMod = sum%3;

    if(totalMod === 1){
        let removed = false;
        for(let i=1;i<10;i+=3){
            if(counts[i]){
                counts[i]--;
                removed = true;
                break;
            }
        }
        if(!removed){
            let rest = 2;
            for(let i=2;i<10;i+=3){
                if(counts[i]>=rest){
                    counts[i] -= rest;
                    rest = 0;
                    break;
                }else if(counts[i]>0){
                    rest -= counts[i];
                    counts[i] = 0;
                }
            }
            if(rest>0){
                return '';
            }

        }

    }else if(totalMod === 2){
        let removed = false;
        for(let i=2;i<10;i+=3){
            if(counts[i]){
                counts[i]--;
                removed = true;
                break;
            }
        }
        if(!removed){
            let rest = 0;
            for(let i=1;i<10;i+=3){
                if(counts[i]>=rest){
                    counts[i] -= rest;
                    rest = 0;
                    break;
                }else if(counts[i]>0){
                    rest -= counts[i];
                    counts[i] = 0;
                }
            }
            if(rest>0){
                return ''
            }
        }

    }
    const result = [];
    for(let i=9;i>-1;i--){
        result.push(String(i).repeat(counts[i]))
    }
    return result.join('');
};