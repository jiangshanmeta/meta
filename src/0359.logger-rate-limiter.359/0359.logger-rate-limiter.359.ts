class Logger {
    map = new Map<string, number>()
    constructor () {

    }

    shouldPrintMessage (timestamp: number, message: string): boolean {
        if (this.map.has(message)) {
            const last = this.map.get(message);
            if (last > timestamp - 10) {
                return false;
            }
            this.map.set(message, timestamp);
            return true;
        } else {
            this.map.set(message, timestamp);
            return true;
        }
    }
}

/**
 * Your Logger object will be instantiated and called as such:
 * var obj = new Logger()
 * var param_1 = obj.shouldPrintMessage(timestamp,message)
 */
