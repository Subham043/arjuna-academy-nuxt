<template>
    <div>
        <Breadcrumb 
            title="Expert Tips"
            :pages="[
                {
                    link:'',
                    name:'Expert Tips'
                }
            ]"
        />

        <div class="blog-area pt-70 pb-70" id="expertTip-area">
            <div class="container">
                <div class="section-title mb-45 text-center">
                    <h2>Latest from our <b>expert tips</b></h2>
                    <p>
                        “Mantras to crack JEE & NEET”
                    </p>
                </div>
                <div class="row justify-content-center">
                    <div v-if="expertTipLoading" v-for="i in 8" :key="i" class="col-lg-6 col-md-6">
                        <el-skeleton style="width: 100%" animated>
                            <template slot="template">
                                <el-skeleton-item variant="text" style="width: 30%;" />
                                <br/>
                                <el-skeleton-item variant="p" style="width: 50%" />
                                <br/>
                                <el-skeleton-item variant="text" style="width: 100%;" />
                            </template>
                        </el-skeleton>
                    </div>
                    <div v-if="!expertTipLoading && expertTip.length>0" v-for="(item, i) in expertTip" :key="i" class="col-lg-6 col-md-6">
                        <EventCard :title="item.name" :description="item.short_description" :date="item.published" :author="item.author_name" :slug="item.slug" :is_event="false" />
                    </div>
                    <div v-if="!expertTipLoading && expertTip.length>0" class="col-12 text-center">
                        <pagination v-model="expertTipCurrentPage" :records="expertTipCount" :per-page="expertTipPerPage"  :options="{edgeNavigation:false}" @paginate="handlePaginationChnage"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { API_ROUTES } from '~/helper/api_routes';


export default {
    name: "ExpertTipPage",
    layout: "MainPageLayout",
    data() {
        return {
            expertTipLoading: false,
            expertTip: [],
            expertTipCount:1,
            expertTipCurrentPage: 1,
            expertTipPerPage: 1,
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
      await this.getExpertTip(this.$route.query.page ? Number(this.$route.query.page) : 1);
      await this.getSeo();
    },
    watch: {
        $route(to, from) {
            this.handlePageChnage();
            if (process.client) {
                this.$scrollTo("#expertTip-area", 0, { force: true });
            }
        }
    },
    methods: {
        async getExpertTip(page=0) {
            this.expertTipLoading=true;
            try {
                const response = await this.$publicApi.get(API_ROUTES.expertTip+`?total=8&page=${page}&sort=-published_on`); // eslint-disable-line
                this.expertTip = response.data.data
                this.expertTipCount = response?.data?.meta?.total
                this.expertTipPerPage = response?.data?.meta?.per_page
                this.expertTipCurrentPage = this.$route.query.page ? Number(this.$route.query.page) : 1;
            } catch (err) {
                // console.log(err.response);// eslint-disable-line
                this.$nuxt.context.error({
                    status: err.response.status,
                    message: err.response.data.message,
                })
    
            }finally{
                this.expertTipLoading=false;
            }
        },
        async getSeo() {
            try {
                const response = await this.$publicApi.get(API_ROUTES.seo+`/expert-tips-page`); // eslint-disable-line
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
            this.expertTipCurrentPage = this.$route.query.page ? Number(this.$route.query.page) : 1;
            this.getExpertTip(this.$route.query.page ? Number(this.$route.query.page) : 1);
        },
    },
    components: { 
        EventCard: () => import('~/components/EventCard.vue'), 
        Breadcrumb: () => import('~/components/Breadcrumb.vue') 
    }
}
</script>