
module.exports = {
    lintOnSave: true,
    configureWebpack: {
        externals: {
            'vue': 'Vue',
            'vue-router': 'VueRouter',
            'vuex': 'Vuex',
            'axios': 'axios'
        }
    },
    devServer: {
        proxy: {
            // proxy all requests starting with /api to jsonplaceholder
            '/blog': {
                target: 'http://localhost:9999/',   //代理接口
                changeOrigin: true,
                pathRewrite: {
                    '^/blog': '/blog',
                    '^/menu': '/menu',
                    '^/label': '/label',
                    '^/setting': '/setting',
                }
            }
        }
    }
}
