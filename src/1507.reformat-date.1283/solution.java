class Solution {
    public String reformatDate(String date) {
        String[] ss = date.split(" ");

        Map<String,String> monthMap = Map.ofEntries(
                Map.entry("Jan","01"),
                Map.entry("Feb","02"),
                Map.entry("Mar","03"),
                Map.entry("Apr","04"),
                Map.entry("May","05"),
                Map.entry("Jun","06"),

                Map.entry("Jul","07"),
                Map.entry("Aug","08"),
                Map.entry("Sep","09"),
                Map.entry("Oct","10"),
                Map.entry("Nov","11"),
                Map.entry("Dec","12")
        );

        String year = ss[2];
        String month = monthMap.get(ss[1]);
        String day = parseDay(ss[0]);

        return year + "-" + month + "-" +day;
    }
    
    private String parseDay(String input){
        char a = input.charAt(1);
        if(a>='0' && a<='9'){
            return input.substring(0,2);
        }
        return "0"+input.charAt(0);
    }
}