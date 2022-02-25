public with sharing class ContactController {
    @AuraEnabled(cacheable=true)
    public static List<Contact> getContacts(){
        return [SELECT Id, Name, Title,Email, Phone FROM Contact ORDER BY Name LIMIT 10];
    }
}