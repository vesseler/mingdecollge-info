<template>
    <div class="header">
        <div class="home">
            <span class="iconfont">&#xe744;</span>
            主页
        </div>
        <div class="title">信息工程系</div>
        <div class="menu" @click="toMenu">
            <span class="iconfont">&#xe652;</span>
            <span>菜单</span>
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        toMenu() {
            this.$router.push("/Menu")
        }
    },
}
</script>
<style scoped>
.header {
    width: 100%;
    line-height: .88rem;
    font-size: .36rem;
    display: flex;
    background-color: #7bdcfe;
    position: sticky;
    top: 0;
    z-index: 1000;
}
.home {
    margin: 0 .3rem;
    font-size: .3rem;
    color: #1d75e3;
}
.title {
    flex: 1;
    text-align: center;
}
.menu {
    margin: 0 .3rem;
    font-size: .3rem;
    color: #1d75e3;
}
</style>