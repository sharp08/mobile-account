import JsonP from 'jsonp'
import axios from 'axios'
import NProgress from 'nprogress'
import { toast } from 'react-toastify';

export default class Axios {
    static jsonp(options) {
        return new Promise((resolve, reject) => {
            JsonP(options.url, {
                param: 'callback'
            }, function (err, response) {
                if (response.status === 'success') {
                    resolve(response);
                } else {
                    reject(response.messsage);
                }
            })
        })
    }

    static ajax(options) {
        // const baseURL = 'https://easy-mock.com/mock/5ce794efc3fa9154036c6fcb/demo';
        NProgress.start()
        const baseURL = '/phemr-web-api-v3/';
        return new Promise((resolve, reject) => {
            axios({
                url: options.url,
                method: options.method ?? "get",
                baseURL: options.baseURL ?? baseURL,
                timeout: options.timeout ?? 30000,
                params: options.params ?? '',
                data: options.data ?? '',
                headers: options.headers,
                responseType: options.responseType,
            }).then(response => {
                if (response.status === 200) {
                    const res = response.data;
                    if (options.responseType === "blob") {
                        resolve(res)
                    }
                    else {
                        if (res.code === 200) {
                            resolve(res);
                        }
                        else if (res.code === 406) {
                            toast.error(res.message);
                            window.location.replace('/#/login')
                        }
                        else {
                            const content = res.message ?? "未知错误"
                            toast.error(content);
                            reject(res)
                        }
                    }
                } else {
                    toast.error("未知错误!");
                    reject(response.data);
                }
            }).catch(err => {
                toast.error("未知错误!");
                reject(err);
            }).finally(() => {
                NProgress.done()
            })
        });
    }
}