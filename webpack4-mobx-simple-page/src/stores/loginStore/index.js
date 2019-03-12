/**
 * @file
 * @author cyseria <xcyseria@gmail.com>
 */

import {observable, action} from 'mobx';
class LoginStore {
    @observable username;
    @observable password;
    constructor() {
        this.username = 'admin';
        this.password = '12345';
    }
    @action changeUsername = value => {
        this.username = value;
    }
    @action changePassword = value => {
        this.password = value;
    }
}
export const loginStore = new LoginStore();
