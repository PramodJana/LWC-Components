public with sharing class AccountController {
    @AuraEnabled(cacheable=true)
    public static List<Account> findAccounts(String searchKey){ 
            String key = '%'+searchKey+'%';
            return [Select Id, Name, AccountNumber FROM Account WHERE Name LIKE :key LIMIT 10];
            
}
}