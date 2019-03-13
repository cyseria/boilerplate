/**
 * @file
 * @author cyseria <xcyseria@gmail.com>
 */

import {observable, action, configure} from 'mobx';

// 使用严格模式
configure({
    enforceActions: 'always'
});

class LoginStore {
    @observable username = 'admin';
    @observable password = '12345';
    @action changeUsername = value => {
        this.username = value;
    }
    @action changePassword = value => {
        this.password = value;
    }
}
export const loginStore = new LoginStore();
