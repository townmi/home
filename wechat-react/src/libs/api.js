import axios from "axios";
import { API_ROOT } from "../constants/";
import { cookie } from "./uitls";

const _instance = () => {
    let js_session = null;

    if (process.env.NODE_ENV === "development") {
        js_session = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE0OTcwNzY0MzAsImlzcyI6Ijk4YWU1MzQwLTQxNTAtMTFlNy1iNDc3LWM5MTE5M2VjNzlkMSIsImlhdCI6MTQ5Njk5MDAzMH0.ER7w8Zm3CCUyYDStNAiKoR9pv-rjNyZimIx7Vha47nc";
    } else {
        js_session = cookie("js_session");
    }

    if (js_session) {
        if (process.env.NODE_ENV === "development") { // eslint-disable-line
            return axios.create({
                timeout: 5000,
                headers: { "Authorization": `Bearer ${js_session}` }
            });
        }
        return axios.create({
            timeout: 5000,
            headers: { "Authorization": `Bearer ${js_session}` }
        });
    }
    return axios.create({
        timeout: 5000
    });
};

/**
 * 拦截
 * @param {Function} task 
 * @return {Promise}
 */
const __promiseTask = (task) => {
    return new Promise(function (resolve, reject) {
        task.then((res) => {
            /**
             * res status AJAX 状态
             * [200 success]
             * []
             * []
             */
            if (res.status === 200) {
                /**
                 * res.data.code [API 返回数据状态]
                 */
                if (res.data && res.data.code === 200) {
                    resolve(res.data);
                } else {
                    reject({
                        status: res.status
                    });
                }
            } else {
                reject({
                    status: res.status
                });
            }
        }, error => {
            reject(error);
        });
    });
};


export const getUserInfo = () => {
    return __promiseTask(_instance().get(API_ROOT.getUserInfo));
}