/**
 * @param {number} num
 * @return {string[]}
 */
var readBinaryWatch = function (num) {
    function getHourCandidate (maxCount) {
        const hours = [
            8, 4, 2, 1, ];
        function backTracking (hour, count, start, sequence, hours) {
            if (hour > 11) {
                return;
            }

            if (count === maxCount) {
                return sequence.push(hour);
            }

            for (let i = start; i < hours.length; i++) {
                backTracking(hour + hours[i], count + 1, i + 1, sequence, hours);
            }
        }
        const sequence = [];
        backTracking(0, 0, 0, sequence, hours);
        return sequence;
    }

    function getMinuteCandidate (maxCount) {
        const minutes = [
            32, 16, 8, 4, 2, 1, ];
        function backTracking (minute, count, start, sequence, minutes) {
            if (minute > 59) {
                return;
            }

            if (count === maxCount) {
                return sequence.push(minute < 10 ? '0' + minute : minute);
            }

            for (let i = start; i < minutes.length; i++) {
                backTracking(minute + minutes[i], count + 1, i + 1, sequence, minutes);
            }
        }

        const sequence = [];
        backTracking(0, 0, 0, sequence, minutes);
        return sequence;
    }

    const result = [];
    for (let i = 0; i < Math.min(4, num + 1); i++) {
        const candidateHour = getHourCandidate(i);
        const candidateMinute = getMinuteCandidate(num - i);

        for (let i = 0; i < candidateHour.length; i++) {
            for (let j = 0; j < candidateMinute.length; j++) {
                result.push('' + candidateHour[i] + ':' + candidateMinute[j]);
            }
        }
    }
    return result;
};
