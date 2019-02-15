import Vue from 'vue';
import axios from 'axios';
import Qs from 'qs';
import {showToast} from '../toast/index';

const $ajax = axios.create({
  withCredentials: true,
  baseURL: `$$_INTERFACE_$$`,
  transformRequest: [(data) => {
    data = Qs.stringify(data);
    return data;
  }]
})

$ajax.interceptors.response.use((response) => {
    if (response && response.data) {
        let {status,result} = response.data;
        let code = Number(status.code);
        
        if (code != 0) {
            status.message && showToast(status.message)
        } else if(result && result.errorMsg){
            showToast(result.errorMsg)
        }
        return {
            status,
            result
        };
    
      } else {
        return null
      }
}, (error) => {
    return Promise.reject(error);
});

export default {
    install(){
        Vue.toast = Vue.prototype.$ajax = $ajax
    },
    $ajax
};
