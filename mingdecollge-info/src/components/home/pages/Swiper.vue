<template>
    <div class="header-swiper" >
        <swiper ref="mySwiper" :options="swiperOptions" @click="toDetail">
            <swiper-slide v-for="itme in swiperList" :key="itme.id">
                <img :src="itme.imgUrl" :alt="itme.alts" >
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
  
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
  export default {
    
    data() {
      return {
        swiperOptions: {
          pagination: {
            el: '.swiper-pagination',
            
          },
          loop:true
          // Some Swiper option/callback...
        },
        swiperList: [
            {id:1,imgUrl:"../../../../static/mock/img/home-swiper1.png"},
            {id:2,imgUrl:"../../../../static/mock/img/home-swiper2.jpg"},
            {id:3,imgUrl:"../../../../static/mock/img/home-swiper3.png"},
            {id:4,imgUrl:"../../../../static/mock/img/home-swiper4.png"},
            {id:5,imgUrl:"../../../../static/mock/img/home-swiper5.png"},
            {id:6,imgUrl:"../../../../static/mock/img/home-swiper6.png"}
        ]
      }
    },
    computed: {
    //   swiper() {
    //     return this.$refs.mySwiper.$swiper
    //   }
    },
    mounted() {

    },
    methods: {
      toDetail() {
        this.$router.push('/detail')
      },
    }
  }
</script>
<style scoped>
    .header-swiper {
        background: #ccc;
        height: 0;
        padding-bottom: 3rem;
        /* width: 100%; */
        /* height: 3rem; */
    }
    .header-swiper img {
        width: 100%;
        height: 3rem;
        font-size: .3rem;
        color: #ccc;
    }
   
</style>