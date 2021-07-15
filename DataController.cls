public with sharing class DataController {
    @AuraEnabled(cacheable = true)
    public static List<Contact> getContactList(){
        try {
            return [SELECT Id, Name FROM Contact];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }

    @AuraEnabled(cacheable = true)
    public static List<Account> getAccountList(){
        try {
            return [Select Id, Name from Account];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}
