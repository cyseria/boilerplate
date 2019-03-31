/**
 * @file 请求统一处理部分
 * @author cyseria <xcyseria@gmail.com>
 */

/**
 * @file axios 拦截器啥的
 */

 import axios from 'axios';

const host = window.location.host;

axios.defaults.timeout = 5000;
axios.defaults.baseURL = 'xxx'; // 这里去要替换
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

// 请求拦截
axios.interceptors.request.use(
    config => {
        config.withCredentials = true; // 需要跨域打开此配置
        // appStore.showLoading()
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

// 响应拦截
axios.interceptors.response.use(
    response => {
        // appStore.hideLoading()
        return response.data;
    },
    error => {
        // 这里可以做未登录等路由跳转，错误提示等一系列操作
        return Promise.reject(error);
    }
);

export {axios};