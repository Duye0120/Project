
技术：
vue + vue-router + axious + element-ui + echarts
node.js(express) + mysql + jwt(状态管理) + sequelize

使用脚手架创建项目
vue-cli


=====================

1. 项目准备
    vue-cli创建项目
    安装element
    配置axios

    1. 登录页面
        - 在登录页输入账号密码
        - 调用接口进行校验
        - 验证后，跳转

        cookie/session/token

        登录成功之后，
            - 把token保存起来 
                localStorage(永久存储【没有必要】)
                sessionStorage(浏览器关闭就没有了)
            - 默认跳转主页
                访问权限的控制