import {
    LightningElement,
    wire
} from 'lwc';
import getContactList from '@salesforce/apex/DataController.getContactList';
import getAccountList from '@salesforce/apex/DataController.getAccountList';
export default class PaginationDemo extends LightningElement {
    totalContacts;
    visibleContacts;

    totalAccounts;
    visibleAccounts;

    @wire(getAccountList)
    wiredAccount({
        error,
        data
    }) {
        if (data) {
            this.totalAccounts = data;
            console.log('totalAccounts -- ' + JSON.stringify(this.totalAccounts));
        }
        if (error) {
            console.error(error);
        }
    }

    @wire(getContactList)
    wiredContact({
        error,
        data
    }) {
        if (data) {
            this.totalContacts = data;
            console.log('totalContacts -- ' + JSON.stringify(this.totalContacts));
        }
        if (error) {
            console.error(error);
        }
    }

    updateContactHandler(event) {
        console.log('Records from child--' + event.detail.records);
        this.visibleContacts = [...event.detail.records];
    }

    updateAccountHandler(event) {
        console.log('Records from child--' + event.detail.records);
        this.visibleAccounts = [...event.detail.records];
    }
}