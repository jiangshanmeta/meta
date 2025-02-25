class Solution {
    private static int tenThousand = 10000;
    private static long billion = 1000000000;
    public String categorizeBox(int length, int width, int height, int mass) {
        boolean bulky = isBulky(length,width,height,mass);
        boolean heavy = mass>=100;

        if(bulky && heavy){
            return "Both";
        }
        if(bulky){
            return "Bulky";
        }
        if(heavy){
            return "Heavy";
        }
        return "Neither";
    }

    private boolean isBulky(int length, int width, int height, int mass){
        return (length>=tenThousand || width>=tenThousand || height>=tenThousand || mass>=tenThousand) || (long)length*height*width>=billion;
    }
}