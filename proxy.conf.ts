const DEV_SERVER = {
  SOURCE1: 'http://192.168.3.179:8081',
  SOURCE2: 'http://192.168.3.174:8086',
}; // 用于配置多个, 方便切换

module.exports = {
  '/api': { // 代理目标
    target: DEV_SERVER.SOURCE1, // 目标域名
    ws: true, // 是否需要链接websocket
    secure: false, // 是否https
    changeOrigin: true, // 是否跨域
    // pathRewrite: {
    //   '^/api': ''
    // }  // 地址重写
  }
};
