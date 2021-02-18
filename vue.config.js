module.exports={
    devServer:{
        port:'8080',
        open:true,
        proxy:{
            '/api':{
                target:"http://localhost:7001",
                changeOrigin:true,
                pathRewrite:{
                    '^/api': 'http://localhost:7001'
                }
            }
        }
    }
}