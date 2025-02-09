class Solution {
    public String complexNumberMultiply(String num1, String num2) {
        int[] n1 = parse(num1);
        int[] n2 = parse(num2);
        int a = n1[0];
        int b = n1[1];
        int c = n2[0];
        int d = n2[1];

        int real = a*c-b*d;
        int fake = a*d+b*c;

        
        return String.valueOf(real)+"+"+String.valueOf(fake)+"i";
    }

    private int[] parse(String num){
        int index = num.indexOf("+");
        int a =  Integer.parseInt(num.substring(0,index));
        int b = Integer.parseInt(num.substring(index+1,num.length()-1 ));

        return new int[]{a,b};
    }
}