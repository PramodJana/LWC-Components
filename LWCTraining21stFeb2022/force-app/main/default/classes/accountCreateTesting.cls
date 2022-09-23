public class accountCreateTesting {
public Account acc;
public accountCreateTesting(apexPages.StandardController std)
{
	  acc =(Account)std.getRecord();
}
    public PageReference Save(){
        Integer Count = [select count() from Account where name=:acc.Name];
        if(count>0)
        {
         ApexPages.addMessage(new ApexPages.Message(ApexPages.Severity.ERROR,'Duplicate Account Record Found'));   
        
        }
        else
        {
            insert acc;
            PageReference p= new PageReference('/'+acc.Id);
            return p;
        }
        return null;
        
    }
}