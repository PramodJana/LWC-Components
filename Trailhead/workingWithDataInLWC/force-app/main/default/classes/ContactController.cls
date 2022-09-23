public with sharing class ContactController {
    @AuraEnabled(cacheable=true)
    public static List<Contact> getContacts(){

    return[select Id, Name, FirstName, LastName, Email 
    from Contact
    WITH SECURITY_ENFORCED
    ORDER bY Name];
//  throw new AuraHandledException('Forced error');
    }
}
