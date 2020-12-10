<template>
    <div class="news border-top">
        <span class="iconfont title" style="font-size:.5rem">&#xe753;</span>头条新闻
        <div class="newsList">   
            <li v-for="item in newsList" :key="item.id">
                <a href="item.url">{{ item.section }}</a>
            </li>           
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            newsList: [
                {id:1,url:"#",section:"信息系党总支组织全体师生党员在线收看“杨明同志先进事迹报告会” "},
                {id:2,url:"#",section:"信息系学生党支部开展接收预备党员大会”"},
                {id:3,url:"#",section:"贵州大学明德学院关于报送2020年度高校学生应征入伍服兵役学生国家教育学” "},
                {id:4,url:"#",section:"信息工程系2017届毕业实习走访报道   ” "},
                {id:5,url:"#",section:"信息工程系教师队伍介绍  ” "},
                {id:6,url:"#",section:"贵州大学明德学院关于报送2020年度高校学生应征入伍服兵役学生国家教育学费资助申请材料的通知” "}
            ]
        }
    },
}
</script>
<style scoped>
.news {
    line-height: .6rem;
    font-size: .3rem;
}
.title {
    margin: 0 .3rem;
    color: #ff0084;
}
.newsList li {
    margin: 0 .4rem;
    height: .5rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.newsList a {
    color: #000;
}
.newsList a:hover {
    color:cadetblue;
}

</style>