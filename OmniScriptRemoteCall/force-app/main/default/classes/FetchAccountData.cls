global without sharing class FetchAccountData implements vlocity_cmt.VlocityOpenInterface {
    
    global Boolean invokeMethod(String methodName, Map<String,Object> input, Map<String,Object> output, Map<String,Object> options) {

        if (methodName == 'fetchData') {
            fetchData(input, output, options);
        }
        else if(methodName == 'fetchAccountIndustry')
        {
            fetchAccountIndustry(input, output, options);
        }

        return true;
    }

    public static String fetchData(Map<String, Object> input, Map<String,Object> output, Map<String,Object> options)
    {
        Account acc =  new Account();
        acc = [select id, name from Account limit 1];
        output.put('Data Returned',acc);
        return 'Succesfully called';
    }

    public static String fetchAccountIndustry(Map<String, Object> input, Map<String,Object> output, Map<String,Object> options)
    {
        List<String> pickListValuesList= new List<String>();
        Schema.DescribeFieldResult fieldResult = Account.Industry.getDescribe();
        List<Schema.PicklistEntry> ple = fieldResult.getPicklistValues();
        for( Schema.PicklistEntry pickListVal : ple){
            pickListValuesList.add(pickListVal.getLabel());
        }     
        output.put('AccountIndustry',pickListValuesList);
        return '';
    }

    global class FetchAccountDataException extends Exception{}
}