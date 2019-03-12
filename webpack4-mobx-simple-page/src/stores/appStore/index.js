/**
 * @file
 * @author cyseria <xcyseria@gmail.com>
 */

import {observable, action, runInAction} from 'mobx';

class AppStore {
    @observable timer = 0;
    @observable topics = [];
    constructor() {
        setInterval(() => {
            this.timer += 1;
        }, 1000);
    }
    @action resetTimer = () => {
        this.timer = 0;
    }
}
export const appStore = new AppStore();