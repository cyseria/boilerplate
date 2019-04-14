/**
 * @file
 * @author cyseria <xcyseria@gmail.com>
 */

 // 这个文件没有被用到
 // 只是为了展示游多个 store 如何挂载（比如统一入口 rootstore）

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
