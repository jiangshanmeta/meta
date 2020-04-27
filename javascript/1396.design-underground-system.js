
var UndergroundSystem = function() {
    this.process = {};
    this.cacheTime = {};
    this.cacheCount = {};
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkIn = function(id, stationName, t) {
    this.process[id] = {
        stationName,
        t,
    }
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkOut = function(id, stationName, t) {
    const {
        stationName:startStation,
        t:startT,
    } = this.process[id];
    const key = `${startStation},${stationName}`;
    const T = t-startT;

    this.cacheTime[key] = (this.cacheTime[key] || 0)+T;
    this.cacheCount[key] = (this.cacheCount[key] || 0)+1;
};

/** 
 * @param {string} startStation 
 * @param {string} endStation
 * @return {number}
 */
UndergroundSystem.prototype.getAverageTime = function(startStation, endStation) {
    const key = `${startStation},${endStation}`;
    return this.cacheTime[key]/this.cacheCount[key];
};