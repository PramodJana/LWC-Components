public class SalesforceConnect1 {
public static void getCasesFromSalesforceOrgB(){
        Http http = new Http();
        HttpRequest request = new HttpRequest();
        request.setEndpoint('callout:SFDCB/services/apexrest/Cases');
       	request.setMethod('GET');
        HttpResponse response = http.send(request);
    	// If the request is successful, parse the JSON response.
        if (response.getStatusCode() == 200) {
//            system.debug(response.getBody());
  List<Object> results = (List<Object>)JSON.deserializeUntyped(response.getBody());
            for(Object result : results){
                Map<String, Object> caseProps = (Map<String,Object>)result;
                System.debug('CaseNumber: '+caseProps.get('CaseNumber')+' - Subject: '+caseProps.get('Subject'));
            }
        }
    }
    
    public static void createCasesInSalesforceOrgB(){
        Http http = new Http();
        HttpRequest request = new HttpRequest();
        request.setEndpoint('callout:SFDCB/services/apexrest/Cases');
       	request.setMethod('POST');
        request.setHeader('Content-Type', 'application/json;charset=UTF-8');
        request.setBody('{"subject":"Case from Salesforce Org A","status":"New","origin":"Web","priority":"Medium"}');
        
        HttpResponse response = http.send(request);
    	// If the request is successful, parse the JSON response.
    	system.debug(response.getBody());
        if (response.getStatusCode() == 200) {
            system.debug(response.getBody());
   }
        }
}