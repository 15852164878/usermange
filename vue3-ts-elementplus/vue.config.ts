const { defineConfig } = require('@vue/cli-service')
module.exports = {
    "devServe": {
        // open: true,
        // host: 'localhost',
        // port: 8082,
        // https: false,
        // hostOnly: false,
        proxy: {
            '/JSP-Servlet': {
                targert: 'http://localhost:8081',
                 ws: true, //是否代理websocked
                changOrigin: true, //是否开启跨域
                rewrite:(path)=>path.replace(/^\/JSP-Servlet/, ''),

                // pathRewrite: {
                //     '^/JSP-Servlet': ''
                // }
            }
        },
        //before: app => {}
    }


}