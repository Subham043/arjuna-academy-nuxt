<template>
    <div>
        <Breadcrumb 
            title="Knowledge Desk"
            :pages="[
                {
                    link:'',
                    name:'Knowledge Desk'
                }
            ]"
        />

        <div class="blog-area pt-100 pb-70">
            <div class="container">
                <div class="section-title mb-45 text-center">
                    <h2>Latest from our <b>blogs</b></h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore.
                    </p>
                </div>
                <div class="row justify-content-center">
                    <div v-if="blogLoading" class="row justify-content-center">
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
                    <div v-if="!blogLoading && blog.length>0" v-for="(item, i) in blog" :key="i" class="col-lg-4 col-md-6">
                        <BlogCard :image="item.image" :title="item.name" :description="item.short_description" :date="item.published" :slug="item.slug" :author="item.author_name" />
                    </div>
                    <div v-if="!blogLoading && blog.length>0" class="col-12 text-center">
                        <pagination v-model="blogCurrentPage" :records="blogCount" :per-page="blogPerPage"  :options="{chunk:9, chunksNavigation:'scroll'}" @paginate="handlePaginationChnage"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BlogCard from '~/components/BlogCard.vue';
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
            blogLoading: false,
            blog: [],
            blogCount:1,
            blogCurrentPage: 1,
            blogPerPage: 1,
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
      await this.getBlog();
      await this.getSeo();
    },
    watch: {
        $route(to, from) {
            this.handlePageChnage();
        }
    },
    methods: {
        async getBlog(page=0) {
            this.blogLoading=true;
            try {
                const response = await this.$publicApi.get(API_ROUTES.blog+`?total=9&page=${page}`); // eslint-disable-line
                this.blog = response.data.data
                this.blogCount = response?.data?.meta?.total
                this.blogPerPage = response?.data?.meta?.per_page
                this.blogCurrentPage = this.$route.query.page ? Number(this.$route.query.page) : 1;
            } catch (err) {
                // console.log(err.response);// eslint-disable-line
                this.$nuxt.context.error({
                    status: err.response.status,
                    message: err.response.data.message,
                })
    
            }finally{
                this.blogLoading=false;
            }
        },
        async getSeo() {
            try {
                const response = await this.$publicApi.get(API_ROUTES.seo+`/blogs-page`); // eslint-disable-line
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
            this.blogCurrentPage = this.$route.query.page ? Number(this.$route.query.page) : 1;
            this.getBlog(this.$route.query.page ? Number(this.$route.query.page) : 1);
        },
    },
    components: { BlogCard, Breadcrumb }
}
</script>