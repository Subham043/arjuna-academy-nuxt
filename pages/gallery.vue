<template>
    <div>
        <Breadcrumb 
            title="Gallery"
            :pages="[
                {
                    link:'',
                    name:'Gallery'
                }
            ]"
        />

        <div class="blog-area pt-70 pb-70" id="gallery-area">
            <div class="container">
                <div class="section-title mb-45 text-center">
                    <h2>Photo Gallery</h2>
                    <p>
                        "Photographs open doors into the past & also allow a look into the future."
                    </p>
                    <p>
                        "Reliving some of the happiest & memorable moments here"
                    </p>
                </div>
                <viewer :options="{zoom_in: false}" :images="gallery" class="row justify-content-center">
                    <BlogCardLoading v-if="galleryLoading" :count="6" />
                    <div v-if="!galleryLoading && gallery.length>0" v-for="(item, i) in gallery" :key="i" class="col-lg-4 col-md-6">
                        <div class="blog-card">
                            <img :src="item.image" data-not-lazy :alt="item.image_alt" :title="item.image_title" style="cursor: pointer;" />
                            <div class="content">
                                <h3 v-html="item.title" />
                                <p v-html="item.description" />
                            </div>
                        </div>
                    </div>
                    <div v-if="!galleryLoading && gallery.length>0" class="col-12 text-center">
                        <pagination v-model="galleryCurrentPage" :records="galleryCount" :per-page="galleryPerPage"  :options="{edgeNavigation:false}" @paginate="handlePaginationChnage"/>
                    </div>
                </viewer>
            </div>
        </div>
    </div>
</template>

<script>
import { API_ROUTES } from '~/helper/api_routes';


export default {
    name: "BlogPage",
    layout: "MainPageLayout",
    data() {
        return {
            galleryLoading: false,
            gallery: [],
            galleryCount:1,
            galleryCurrentPage: 1,
            galleryPerPage: 1,
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
      await this.getGallery(this.$route.query.page ? Number(this.$route.query.page) : 1);
      await this.getSeo();
    },
    watch: {
        $route(to, from) {
            this.handlePageChnage();
            if (process.client) {
                this.$scrollTo("#gallery-area", 0, { force: true });
            }
        }
    },
    methods: {
        async getGallery(page=0) {
            this.galleryLoading=true;
            try {
                const response = await this.$publicApi.get(API_ROUTES.gallery+`?total=9&page=${page}`); // eslint-disable-line
                this.gallery = response.data.data
                this.galleryCount = response?.data?.meta?.total
                this.galleryPerPage = response?.data?.meta?.per_page
                this.galleryCurrentPage = this.$route.query.page ? Number(this.$route.query.page) : 1;
            } catch (err) {
                // console.log(err.response);// eslint-disable-line
                this.$nuxt.context.error({
                    status: err.response.status,
                    message: err.response.data.message,
                })
    
            }finally{
                this.galleryLoading=false;
            }
        },
        handlePaginationChnage(page){
            this.$router.push({query:{page}});
        },
        handlePageChnage(){
            this.galleryCurrentPage = this.$route.query.page ? Number(this.$route.query.page) : 1;
            this.getGallery(this.$route.query.page ? Number(this.$route.query.page) : 1);
        },
        async getSeo() {
            try {
                const response = await this.$publicApi.get(API_ROUTES.seo+`/gallery-page`); // eslint-disable-line
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
    components: { 
        Breadcrumb: () => import('~/components/Breadcrumb.vue'), 
        BlogCardLoading: () => import('~/components/BlogCardLoading.vue') 
    }
}
</script>