class Solution {
    public int[] reverseBookList(ListNode head) {
        List<Integer> list = new ArrayList<>();
        while (head != null){
            list.add(head.val);
            head = head.next;
        }
        int[] result = list.stream().mapToInt(s->s).toArray();
        int l = 0;
        int r = result.length-1;
        while(l<r){
            int tmp = result[l];
            result[l] = result[r];
            result[r] = tmp;
            l++;
            r--;
        }
        return result;
    }
}