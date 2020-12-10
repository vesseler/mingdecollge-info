<template>
    <div class="icons">

         <swiper ref="mySwiper" :options="swiperOptions" >
            <swiper-slide v-for="item in page" :key="item.id" >
                <div class="icons-item" v-for="i in item" :key="i.id" @click="toDetail">
                    <img :src="i.imgUrl" alt="">
                    <p>{{ i.title }}</p>
                </div>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
  
    </div>
</template>
<script>
export default {
    data() {
        return {
            swiperOptions: {
                pagination: {
                    el: '.swiper-pagination'
                    
                },
                clickable:true,
                    loop:true
            },
            "iconsList": [
                {
                    "id":"1",
                    "imgUrl":"https://www.easyicon.net/api/resizeApi.php?id=1183488&size=128",
                    "title":"系部通知"
                },
                {
                    "id":"2",
                    "imgUrl":"https://www.easyicon.net/api/resizeApi.php?id=556686&size=128",
                    "title":"系部介绍"
                },
                {
                    "id":"3",
                    "imgUrl":"https://www.easyicon.net/api/resizeApi.php?id=1295035&size=128",
                    "title":"即时新闻"
                },
                {
                    "id":"4",
                    "imgUrl":"https://www.easyicon.net/api/resizeApi.php?id=1185977&size=128",
                    "title":"教师风采"
                },
                {
                    "id":"5",
                    "imgUrl":"https://www.easyicon.net/api/resizeApi.php?id=1178754&size=128",
                    "title":"优秀校友"
                },
                {
                    "id":"6",
                    "imgUrl":"https://www.easyicon.net/api/resizeApi.php?id=1211318&size=128",
                    "title":"教学与教务"
                },
                {
                    "id":"7",
                    "imgUrl":"https://www.easyicon.net/api/resizeApi.php?id=1247072&size=128",
                    "title":"学生工作"
                },
                {
                    "id":"8",
                    "imgUrl":"https://www.easyicon.net/api/resizeApi.php?id=1138459&size=128",
                    "title":"更多"
                },
                {
                    "id":"9",
                    "imgUrl":"https://www.easyicon.net/api/resizeApi.php?id=566910&size=128",
                    "title":"系党支部"
                },
                {
                    "id":"10",
                    "imgUrl":"https://www.easyicon.net/api/resizeApi.php?id=1190760&size=128",
                    "title":"系团支部"
                },
                {
                    "id":"11",
                    "imgUrl":"https://www.easyicon.net/api/resizeApi.php?id=1197294&size=128",
                    "title":"系学生会"
                },
                {
                    "id":"12",
                    "imgUrl":"https://www.easyicon.net/api/resizeApi.php?id=1094720&size=128",
                    "title":"就业指导"
                },
                {
                    "id":"13",
                    "imgUrl":"https://www.easyicon.net/api/resizeApi.php?id=1240838&size=128",
                    "title":"心理健康"
                }
            ], 
        }
    },
    computed: {
        page() {
            let pages = [];
            this.iconsList.forEach((item,index)=>{
                let idx = Math.floor(index/8);
                if(!pages[idx]) {
                    pages[idx] = [];
                }
                pages[idx].push(item);
            });

            return pages;
        },
        swiper() {
            return this.$refs.mySwiper.$swiper
        }
    },
    mounted() {
        console.log('Current Swiper instance object', this.swiper)
        this.swiper.slideTo(3, 1000, false)
    },
    methods: {
        toDetail() {
            this.$router.push('/detail')
      }
    },
}
</script>

<style scoped>
    .icons {
        width: 100%;
        overflow: hidden;
    }
    .icons-item {
        width: 25%;
        padding-bottom: 25%;
        height: 0;
        background: #fff;
        float: left;
    }
    .icons-item img {
        width: 1.1rem;
        height: 1.1rem;
        display: block;
        margin: 0 auto;
        padding-top: .2rem;
    }
    .icons-item p {
        margin-top: .1rem;
        font-size: .28rem;
        text-align: center;
        color: #212121;
    }
</style>