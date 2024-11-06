class Solution {
    public void merge(int[] A, int m, int[] B, int n) {
        int c = A.length-1;
        int mm = m-1;
        while (mm>-1){
            A[c--] = A[mm--];
        }
        int i = 0;
        c++;
        int d = 0;
        while(c<A.length && d<B.length){
            if(A[c]<B[d]){
                A[i++] = A[c++];
            }else{
                A[i++] = B[d++];
            }
        }
        while(d<B.length){
            A[i++] = B[d++];
        }

    }
}