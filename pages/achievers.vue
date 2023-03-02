<template>
    <div>
        <Breadcrumb title="JEE Advanced" />

        <div class="blog-area pt-100 pb-70">
            <div class="container">
                <div class="section-title mb-45 text-center">
                    <h2>JEE ADVANCED TOPPERS <b>2022</b></h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore.
                    </p>
                </div>
                <div class="row justify-content-center">
                    <div v-for="(i) in 8" :key="i" class="col-lg-3 col-md-6">
                        <div class="achiever-detail">
                            <div class="achiever-detail-container pb-0">
                                <img src="https://www.aaaedu.in/assets/img/rank/naman-jee.png"
                                alt="Naman Karanth - JEE Marks - 99.44 Percentile, NITK, ECE" title="Rahul V"
                                class="img-responsive">
                                <h5>Naman Karanth</h5>
                            </div>
                            <h3> AIR - 4287</h3>
                            <div class="achiever-detail-container pt-0">
                                <p>RVCE </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-12 col-md-12 text-center">
                        <div class="pagination-area">
                            <a href="blog.html" class="prev page-numbers">
                                <i class="flaticon-left-arrow"></i>
                            </a>
                            <span class="page-numbers current" aria-current="page">1</span>
                            <a href="blog.html" class="page-numbers">2</a>
                            <a href="blog.html" class="page-numbers">3</a>
                            <a href="blog.html" class="next page-numbers">
                                <i class="flaticon-chevron"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    </div>
</template>

<script>
import Breadcrumb from '~/components/Breadcrumb.vue';



export default {
    name: "AchieversPage",
    layout: "MainPageLayout",
    data() {
        return {};
    },
    mounted() {
        // eslint-disable-next-line nuxt/no-env-in-hooks
        if (process.client) {
            this.$scrollTo("#__nuxt", 0, { force: true });
        }
    },
    components: { Breadcrumb }
}
</script>

<style scoped>
.achiever-detail {
    background-color: #f9f9f9;
    text-align: center;
    margin-bottom: 30px;
    clip-path: polygon(50% 0,100% 0,100% 99%,50% 85%,0 100%,0 0);
    min-height: 375px;
    height: 375px;
}

.achiever-detail-container{
    padding: 15px 30px;
}
.achiever-detail img {
    width: 55%;
    border: 2px solid #D7C167;
}
.achiever-detail h5 {
    font-weight: 700;
    font-size: 17px;
    padding: 10px 0;
    margin: 0;
}
.achiever-detail h3 {
    font-size: 15px;
    color: #fff;
    background: #304557;
    padding: 10px;
    font-weight: 700;
    text-align: center;
}
.tab-filter p {
    font-size: 14px;
    text-align: center;
    padding: 0 10%;
    font-weight: 620;
}
.achiever-detail p {
    font-weight: 700;
}

</style>