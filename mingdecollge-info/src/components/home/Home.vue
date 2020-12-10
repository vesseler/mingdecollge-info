<template>
    <div class="home">
        <home-header></home-header>
        <home-swiper></home-swiper>
        <home-icon></home-icon>
        <home-news></home-news>
        <home-like></home-like>
        <home-floot></home-floot>
    </div>
</template>
<script>
import HomeHeader from './pages/Header'
import HomeSwiper from './pages/Swiper'
import HomeNews from './pages/News'
import HomeIcon from './pages/Icon'
import HomeLike from './pages/Like'
import HomeFloot from './pages/Floot'

export default {
    components: {
        HomeHeader,HomeSwiper,HomeIcon,HomeNews,HomeLike,HomeFloot
    }
}
</script>
<style scoped>
.home {
    overflow: visible;
}
</style>