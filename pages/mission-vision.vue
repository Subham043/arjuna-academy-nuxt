<template>
    <div>
        <Breadcrumb 
            title="Mission & Vision"
            :pages="[
                {
                    link:'',
                    name:'Mission & Vision'
                }
            ]"
        />

        <div class="faq-area pt-70 pb-70">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-4">
                        <div class="faq-img">
                            <img src="/images/mission-vision.png" alt="faq" />
                            <div class="shape">
                                <img src="/images/faq-shape.png" alt="Faq" />
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-8">
                        <div class="faq-accordion pl-20">
                            <ul class="accordion">
                                <li class="accordion-item">
                                    <h2 class="accordion-title active">
                                        Mission
                                    </h2>
                                    <div class="accordion-content show">
                                        <el-skeleton v-if="loading" :rows="6" animated />
                                        <p v-else v-html-safe="mission" />
                                    </div>
                                </li>
                                <li class="accordion-item">
                                    <h2 class="accordion-title active">
                                        Vision
                                    </h2>
                                    <div class="accordion-content show">
                                        <el-skeleton v-if="loading" :rows="6" animated />
                                        <p v-else v-html-safe="vision" />
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Breadcrumb from '~/components/Breadcrumb.vue';
import {API_ROUTES} from '~/helper/api_routes';



export default {
    name: "FaqPage",
    layout: "MainPageLayout",
    data() {
        return {
            mission: "",
            vision: "",
            loading: false,
            seo: {
                meta_title:'',
                meta_description:'',
                meta_keywords:'',
                meta_scripts:'',
            }
        };
    },
    head() {
        return {
            title: this.seo.meta_title,
            meta: [
            // hid is used as unique identifier. Do not use `vmid` for it as it will not work
                {
                    hid: 'og:title',
                    name: 'og:title',
                    content: this.seo.meta_title
                },
                {
                    hid: 'og:type',
                    name: 'og:type',
                    content: 'website'
                },
                {
                    hid: 'description',
                    name: 'description',
                    content: this.seo.meta_description
                },
                {
                    hid: 'keywords',
                    name: 'keywords',
                    content: this.seo.meta_keywords
                },
            ],
            script: [{
                type: 'application/ld+json',
                innerHTML: this.seo.meta_scripts // <- set jsonld object in data or wherever you want
            }],
            __dangerouslyDisableSanitizers: ['script'],
        }
    },
    async fetch() {
      await this.getMissionVision();
      await this.getSeo();
    },
    mounted() {
        // eslint-disable-next-line nuxt/no-env-in-hooks
        if (process.client) {
            this.$scrollTo("#__nuxt", 0, { force: true });
        }
    },
    methods: {
        async getMissionVision() {
            this.loading=true;
            try {
                const response = await this.$publicApi.get(API_ROUTES.mission_vision); // eslint-disable-line
                this.mission = response.data.mission.mission
                this.vision = response.data.mission.vision
            } catch (err) {
                // console.log(err.response);// eslint-disable-line
                this.$nuxt.context.error({
                    status: err.response.status,
                    message: err.response.data.message,
                })

            }finally{
                this.loading=false;
            }
        },
        async getSeo() {
            try {
                const response = await this.$publicApi.get(API_ROUTES.seo+`/mission-vision-page`); // eslint-disable-line
                this.seo = response.data.seo
            } catch (err) {
                // console.log(err.response);// eslint-disable-line
                this.$nuxt.context.error({
                    status: err.response.status,
                    message: err.response.data.message,
                })
    
            }
        },
    },
    components: { Breadcrumb }
}
</script>