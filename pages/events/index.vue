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

        <div class="blog-area pt-70 pb-70" id="event-area">
            <div class="container">
                <div class="section-title mb-45 text-center">
                    <h2>Latest from our <b>events</b></h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore.
                    </p>
                </div>
                <div class="row justify-content-center">
                    <EventCardLoading v-if="eventLoading" :count="8" />
                    <div v-if="!eventLoading && event.length>0" v-for="(item, i) in event" :key="i" class="col-lg-6 col-md-6">
                        <EventCard :image="item.image" :title="item.name" :description="item.short_description" :date="item.event_date_on"  :image_alt="item.image_alt" :image_title="item.image_title" :slug="item.slug" />
                    </div>
                    <div v-if="!eventLoading && event.length>0" class="col-12 text-center">
                        <pagination v-model="eventCurrentPage" :records="eventCount" :per-page="eventPerPage"  :options="{edgeNavigation:false}" @paginate="handlePaginationChnage"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { API_ROUTES } from '~/helper/api_routes';


export default {
    name: "EventTipPage",
    layout: "MainPageLayout",
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
            link: [
                {
                    rel: 'canonical',
                    href: this.$config.mainURL + this.$route.path,
                },
            ],
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
      await this.getEvent(this.$route.query.page ? Number(this.$route.query.page) : 1);
      await this.getSeo();
    },
    watch: {
        $route(to, from) {
            this.handlePageChnage();
            if (process.client) {
                this.$scrollTo("#event-area", 0, { force: true });
            }
        }
    },
    methods: {
        async getEvent(page=0) {
            this.eventLoading=true;
            try {
                const response = await this.$publicApi.get(API_ROUTES.event+`?total=8&page=${page}&sort=-id`); // eslint-disable-line
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
    components: { 
        EventCard: () => import('~/components/EventCard.vue'), 
        Breadcrumb: () => import('~/components/Breadcrumb.vue'), 
        EventCardLoading: () => import('~/components/EventCardLoading.vue') 
    }
}
</script>