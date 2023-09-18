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

        <div class="event-details-area pt-100 pb-70">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8">
                        <template v-if="!eventLoading">
                            <div class="event-details-content pr-20">
                                <div class="event-preview-img">
                                    <img :src="event?.image" :alt="event?.image_alt" :title="event?.image_title" />
                                </div>
                                <h1>{{ event?.heading }}</h1>
                                <div v-html-safe="event?.description" />
                                <h3 class="event-details-mt-30">Our speakers</h3>
                                <div class="row justify-content-center event-details-mt-30">
                                    <div v-for="(item, i) in event?.speakers" :key="i" class="col-lg-3 col-md-6">
                                        <div class="instructors-item instructors-item-bg">
                                            <div class="instructors-img">
                                                <img :src="item.image" :alt="item.image_alt" :title="item.image_title"  />
                                            </div>
                                            <div class="content">
                                                <h3>
                                                    {{ item.name }}
                                                </h3>
                                                <span>{{ item.designation }}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </template>
                        <template v-else>
                            <el-skeleton style="width: 100%" animated>
                                <template slot="template">
                                    <el-skeleton-item variant="image" style="width: 100%; height: 440px;" />
                                    <div style="padding: 14px;">
                                        <el-skeleton-item variant="p" style="width: 50%" />
                                        <br/>
                                        <el-skeleton-item variant="text" style="width: 100%;" />
                                        <br/>
                                        <el-skeleton-item variant="text" style="width: 100%;" />
                                        <br/>
                                        <el-skeleton-item variant="text" style="width: 100%;" />
                                        <br/>
                                        <el-skeleton-item variant="text" style="width: 100%;" />
                                        <br/>
                                        <el-skeleton-item variant="text" style="width: 100%;" />
                                        <br/>
                                        <el-skeleton-item variant="text" style="width: 50%;" />
                                    </div>
                                </template>
                            </el-skeleton>
                        </template>
                    </div>
                    <div class="col-lg-4">
                        <template v-if="!eventLoading">
                            <div class="event-sidebar">
                                <h3 class="title">Events description</h3>
                                <ul>
                                    <li>Date: <span>{{ event?.event_date_on }}</span></li>
                                    <li v-for="(item, i) in event?.specifications" :key="i">
                                        {{ item.title }}: <span>{{ item.description }}</span>
                                    </li>
                                </ul>
                            </div>
                        </template>
                        <div class="event-sidebar">
                            <h3 class="title">Upcoming Events</h3>
                            <article v-if="popularEventLoading" class="item">
                                <div  v-for="i in 8" :key="i" class="info">
                                    <el-skeleton style="width: 100%" animated>
                                        <template slot="template">
                                            <el-skeleton-item variant="p" style="width: 50%" />
                                            <br/>
                                            <el-skeleton-item variant="text" style="width: 100%;" />
                                        </template>
                                    </el-skeleton>
                                    <hr>
                                </div>
                            </article>
                            <article v-if="!popularEventLoading && popularEvent.length>0" v-for="(item, i) in popularEvent" :key="i" class="item">
                                <div class="info">
                                    <NuxtLink :to="`/events/${item.slug}`">
                                        <h4 class="title-text">
                                            {{ item.name }}
                                        </h4>
                                    </NuxtLink>
                                    <p>
                                        {{ item.short_description }}
                                    </p>
                                    <hr>
                                </div>
                            </article>
                            <div v-if="!popularEventLoading && popularEvent.length>0" class="col-12 text-center">
                                <pagination v-model="popularEventCurrentPage" :records="popularEventCount" :per-page="popularEventPerPage"  :options="{chunk:9, chunksNavigation:'scroll'}" @paginate="handlePopularEventPaginationChnage"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    </div>
</template>

<script>
import Breadcrumb from '~/components/Breadcrumb.vue';
import { API_ROUTES } from '~/helper/api_routes';


export default {
    name: "EventDetailPage",
    layout: "MainPageLayout",
    mounted() {
        // eslint-disable-next-line nuxt/no-env-in-hooks
        if (process.client) {
            this.$scrollTo("#__nuxt", 0, { force: true });
        }
        this.getPopluarEvent();
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
            blog_data: [
                {
                    title: "All that is wrong with codding in the field of apprentices",
                    description: "Lorem ipsum dolor sit amet, constetur adipiscing elit, sed do eiusmod tempor incididunt.",
                    image: "/images/blog/blog-img4.jpg"
                },
                {
                    title: "How to use technology to adapt your talent to the world",
                    description: "Lorem ipsum dolor sit amet, constetur adipiscing elit, sed do eiusmod tempor incididunt.",
                    image: "/images/blog/blog-img2.jpg"
                },
                {
                    title: "Here are the things to look for when selecting an online course",
                    description: "Lorem ipsum dolor sit amet, constetur adipiscing elit, sed do eiusmod tempor incididunt.",
                    image: "/images/blog/blog-img5.jpg"
                },
                {
                    title: "All that is wrong with codding in the field of apprentices",
                    description: "Lorem ipsum dolor sit amet, constetur adipiscing elit, sed do eiusmod tempor incididunt.",
                    image: "/images/blog/blog-img4.jpg"
                },
                {
                    title: "How to use technology to adapt your talent to the world",
                    description: "Lorem ipsum dolor sit amet, constetur adipiscing elit, sed do eiusmod tempor incididunt.",
                    image: "/images/blog/blog-img2.jpg"
                },
                {
                    title: "Here are the things to look for when selecting an online course",
                    description: "Lorem ipsum dolor sit amet, constetur adipiscing elit, sed do eiusmod tempor incididunt.",
                    image: "/images/blog/blog-img5.jpg"
                },
            ],
        };
    },
    async fetch() {
      await this.getEvent();
    },
    watch: {
        $route(to, from) {
            this.handlePopularEventPageChnage();
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
                if(err?.response?.data?.message) this.$toast.error(err?.response?.data?.message)
                if(err?.response?.data?.error) this.$toast.error(err?.response?.data?.error)
    
            }finally{
                this.eventLoading=false;
            }
        },
        async getPopluarEvent(page=0) {
            this.popularEventLoading=true;
            try {
                const response = await this.$publicApi.get(API_ROUTES.event+`?total=8&page=${page}`); // eslint-disable-line
                this.popularEvent = response.data.data
                this.popularEventCount = response?.data?.meta?.total
                this.popularEventPerPage = response?.data?.meta?.per_page
                this.popularEventCurrentPage = this.$route.query.page ? Number(this.$route.query.page) : 1;
            } catch (err) {
                // console.log(err.response);// eslint-disable-line
                if(err?.response?.data?.message) this.$toast.error(err?.response?.data?.message)
                if(err?.response?.data?.error) this.$toast.error(err?.response?.data?.error)
    
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
    components: { Breadcrumb }
}
</script>