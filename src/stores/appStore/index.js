/**
 * @file
 * @author cyseria <xcyseria@gmail.com>
 */

import {
    observable,
    action,
    runInAction,
    computed,
    configure
} from 'mobx';

// 使用严格模式
configure({
    enforceActions: 'always'
});

class AppStore {
    @observable price = 400;
    @observable num = 1000;

    @computed get totalVal() {
        return this.price * this.num;
    }

    @action
    buyIn = (num) => {
        this.num += Number(num);
    }

    @action
    sayOut = (num) => {
        this.num -= Number(num);
    }
}
export const appStore = new AppStore();