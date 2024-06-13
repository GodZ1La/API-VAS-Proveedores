import axios from 'axios';
import Cookies from 'js-cookie';
import CryptoJS from 'crypto-js';
//import {encrypt, decrypt}  from '../hooks/crypto';

axios.interceptors.request.use(function (config) {
    const vas_authorization = Cookies.get('vas_authorization');
    config.headers.vas_authorization = vas_authorization ? vas_authorization : 'null' ;
    return config;
  }, function (error) {
    console.log(error)
    return Promise.reject(error);
  });

// Agregar una respuesta al interceptor
axios.interceptors.response.use(function (response) {
    //if(!response.config.url.includes("conspiracion.deinsi.com")){
      var bytes  = CryptoJS.AES.decrypt(response.data, process.env.ENCRYPT_KEY);
      var originalText = bytes.toString(CryptoJS.enc.Utf8);
      response.data = JSON.parse(originalText)
    //}

    return response;
  }, function (error) {
    console.log(error)
    return Promise.reject(error);
  });

  export default axios;