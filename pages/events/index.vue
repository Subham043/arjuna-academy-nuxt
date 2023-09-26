<template>
    <div>
        <Breadcrumb 
            title="Events"
            :pages="[
                {
                    link:'',
                    name:'Events'
                }
            ]"
        />

        <div class="blog-area pt-70 pb-70">
            <div class="container">
                <div class="section-title mb-45 text-center">
                    <h2>Latest from our <b>events</b></h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore.
                    </p>
                </div>
                <div class="row justify-content-center">
                    <div v-if="eventLoading" class="row justify-content-center">
                        <div v-for="i in 8" :key="i" class="col-lg-6 col-md-6">
                            <el-skeleton style="width: 100%" animated>
                                <template slot="template">
                                    <div class="event-item">
                                        <div class="event-img" style="width: 40%;">
                                            <el-skeleton-item variant="image" style="width: 100%; height: 240px;" />
                                        </div>
                                        <div class="event-content" style="width: 60%;">
                                            <el-skeleton-item variant="p" style="width: 100%" />
                                            <br/>
                                            <el-skeleton-item variant="text" style="width: 100%;" />
                                            <br/>
                                            <el-skeleton-item variant="text" style="width: 100%;" />
                                            <br/>
                                            <el-skeleton-item variant="text" style="width: 100%;" />
                                            <br/>
                                        </div>
                                    </div>
                                </template>
                            </el-skeleton>
                        </div>
                    </div>
                    <div v-if="!eventLoading && event.length>0" v-for="(item, i) in event" :key="i" class="col-lg-6 col-md-6">
                        <EventCard :image="item.image" :title="item.name" :description="item.short_description" :date="item.event_date_on" :slug="item.slug" />
                    </div>
                    <div v-if="!eventLoading && event.length>0" class="col-12 text-center">
                        <pagination v-model="eventCurrentPage" :records="eventCount" :per-page="eventPerPage"  :options="{chunk:9, chunksNavigation:'scroll'}" @paginate="handlePaginationChnage"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Breadcrumb from '~/components/Breadcrumb.vue';
import EventCard from '~/components/EventCard.vue';
import { API_ROUTES } from '~/helper/api_routes';


export default {
    name: "EventTipPage",
    layout: "MainPageLayout",
    mounted() {
        // eslint-disable-next-line nuxt/no-env-in-hooks
        if (process.client) {
            this.$scrollTo("#__nuxt", 0, { force: true });
        }
    },
    data() {
        return {
            eventLoading: false,
            event: [],
            eventCount:1,
            eventCurrentPage: 1,
            eventPerPage: 1,
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
      await this.getEvent();
      await this.getSeo();
    },
    watch: {
        $route(to, from) {
            this.handlePageChnage();
        }
    },
    methods: {
        async getEvent(page=0) {
            this.eventLoading=true;
            try {
                const response = await this.$publicApi.get(API_ROUTES.event+`?total=8&page=${page}`); // eslint-disable-line
                this.event = response.data.data
                this.eventCount = response?.data?.meta?.total
                this.eventPerPage = response?.data?.meta?.per_page
                this.eventCurrentPage = this.$route.query.page ? Number(this.$route.query.page) : 1;
            } catch (err) {
                // console.log(err.response);// eslint-disable-line
                this.$nuxt.context.error({
                    status: err.response.status,
                    message: err.response.data.message,
                })
    
            }finally{
                this.eventLoading=false;
            }
        },
        async getSeo() {
            try {
                const response = await this.$publicApi.get(API_ROUTES.seo+`/events-page`); // eslint-disable-line
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
            this.eventCurrentPage = this.$route.query.page ? Number(this.$route.query.page) : 1;
            this.getEvent(this.$route.query.page ? Number(this.$route.query.page) : 1);
        },
    },
    components: { EventCard, Breadcrumb }
}
</script>