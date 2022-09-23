public class MyHelloWorld {
    //public String currentRecordId {get;set;}
    public static void applyDiscount(Book__c[] books){
        for(Book__c b : books){
           // currentRecordId = ApexPages.CurrentPage().getparameters().get('id');
            b.Price__c*=0.9;
           // List<Book__c> bk=[select Id from Book__c where id:=currentRecordId];
        }
    }
}