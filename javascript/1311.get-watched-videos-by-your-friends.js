/**
 * @param {string[][]} watchedVideos
 * @param {number[][]} friends
 * @param {number} id
 * @param {number} level
 * @return {string[]}
 */
var watchedVideosByFriends = function(watchedVideos, friends, id, level) {
    const N = watchedVideos.length;
    const visited = new Array(N).fill(false);
    visited[id] = true;
    const levelFriends = getFriends(level,[id],friends,visited);
    // 计数
    const videoCountMap = {};
    for(let i=0;i<levelFriends.length;i++){
        const videos = watchedVideos[levelFriends[i]];
        for(let j=0;j<videos.length;j++){
            const video = videos[j];
            videoCountMap[video] = (videoCountMap[video] || 0)+1;
        }
    }
    
    // 排序
    return Object.keys(videoCountMap).sort((a,b)=>{
        if(videoCountMap[a] !== videoCountMap[b]){
            return videoCountMap[a]-videoCountMap[b];
        }
        
        return a<b?-1:1;
    });
};
// BFS找到level阶的朋友
function getFriends(level,lastLevelFriends,friends,visited){
    if(level === 0){
        return lastLevelFriends;
    }
    const nextLevelFriends = [];
    for(let i=0;i<lastLevelFriends.length;i++){
        const id = lastLevelFriends[i];
        for(let j=0;j<friends[id].length;j++){
            if(!visited[friends[id][j]]){
                visited[friends[id][j]] = true;
                nextLevelFriends.push(friends[id][j]);
            }
        }
    }
    
    
    return getFriends(level-1,nextLevelFriends,friends,visited);
}