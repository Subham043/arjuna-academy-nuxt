<template>
    <div>
        <Breadcrumb 
            title="FAQ"
            :pages="[
                {
                    link:'',
                    name:'FAQ'
                }
            ]"
        />

        <div class="faq-area pt-70 pb-70">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="faq-img">
                            <img data-src="/images/faq-img.jpg" alt="faq" title="faq" v-lazy-load/>
                            <div class="shape">
                                <img data-src="/images/faq-shape.png" alt="Faq" title="Faq" v-lazy-load/>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6" id="faq-area">
                        <div class="faq-accordion pl-20">
                            <div class="section-title mb-45">
                                <span>FAQ</span>
                                <h2>Frequently asked question</h2>
                            </div>
                            <div v-if="faqLoading" class="row justify-content-center">
                                <div  v-for="i in 9" :key="i" class="col-lg-12 col-md-12">
                                    <el-skeleton style="width: 100%" animated>
                                        <template slot="template">
                                            <el-skeleton-item variant="p" style="width: 50%" />
                                            <br/>
                                            <el-skeleton-item variant="text" style="width: 100%;" />
                                            <br/>
                                            <el-skeleton-item variant="text" style="width: 100%;" />
                                            <br/>
                                            <el-skeleton-item variant="text" style="width: 100%;" />
                                            <br/>
                                            <br/>
                                        </template>
                                    </el-skeleton>
                                </div>
                            </div>
                            <ul v-if="!faqLoading && faq.length>0" class="accordion">
                                <li v-for="(item, i) in faq" :key="i" class="accordion-item">
                                    <h4 class="accordion-title active" v-html="item.question" />
                                    <div class="accordion-content show" v-html="item.answer" />
                                </li>
                            </ul>
                            <div v-if="!faqLoading && faq.length>0" class="col-12 text-center mt-5">
                                <pagination v-model="faqCurrentPage" :records="faqCount" :per-page="faqPerPage"  :options="{edgeNavigation:false}" @paginate="handlePaginationChnage"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { API_ROUTES } from '~/helper/api_routes';



export default {
    name: "FaqPage",
    layout: "MainPageLayout",
    data() {
        return {
            faqLoading: false,
            faq: [],
            faqCount:1,
            faqCurrentPage: 1,
            faqPerPage: 1,
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
      await this.getFaq(this.$route.query.page ? Number(this.$route.query.page) : 1);
      await this.getSeo();
    },
    watch: {
        $route(to, from) {
            this.handlePageChnage();
            if (process.client) {
                this.$scrollTo("#faq-area", 0, { force: true });
            }
        }
    },
    methods: {
        async getFaq(page=0) {
            this.faqLoading=true;
            try {
                const response = await this.$publicApi.get(API_ROUTES.faq+`?total=12&page=${page}`); // eslint-disable-line
                this.faq = response.data.data
                this.faqCount = response?.data?.meta?.total
                this.faqPerPage = response?.data?.meta?.per_page
                this.faqCurrentPage = this.$route.query.page ? Number(this.$route.query.page) : 1;
            } catch (err) {
                // console.log(err.response);// eslint-disable-line
                this.$nuxt.context.error({
                    status: err.response.status,
                    message: err.response.data.message,
                })
    
            }finally{
                this.faqLoading=false;
            }
        },
        async getSeo() {
            try {
                const response = await this.$publicApi.get(API_ROUTES.seo+`/faq-page`); // eslint-disable-line
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
            this.faqCurrentPage = this.$route.query.page ? Number(this.$route.query.page) : 1;
            this.getFaq(this.$route.query.page ? Number(this.$route.query.page) : 1);
        },
    },
    components: { 
        Breadcrumb: () => import('~/components/Breadcrumb.vue') 
    }
}
</script>