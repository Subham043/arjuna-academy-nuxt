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

        <div class="blog-area pt-70 pb-70" id="blog-area">
            <div class="container">
                <div class="section-title mb-45 text-center">
                    <h2>Latest from our <b>blogs</b></h2>
                    <p>
                        Explore The Latest Updates About NEET, JEE, IIT Exams And Foundation Courses
                    </p>
                </div>
                <div class="row justify-content-center">
                    <BlogCardLoading v-if="blogLoading" :count="9" />
                    <div v-if="!blogLoading && blog.length>0" v-for="(item, i) in blog" :key="i" class="col-lg-4 col-md-6">
                        <BlogCard :image="item.image" :title="item.name" :description="item.short_description" :date="item.published" :slug="item.slug" :author="item.author_name"  :image_alt="item.image_alt" :image_title="item.image_title" />
                    </div>
                    <div v-if="!blogLoading && blog.length>0" class="col-12 text-center">
                        <pagination v-model="blogCurrentPage" :records="blogCount" :per-page="blogPerPage"  :options="{edgeNavigation:false}" @paginate="handlePaginationChnage"/>
                    </div>
                </div>
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
      await this.getBlog(this.$route.query.page ? Number(this.$route.query.page) : 1);
      await this.getSeo();
    },
    watch: {
        $route(to, from) {
            this.handlePageChnage();
            if (process.client) {
                this.$scrollTo("#blog-area", 0, { force: true });
            }
        }
    },
    methods: {
        async getBlog(page=0) {
            this.blogLoading=true;
            try {
                const response = await this.$publicApi.get(API_ROUTES.blog+`?total=9&page=${page}&sort=-published_on`); // eslint-disable-line
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
    components: { 
        BlogCard: () => import('~/components/BlogCard.vue'), 
        Breadcrumb: () => import('~/components/Breadcrumb.vue'), 
        BlogCardLoading: () => import('~/components/BlogCardLoading.vue') 
    }
}
</script>