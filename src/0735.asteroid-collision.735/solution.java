class Solution {
    public int[] asteroidCollision(int[] asteroids) {
        int[] result = new int[asteroids.length];
        int index = 0;
        for (int asteroid : asteroids) {
            if (asteroid > 0) {
                result[index++] = asteroid;
            } else {

                while (index > 0 && result[index - 1] > 0 && result[index - 1] < -asteroid) {
                    index--;
                }
                if(index == 0){
                    result[index++] = asteroid;
                }else if(result[index-1] == -asteroid){
                    index--;
                }else if(result[index-1]<0){
                    result[index++] = asteroid;
                }

            }
        }
        int[] realResult = new int[index];
        System.arraycopy(result,0,realResult,0,index);
        return realResult;
    }
}