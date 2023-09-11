<template>
    <div>
        <Breadcrumb :title="blog.name" />

        <div class="blog-details-area pt-100 pb-70">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8">
                        <div class="blog-details-content pr-20">
                            <template v-if="!blogLoading">
                                <div class="blog-preview-img">
                                    <img :src="blog.image"
                                        :alt="blog.image_alt" :title="blog.image_title" />
                                </div>
                                <ul class="tag-list">
                                    <li><i class="ri-calendar-todo-fill"></i> {{ blog.published }}</li>
                                    <li>
                                        <i class="ri-user-fill"></i>
                                        <NuxtLink to="/leadership-team">{{ blog.author_name }}</NuxtLink>
                                    </li>
                                </ul>
                                <h1>{{ blog.heading }}</h1>
                                <div v-html-safe="blog.description" />
                                <div class="article-share">
                                    <div class="row align-items-center justify-content-between">
                                        <div v-if="prev_blog!==null" class="col-lg-auto col-md-auto">
                                            <div class="pagination-area m-0">
                                                <NuxtLink :to="prev_blog!==null ? `/knowledge-desk/${prev_blog.slug}` : '#'" title="previous blog" class="prev page-numbers">
                                                    <i class="flaticon-left-arrow"></i>
                                                </NuxtLink>
                                            </div>
                                        </div>
                                        <div class="col-lg-auto col-md-auto">
                                            <div class="article-social-icon">
                                                <ul class="social-icon">
                                                    <li class="title">Share :</li>
                                                    <li>
                                                        <a :href="`https://www.facebook.com/share.php?u=https://www.aaaedu.in/knowledge-desk/${blog.slug}&title=${blog.name}`" target="_blank">
                                                            <i class="ri-facebook-fill"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a :href="`https://twitter.com/share?text=${blog.name}&url=https://www.aaaedu.in/knowledge-desk/${blog.slug}`" target="_blank">
                                                            <i class="ri-twitter-fill"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a :href="`https://www.linkedin.com/shareArticle?mini=true&url=https://www.aaaedu.in/knowledge-desk/${blog.slug}&title=${blog.name}&source=${blog.name}`" target="_blank">
                                                            <i class="ri-linkedin-fill"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div v-if="next_blog!==null" class="col-lg-auto col-md-auto">
                                            <div class="pagination-area m-0">
                                                <NuxtLink :to="next_blog!==null ? `/knowledge-desk/${next_blog.slug}` : '#'" title="next blog" class="next page-numbers">
                                                    <i class="flaticon-chevron"></i>
                                                </NuxtLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="comments-form">
                                    <div class="contact-form">
                                        <h4>Leave A Reply</h4>
                                        <p>
                                            Your email address will not be published. Required fields
                                            are marked
                                        </p>
                                        <form id="contactForm">
                                            <div class="row">
                                                <div class="col-lg-6 col-sm-6">
                                                    <div class="form-group">
                                                        <input type="text" name="name" id="name" class="form-control" required
                                                            data-error="Please enter your name" placeholder="Your Name" />
                                                    </div>
                                                </div>
                                                <div class="col-lg-6 col-sm-6">
                                                    <div class="form-group">
                                                        <input type="email" name="email" id="email" class="form-control"
                                                            required data-error="Please enter your email"
                                                            placeholder="Your Email" />
                                                    </div>
                                                </div>
                                                <div class="col-lg-12 col-md-12">
                                                    <div class="form-group">
                                                        <textarea name="message" class="form-control" id="message" cols="30"
                                                            rows="8" required data-error="Write your message"
                                                            placeholder="Comment..."></textarea>
                                                    </div>
                                                </div>
                                                <div class="col-lg-12 col-md-12">
                                                    <div class="agree-label">
                                                        <input type="checkbox" id="chb1" />
                                                        <label for="chb1">
                                                            Save my info for the next comment
                                                        </label>
                                                    </div>
                                                </div>
                                                <div class="col-lg-12 col-md-12">
                                                    <button type="submit" class="default-btn">
                                                        Post A Comment
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
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
                    </div>
                    <div class="col-lg-4">
                        <div class="side-bar-area">
                            <div class="side-bar-widget">
                                <h3 class="title">Popular post</h3>
                                <div class="widget-popular-post">
                                    <article v-if="popularBlogLoading" class="item">
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
                                    <article v-if="!popularBlogLoading && popularBlog.length>0" v-for="(item, i) in popularBlog" :key="i" class="item">
                                        <div class="info">
                                            <p>{{ item.published }}</p>
                                            <h4 class="title-text">
                                                <NuxtLink :to="`/knowledge-desk/${item.slug}`">
                                                    {{ item.name }}
                                                </NuxtLink>
                                            </h4>
                                            <hr>
                                        </div>
                                    </article>
                                    <div v-if="!popularBlogLoading && popularBlog.length>0" class="col-12 text-center">
                                        <pagination v-model="popularBlogCurrentPage" :records="popularBlogCount" :per-page="popularBlogPerPage"  :options="{chunk:9, chunksNavigation:'scroll'}" @paginate="handlePopularBlogPaginationChnage"/>
                                    </div>
                                </div>
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
    name: "BlogDetailPage",
    layout: "MainPageLayout",
    mounted() {
        // eslint-disable-next-line nuxt/no-env-in-hooks
        if (process.client) {
            this.$scrollTo("#__nuxt", 0, { force: true });
        }
        this.getPopluarBlog();
    },
    data() {
        return {
            blogLoading: false,
            blog: [],
            prev_blog: null,
            next_blog: null,
            popularBlogLoading: false,
            popularBlog: [],
            popularBlogCount:1,
            popularBlogCurrentPage: 1,
            popularBlogPerPage: 1,
        };
    },
    async fetch() {
      await this.getBlog();
    },
    watch: {
        $route(to, from) {
            this.handlePopularBlogPageChnage();
        }
    },
    methods: {
        async getBlog() {
            this.blogLoading=true;
            try {
                const response = await this.$publicApi.get(API_ROUTES.blog+`/${this.$route.params.slug}`); // eslint-disable-line
                this.blog = response.data.blog;
                this.next_blog = response.data.next_blog;
                this.prev_blog = response.data.prev_blog;
            } catch (err) {
                // console.log(err.response);// eslint-disable-line
                if(err?.response?.data?.message) this.$toast.error(err?.response?.data?.message)
                if(err?.response?.data?.error) this.$toast.error(err?.response?.data?.error)
    
            }finally{
                this.blogLoading=false;
            }
        },
        async getPopluarBlog(page=0) {
            this.popularBlogLoading=true;
            try {
                const response = await this.$publicApi.get(API_ROUTES.blog+`?total=8&page=${page}&filter[is_popular]=true`); // eslint-disable-line
                this.popularBlog = response.data.data
                this.popularBlogCount = response?.data?.meta?.total
                this.popularBlogPerPage = response?.data?.meta?.per_page
                this.popularBlogCurrentPage = this.$route.query.page ? Number(this.$route.query.page) : 1;
            } catch (err) {
                // console.log(err.response);// eslint-disable-line
                if(err?.response?.data?.message) this.$toast.error(err?.response?.data?.message)
                if(err?.response?.data?.error) this.$toast.error(err?.response?.data?.error)
    
            }finally{
                this.popularBlogLoading=false;
            }
        },
        handlePopularBlogPaginationChnage(page){
            this.$router.push({query:{page}});
        },
        handlePopularBlogPageChnage(){
            this.popularBlogCurrentPage = this.$route.query.page ? Number(this.$route.query.page) : 1;
            this.getPopluarBlog(this.$route.query.page ? Number(this.$route.query.page) : 1);
        },
    },
    components: { Breadcrumb }
}
</script>