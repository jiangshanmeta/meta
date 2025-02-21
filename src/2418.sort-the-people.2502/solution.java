class Solution {
    public String[] sortPeople(String[] names, int[] heights) {
        Item[] items = new Item[names.length];
        for(int i=0;i<names.length;i++){
            items[i] = new Item(names[i],heights[i]);
        }
        Arrays.sort(items,(a,b)->b.height-a.height);

        for(int i=0;i< items.length;i++){
            names[i] = items[i].name;
        }
        return names;
    }

    private static record Item(String name, int height){

    }
}