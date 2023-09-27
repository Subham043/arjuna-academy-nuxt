<template>
    <div>
        <Breadcrumb 
            title="Testimonial"
            :pages="[
                {
                    link:'',
                    name:'Testimonial'
                }
            ]"
        />

        <div class="testimonials-area pt-70 pb-70">
            <div class="container">
                <div class="section-title text-center">
                    <span>TESTIMONIAL</span>
                    <h2>What our learers have to say</h2>
                </div>
                <div v-if="testimonialLoading" class="row justify-content-center testimonials-slider-two">
                    <div v-for="i in 9" :key="i" class="col-lg-4 col-md-6 col-sm-12">
                        <el-skeleton style="width: 100%" animated>
                            <template slot="template">
                                <div class="testimonials-card-two">
                                    <div class="rating">
                                        <i v-for="i in 5" :key="i" class="ri-star-fill"></i>
                                    </div>
                                    <el-skeleton-item variant="text" style="width: 100%;" />
                                    <br/>
                                    <el-skeleton-item variant="text" style="width: 100%;" />
                                    <br/>
                                    <div class="content px-0">
                                        <el-skeleton-item variant="circle" style="width: 100px; height: 100px;" />
                                        <el-skeleton-item variant="p" style="width: 50%" />
                                        <br/>
                                    </div>
                                    <div class="quote"><i class="flaticon-quote"></i></div>
                                </div>
                            </template>
                        </el-skeleton>
                    </div>
                </div>
                <div v-if="!testimonialLoading && testimonial.length>0" class="testimonials-slider-two row">
                    <div v-for="(item, i) in testimonial" 
                            :key="i" class="col-lg-4 col-md-6 col-sm-12">
                        <TestimonialCard 
                            :image="item.image" 
                            :name="item.name" 
                            :star="item.star" 
                            :message="item.message" 
                            :designation="item.designation" />
                    </div>
                </div>
                <div v-if="!testimonialLoading && testimonial.length>0" class="col-12 text-center">
                    <pagination v-model="testimonialCurrentPage" :records="testimonialCount" :per-page="testimonialPerPage"  :options="{edgeNavigation:false}" @paginate="handlePaginationChnage"/>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import Breadcrumb from '~/components/Breadcrumb.vue';
import TestimonialCard from '~/components/TestimonialCard.vue';
import { API_ROUTES } from '~/helper/api_routes';



export default {
    name: "TestimonialPage",
    layout: "MainPageLayout",
    data() {
        return {
            testimonialLoading: false,
            testimonial: [],
            testimonialCount:1,
            testimonialCurrentPage: 1,
            testimonialPerPage: 1,
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
    mounted() {
        // eslint-disable-next-line nuxt/no-env-in-hooks
        if (process.client) {
            this.$scrollTo("#__nuxt", 0, { force: true });
        }
    },
    async fetch() {
      await this.getTestimonial(this.$route.query.page ? Number(this.$route.query.page) : 1);
      await this.getSeo();
    },
    watch: {
        $route(to, from) {
            if (process.client) {
                this.$scrollTo("#__nuxt", 0, { force: true });
            }
            this.handlePageChnage();
        }
    },
    methods: {
        async getTestimonial(page=0) {
            this.testimonialLoading=true;
            try {
                const response = await this.$publicApi.get(API_ROUTES.testimonial+`?total=9&page=${page}`); // eslint-disable-line
                this.testimonial = response.data.data
                this.testimonialCount = response?.data?.meta?.total
                this.testimonialPerPage = response?.data?.meta?.per_page
                this.testimonialCurrentPage = this.$route.query.page ? Number(this.$route.query.page) : 1;
            } catch (err) {
                // console.log(err.response);// eslint-disable-line
                this.$nuxt.context.error({
                    status: err.response.status,
                    message: err.response.data.message,
                })
    
            }finally{
                this.testimonialLoading=false;
            }
        },
        async getSeo() {
            try {
                const response = await this.$publicApi.get(API_ROUTES.seo+`/testimonial-page`); // eslint-disable-line
                this.seo = response.data.seo
            } catch (err) {
                // console.log(err.response);// eslint-disable-line
                this.$nuxt.context.error({
                    status: err.response.status,
                    message: err.response.data.message,
                })
    
            }
        },
        handlePaginationChnage(page){
            this.$router.push({query:{page}});
        },
        handlePageChnage(){
            this.testimonialCurrentPage = this.$route.query.page ? Number(this.$route.query.page) : 1;
            this.getTestimonial(this.$route.query.page ? Number(this.$route.query.page) : 1);
        },
    },
    components: { TestimonialCard, Breadcrumb }
}
</script>