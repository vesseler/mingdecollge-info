<template>
    <div class="header">
        <div class="bg">
            <div>
                <span class="iconfont home" @click="toHome">&#xe744;</span>
            </div>
            <div class="title">信息工程系</div>
        </div>
        
        <li class="lists border-top" v-for="item in data" :key="item.id">
            {{ item.menuTitle }} 
            <span class="come iconfont">&#xe743;</span>
        </li>
        <div class="login border-top">
            <form class="centers" action="">
                <div>
                    <label for="account" >账号:</label>
                    <input type="text" style="width:76%" placeholder="请输入您的手机号" id="account">
                </div>
                <div>
                    <label for="password">密码:</label>
                    <input type="text" style="width:76%" id="password">
                </div>
                <div>
                    <label for="password">验证码:</label>
                    <input type="text" placeholder="填写验证码" id="password" style="width:1.5rem">
                    <button class="iconfont" style="margin:0 .1rem">发送验证码</button>
                </div>
                <div>
                    <input type="checkbox" checked="" style="margin:0 .3rem">记住密码
                    <button class="iconfont" style="margin:0 .7rem">&#xe63d;登录</button>
                </div>       
                
            </form>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            data:[
                {id:1,menuTitle:"网站首页"},
                {id:2,menuTitle:"专题首页"},
                {id:3,menuTitle:"系部通知"},
                {id:4,menuTitle:"系部介绍"},
                {id:5,menuTitle:"即时新闻"},
                {id:6,menuTitle:"教师风采"},
                {id:7,menuTitle:"优秀校友"},
                {id:8,menuTitle:"教学与教务"},
                {id:9,menuTitle:"学生工作"},
                {id:10,menuTitle:"系党支部"}
            ]
        }
    },
    methods: {
        toHome() {
            this.$router.push("/")
        }
    },
}
</script>
<style scoped>
.header {
    width: 100%;
    line-height: .88rem;
    font-size: .36rem;
    /* background: #f1f1f1; */
    position: relative;
}
.bg {
    background-color: #7bdcfe;

}
.home {
    font-weight: 700;
    margin: 0 .3rem;
    position: absolute;
}
.title {
    text-align: center;
}
.lists {
    list-style-type: none;
    margin: 0 .3rem;
    width: 90%;
    height: 1rem;
    line-height: 1rem;
    position: relative;
}
.come {
    position: absolute;
    right: 1%;
}
.centers {
    width: 70%;
    margin: 0 auto;
}
.login {
    /* background: #f0f0f5; */
}
</style>