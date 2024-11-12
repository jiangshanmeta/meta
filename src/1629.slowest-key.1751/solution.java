class Solution {
    public char slowestKey(int[] releaseTimes, String keysPressed) {
        char[] chars = keysPressed.toCharArray();
        char maxChar = 'a';
        int maxTime = 0;
        for(int i=0;i<releaseTimes.length;i++){
            int deltaT = i == 0? releaseTimes[0] : releaseTimes[i]-releaseTimes[i-1];
            if(deltaT>maxTime){
                maxTime = deltaT;
                maxChar = chars[i];
            }else if(deltaT == maxTime && chars[i]>maxChar){
                maxChar = chars[i];
            }
        }
        return maxChar;
    }
}