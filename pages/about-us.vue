<template>
    <div>
        <Breadcrumb title="About us" />

        <WhoWeAreCard 
            :first="true"
            :loading="aboutLoading"
            :image_alt="about?.image_alt"
            :image="about?.image"
            :image_title="about?.image_title"
            :heading="about?.heading"
            :detail="about?.description"
            :counter_description="about?.counter_description"
            :counter_image="about?.counter_image"
            :counter_title="about?.counter_title"
            :title="about?.title"
        />

        <div class="play-area ptb-100">
            <div class="container">
                <div class="title text-center mb-45">
                    <h2>
                        We worked with <span>250+ </span> leading universities and companies
                    </h2>
                </div>
                <div class="play-btn-area">
                    <a href="https://www.youtube.com/watch?v=Zd00oIDAt60" class="play-btn">
                        <i class="flaticon-play-button-arrowhead"></i>
                    </a>
                </div>
            </div>
        </div>

        <div class="counter-area-three pb-70">
            <div class="container">
                <div v-if="counterLoading" class="row justify-content-center">
                    <div v-for="i in 4" :key="i" class="col-lg-3 col-md-6 col-sm-12">
                        <el-skeleton style="width: 100%" animated>
                            <template slot="template">
                                <div class="counter-card box-shadow px-1">
                                    <el-skeleton-item variant="circle" style="width: 100px; height: 100px;" />
                                    <el-skeleton-item variant="p" style="width: 50%" />
                                    <br/>
                                </div>
                            </template>
                        </el-skeleton>
                    </div>
                </div>
                <div class="row">
                    <div v-if="!counterLoading && counter.length>0" v-for="(item, i) in counter" :key="i" class="col-lg-3 col-6">
                        <div class="counter-card box-shadow">
                            <div class="row align-item-center">
                                <img :src="item.image" :alt="item.image_alt" :title="item.image_title" style="height: 80px; object-fit: contain; width: auto !important;">
                                <div class="col-auto">
                                    <h3><span class="odometer">{{ item.counter }}</span>+</h3>
                                    <p>{{ item.title }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <WhatWeDoCard :loading="featureLoading" :feature="feature" />


    </div>
</template>

<script>
import Breadcrumb from '~/components/Breadcrumb.vue';
import WhatWeDoCard from '~/components/WhatWeDoCard.vue';
import WhoWeAreCard from '~/components/WhoWeAreCard.vue';
import { API_ROUTES } from '~/helper/api_routes';



export default {
    name: "AboutPage",
    layout: "MainPageLayout",
    data() {
        return {
            counterLoading: false,
            counter: [],
            aboutLoading: false,
            about: null,
            featureLoading: false,
            feature: [],
        };
    },
    mounted() {
        // eslint-disable-next-line nuxt/no-env-in-hooks
        if (process.client) {
            this.$scrollTo("#__nuxt", 0, { force: true });
        }
        this.getCounter();
    },
    async fetch() {
      await this.getAboutSection();
      await this.getFeature();
    },
    methods: {
        async getCounter() {
            this.counterLoading=true;
            try {
                const response = await this.$publicApi.get(API_ROUTES.counter); // eslint-disable-line
                this.counter = response.data.counter
            } catch (err) {
                // console.log(err.response);// eslint-disable-line
                if(err?.response?.data?.message) this.$toast.error(err?.response?.data?.message)
                if(err?.response?.data?.error) this.$toast.error(err?.response?.data?.error)
    
            }finally{
                this.counterLoading=false;
            }
        },
        async getAboutSection() {
            this.aboutLoading=true;
            try {
                const response = await this.$publicApi.get(API_ROUTES.aboutSection+`/about-page`); // eslint-disable-line
                this.about = response.data.about;
            } catch (err) {
                // console.log(err.response);// eslint-disable-line
                if(err?.response?.data?.message) this.$toast.error(err?.response?.data?.message)
                if(err?.response?.data?.error) this.$toast.error(err?.response?.data?.error)
    
            }finally{
                this.aboutLoading=false;
            }
        },
        async getFeature() {
            this.featureLoading=true;
            try {
                const response = await this.$publicApi.get(API_ROUTES.feature+`/about-page`); // eslint-disable-line
                this.feature = response.data.feature;
            } catch (err) {
                // console.log(err.response);// eslint-disable-line
                if(err?.response?.data?.message) this.$toast.error(err?.response?.data?.message)
                if(err?.response?.data?.error) this.$toast.error(err?.response?.data?.error)
    
            }finally{
                this.featureLoading=false;
            }
        },
    },
    components: { Breadcrumb, WhoWeAreCard, WhatWeDoCard }
}
</script>