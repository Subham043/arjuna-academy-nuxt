<template>
    <div>
        <Breadcrumb 
            :title="event?.name"
            :pages="[
                {
                    link:'/events',
                    name:'Events'
                },
                {
                    link:'',
                    name:event?.name
                }
            ]"
        />

        <div class="event-details-area pt-70 pb-70">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8">
                        <template v-if="!eventLoading">
                            <div class="event-details-content pr-20">
                                <div class="event-preview-img">
                                    <img v-lazy-load :data-src="event?.image" :alt="event?.image_alt" :title="event?.image_title" />
                                </div>
                                <h1 v-html="event?.heading" />
                                <div v-html="event?.description" />
                                <h3 v-if="event?.speakers.length>0" class="event-details-mt-30">Our speakers</h3>
                                <div v-if="event?.speakers.length>0" class="row justify-content-center event-details-mt-30">
                                    <div v-for="(item, i) in event?.speakers" :key="i" class="col-lg-3 col-md-6">
                                        <div class="instructors-item instructors-item-bg">
                                            <div class="instructors-img">
                                                <img v-lazy-load :data-src="item.image" :alt="item.image_alt" :title="item.image_title"  />
                                            </div>
                                            <div class="content">
                                                <h3 v-html="item?.name" />
                                                <span v-html="item?.designation" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </template>
                        <template v-else>
                            <PageDetailLoading />
                        </template>
                    </div>
                    <div class="col-lg-4">
                        <template v-if="!eventLoading">
                            <div class="event-sidebar">
                                <h3 class="title">Events description</h3>
                                <ul>
                                    <li>Date: <span>{{ event?.event_date_on }}</span></li>
                                    <li v-for="(item, i) in event?.specifications" :key="i">
                                        {{ item.title }}: <span v-html="item.description" />
                                    </li>
                                </ul>
                            </div>
                        </template>
                        <div class="event-sidebar" id="popular-event-area">
                            <h3 class="title">Upcoming Events</h3>
                            <PopularPostLoading v-if="popularEventLoading" />
                            <article v-if="!popularEventLoading && popularEvent.length>0" v-for="(item, i) in popularEvent" :key="i" class="item">
                                <div class="info">
                                    <NuxtLink :to="`/events/${item.slug}`" :aria-label="item.name">
                                        <h4 class="title-text" v-html="item.name" />
                                    </NuxtLink>
                                    <p v-html="item.short_description" />
                                    <hr>
                                </div>
                            </article>
                            <div v-if="!popularEventLoading && popularEvent.length>0" class="col-12 text-center">
                                <pagination v-model="popularEventCurrentPage" :records="popularEventCount" :per-page="popularEventPerPage"  :options="{edgeNavigation:false}" @paginate="handlePopularEventPaginationChnage"/>
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
    name: "EventDetailPage",
    layout: "MainPageLayout",
    mounted() {
        this.getPopluarEvent(this.$route.query.page ? Number(this.$route.query.page) : 1);
    },
    data() {
        return {
            eventLoading: false,
            event: null,
            popularEventLoading: false,
            popularEvent: [],
            popularEventCount:1,
            popularEventCurrentPage: 1,
            popularEventPerPage: 1,
        };
    },
    head() {
        return {
            title: this.event?.meta_title,
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
                    content: this.event?.meta_title
                },
                {
                    hid: 'og:type',
                    name: 'og:type',
                    content: 'website'
                },
                {
                    hid: 'description',
                    name: 'description',
                    content: this.event?.meta_description
                },
                {
                    hid: 'keywords',
                    name: 'keywords',
                    content: this.event?.meta_keywords
                },
            ],
            script: [{
                type: 'application/ld+json',
                innerHTML: this.event?.meta_scripts // <- set jsonld object in data or wherever you want
            }],
            __dangerouslyDisableSanitizers: ['script'],
        }
    },
    async fetch() {
      await this.getEvent();
    },
    watch: {
        $route(to, from) {
            this.handlePopularEventPageChnage();
            if (process.client) {
                this.$scrollTo("#popular-event-area", 0, { force: true });
            }
        }
    },
    methods: {
        async getEvent() {
            this.eventLoading=true;
            try {
                const response = await this.$publicApi.get(API_ROUTES.event+`/${this.$route.params.slug}`); // eslint-disable-line
                this.event = response.data.event;
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
        async getPopluarEvent(page=0) {
            this.popularEventLoading=true;
            try {
                const response = await this.$publicApi.get(API_ROUTES.event+`?total=8&page=${page}&sort=-id`); // eslint-disable-line
                this.popularEvent = response.data.data
                this.popularEventCount = response?.data?.meta?.total
                this.popularEventPerPage = response?.data?.meta?.per_page
                this.popularEventCurrentPage = this.$route.query.page ? Number(this.$route.query.page) : 1;
            } catch (err) {
                // console.log(err.response);// eslint-disable-line
                this.$nuxt.context.error({
                    status: err.response.status,
                    message: err.response.data.message,
                })
    
            }finally{
                this.popularEventLoading=false;
            }
        },
        handlePopularEventPaginationChnage(page){
            this.$router.push({query:{page}});
        },
        handlePopularEventPageChnage(){
            this.popularEventCurrentPage = this.$route.query.page ? Number(this.$route.query.page) : 1;
            this.getPopluarEvent(this.$route.query.page ? Number(this.$route.query.page) : 1);
        },
    },
    components: { 
        Breadcrumb: () => import('~/components/Breadcrumb.vue'), 
        PageDetailLoading: () => import('~/components/PageDetailLoading.vue'), 
        PopularPostLoading: () => import('~/components/PopularPostLoading.vue') 
    }
}
</script>