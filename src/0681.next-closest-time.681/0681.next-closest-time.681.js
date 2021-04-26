/**
 * @param {string} time
 * @return {string}
 */
var nextClosestTime = function (time) {
    const candidates = [...new Set([+time[0], +time[1], +time[3], +time[4], ]), ];
    if (candidates.length === 1) {
        return time;
    }
    const baseTime = (+time.slice(0, 2)) * 60 + (+time.slice(3));
    const times = [];
    backTracking(candidates, [], times);
    let minDiff = Infinity;
    let resultTime = '';
    for (let i = 0; i < times.length; i++) {
        if (!isValid(times[i])) {
            continue;
        }
        let ts = getTime(times[i]);
        if (ts === baseTime) {
            continue;
        }
        if (ts < baseTime) {
            ts += 24 * 60;
        }
        const diff = ts - baseTime;
        if (diff < minDiff) {
            minDiff = diff;
            resultTime = times[i];
        }
    }
    return `${resultTime.slice(0, 2)}:${resultTime.slice(2)}`;
};

function isValid (time) {
    if (+time[0] > 2) {
        return false;
    }
    if (time[0] === '2' && +time[1] > 3) {
        return false;
    }
    if (+time[2] > 5) {
        return false;
    }
    return true;
}

function getTime (time) {
    return (+time.slice(0, 2)) * 60 + (+time.slice(2));
}

function backTracking (candidates, sequence, result) {
    if (sequence.length === 4) {
        result.push(sequence.join(''));
        return;
    }
    for (let i = 0; i < candidates.length; i++) {
        sequence.push(candidates[i]);
        backTracking(candidates, sequence, result);
        sequence.pop();
    }
}
