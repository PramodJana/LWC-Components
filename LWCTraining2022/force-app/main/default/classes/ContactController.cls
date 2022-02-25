public with sharing class ContactController {
    @AuraEnabled(cacheable=true)
    public static List<Contact> getContacts(){
        return [SELECT Id, Name, Title,Email, Phone FROM Contact ORDER BY Name LIMIT 10];
    }

    @AuraEnabled(cacheable=true)
    public static List<Contact> getLocations(){
        return [SELECT Name, MailingCity, MailingCountry
                    FROM Contact
                    WHERE MailingCity!=null AND MailingCountry!=null
                    LIMIT 10];
    }
}
