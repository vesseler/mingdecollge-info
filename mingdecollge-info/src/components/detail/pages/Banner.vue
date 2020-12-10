<template>
    <div class="banner" >
        <div  @click="onSwiper">
            <div class="banner-img">
                <img src="../../../../static/mock/img/home-swiper1.png" 
                alt="">
            </div>
            <div class="banner-title">
                信息工程系简介   
            </div>
        </div>       

        <div class="img-swiper" v-show="displayimg" @click.self="offswiper">
            <img src="../../../../static/mock/img/home-swiper1.png" 
            alt="">
        </div>
        <p style="font-size:.4rem;margin: .2rem .1rem;">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;信息工程系设有计算机科学与技术、通信工程、电子信息工程、网络工程、数据科学与大数据技术等5个专业。现有全日制本科学生1543名。依托母体学校，我系拥有一支知识新、富于创新、实干精神的师资队伍，我系现有教师105人，其中教授（其他正高级职称）6人（占比5.71%），副教授（其他副高级职称）35人（占比33.33%），讲师（其他中级职称）55人（占比52.38%），中级及以上职称教师数量较去年有了大幅增加；教师队伍中拥有博士学位15人，硕士学位54人，具有硕士以上学位教师占教师总数65.71%。教师结构合理，专业多元化，师资队伍稳定。<br/>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;信息系以培养具有较强的获取知识和创新思维能力的高级应用型人才为目标，以教学为中心，践行产学融合、产教融合的办学理念，积极开展专业建设，先后与印度NIIT、北京优炫软件股份有限公司、科大讯飞股份有限公司、广西润建集团等知名企业合作办学，引入先进教学模式，致力于打造品牌专业，为贵州省大数据产业发展战略提供人才支持。<br/>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我系计算机科学与技术专业主要学习计算机科学与技术方面的基本理论和基本知识，同时，学习大数据基础知识和接受大数据开发与应用的培训，具有研究和开发计算机系统的能力。<br/>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;通信工程专业学生主要学习通信技术的基本理论，通信系统和通信网方面的基本知识、组网原理和设计方法，接受通信工程实践的基本训练，具备从事现代通信系统与网络的设计、开发、调测和工程应用的基本能力。<br/>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;电子信息工程专业培养掌握现代电子技术理论、通晓电子系统设计原理与设计方法，面向电子技术、自动控制和智能控制等电子、信息、通信领域的应用型人才。<br/>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;网络工程专业主要学习计算机网络理论与设计原理、计算机通信与网络安全理论，接受网络工程实践基本训练，培养具有计算机网络规划、组建、调测、管理和维护能力，具备网络安全检测与应用部署能力、网络编程能力的应用型人才。<br/>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;数据科学与大数据技术专业培养大数据科学与工程领域的复合型高级技术人才。毕业生具有信息科学、管理科学和数据科学基础知识与基本技能，掌握大数据科学与技术所需要的计算机、网络、数据编码、数据处理等相关学科的基本理论和基础知识，并掌握相应的技术，能够胜任各行业大数据的分析、处理和开发工作，能够管理和维护大数据系统。<br/>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在人才培养中，我系注重提升学生创新意识、实践能力，社会责任感等综合素质，开设有类型多样的工作室，积极组织学生参加全国大学生电子设计比赛、全国通信大赛、全国应用型技能人才大赛等全国性大赛并获得多个奖项。<br/>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;展望未来，信息系将围绕培养贵州省亟需的大数据产业相关人才为中心，以学科建设为主线，以师资建设为重点，不断提高人才培养、科学研究和社会服务的能力和水平。<br/>
        </p>
        <p class="flootss">···</p>
        <p class="flootss">滑倒底了</p>
        <p class="flootss">···</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            displayimg:false
        }
    },
    methods: {
        onSwiper() {
            this.displayimg=true
        },
        offswiper() {
            this.displayimg=false
        }
    }
}
</script>

<style scoped>
.banner {
    position: relative;
    background: #e6e6e6;
}
.banner-img {
    width: 100%;
    overflow: hidden;
    height: 0;
    padding-bottom: 55%;
    background: #9cdcfe;
}
.banner-img img {
    width: 100%;
}
.banner-title   {
    position: absolute;
    top: 3.3rem;
    left: .3rem;
    font-size: .5rem;
    color: #fff;
}
.img-swiper {
    background: #000;
    position: fixed;
    top: 0;
    bottom: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;
}
.img-swiper img{
    width: 100%;
}
.flootss {
    font-size: .3rem;
    text-align: center;
}
</style>