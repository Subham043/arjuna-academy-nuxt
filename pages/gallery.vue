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

        <div class="blog-area pt-100 pb-70">
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
                    <div v-if="galleryLoading" class="row justify-content-center">
                        <div  v-for="i in 9" :key="i" class="col-lg-4 col-md-6">
                            <el-skeleton style="width: 100%" animated>
                                <template slot="template">
                                    <el-skeleton-item variant="image" style="width: 100%; height: 240px;" />
                                    <div style="padding: 14px;">
                                        <el-skeleton-item variant="p" style="width: 50%" />
                                        <br/>
                                        <el-skeleton-item variant="text" style="width: 100%;" />
                                        <br/>
                                        <el-skeleton-item variant="text" style="width: 50%;" />
                                    </div>
                                </template>
                            </el-skeleton>
                        </div>
                    </div>
                    <div v-if="!galleryLoading && gallery.length>0" v-for="(item, i) in gallery" :key="i" class="col-lg-4 col-md-6">
                        <div class="blog-card">
                            <img :src="item.image" :alt="item.image_alt" :title="item.image_title" style="cursor: pointer;" />
                            <div class="content">
                                <h3>
                                    {{ item.title }}
                                </h3>
                                <p>
                                    {{ item.description }}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div v-if="!galleryLoading && gallery.length>0" class="col-12 text-center">
                        <pagination v-model="galleryCurrentPage" :records="galleryCount" :per-page="galleryPerPage"  :options="{chunk:9, chunksNavigation:'scroll'}" @paginate="handlePaginationChnage"/>
                    </div>
                </viewer>
            </div>
        </div>
    </div>
</template>

<script>
import Breadcrumb from '~/components/Breadcrumb.vue';
import { API_ROUTES } from '~/helper/api_routes';


export default {
    name: "BlogPage",
    layout: "MainPageLayout",
    mounted() {
        // eslint-disable-next-line nuxt/no-env-in-hooks
        if (process.client) {
            this.$scrollTo("#__nuxt", 0, { force: true });
        }
    },
    data() {
        return {
            galleryLoading: false,
            gallery: [],
            galleryCount:1,
            galleryCurrentPage: 1,
            galleryPerPage: 1,
        };
    },
    async fetch() {
      await this.getGallery();
    },
    watch: {
        $route(to, from) {
            this.handlePageChnage();
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
                if(err?.response?.data?.message) this.$toast.error(err?.response?.data?.message)
                if(err?.response?.data?.error) this.$toast.error(err?.response?.data?.error)
    
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
    },
    components: { Breadcrumb }
}
</script>