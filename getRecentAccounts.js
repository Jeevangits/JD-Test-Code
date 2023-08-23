import { LightningElement, wire } from 'lwc';
import getRecentlyCreatedAccounts from '@salesforce/apex/getRecentlyCreatedAccounts.getRecentlyCreatedAccounts';

import { NavigationMixin } from 'lightning/navigation';

export default class RecentlyCreatedAccounts extends NavigationMixin(LightningElement) {
    accounts;

    @wire(getRecentlyCreatedAccounts)
    wiredAccounts({ error, data }) {
        if (data) {
            this.accounts = data.slice(0, 10);
        } else if (error) {
            console.error(error);
        }
    }

    handleAccountClick(event) {
        const accountId = event.currentTarget.dataset.accountId;
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: accountId,
                objectApiName: 'Account',
                actionName: 'view'
            }
        });
    }
}
