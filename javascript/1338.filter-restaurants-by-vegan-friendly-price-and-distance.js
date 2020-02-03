/**
 * @param {number[][]} restaurants
 * @param {number} veganFriendly
 * @param {number} maxPrice
 * @param {number} maxDistance
 * @return {number[]}
 */
var filterRestaurants = function(restaurants, veganFriendly, maxPrice, maxDistance) {
    return restaurants.filter(([id,rating,veganFriendlyi,price,distance])=>{
        if(veganFriendly && !veganFriendlyi){
            return false;
        }
        return price<=maxPrice && distance<=maxDistance;
    }).sort((a,b)=>{
        if(a[1] !== b[1]){
            return b[1]-a[1];
        }
        return b[0]-a[0];
    }).map(item=>item[0]);
};