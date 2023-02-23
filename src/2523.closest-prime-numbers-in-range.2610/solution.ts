const primes:number[] = [];

const primeFlags = new Array<boolean>(10 ** 6).fill(true);
for (let i = 2; i < primeFlags.length; i++) {
    if (primeFlags[i]) {
        primes.push(i);
    }

    for (let j = 2 * i; j < primeFlags.length; j += i) {
        primeFlags[j] = false;
    }
}

function closestPrimes (left: number, right: number): number[] {
    let low = 0;
    let high = primes.length;
    let firstIndex = primes.length;
    while (low <= high) {
        const mid = (low + high) >> 1;
        if (primes[mid] >= left) {
            firstIndex = Math.min(firstIndex, mid);
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    if (firstIndex === primes.length || firstIndex === primes.length - 1 || primes[firstIndex + 1] > right) {
        return [-1, -1, ];
    }
    let minDiff = right - left + 1;
    let rightIndex = firstIndex + 1;
    for (let i = firstIndex + 1; i < primes.length; i++) {
        if (primes[i] > right) {
            break;
        }
        if (primes[i] - primes[i - 1] < minDiff) {
            minDiff = primes[i] - primes[i - 1];
            rightIndex = i;
        }
    }

    return [primes[rightIndex - 1], primes[rightIndex], ];
}
