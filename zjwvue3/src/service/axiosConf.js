/*
* @author: yu.zhai
* @date: 2021/3/30
* @last-Modify: 2021/3/30
* */
'use struct'
const baseURL = process.env.VUE_APP_API_BASEURL
const baseConfig = {
  baseURL: baseURL,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    uid: '',
    'jwt-login-account': '',
    'request-origion': 'Knife4j'
  },
  timeout: 15 * 1000,
  withCredentials: false // 倘若开启，请注意服务端access-control
}

export default {
  baseConfig
}
