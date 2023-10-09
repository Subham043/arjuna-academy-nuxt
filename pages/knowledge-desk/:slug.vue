<template>
    <div>
        <Breadcrumb :title="blog?.name" :pages="[
            {
                link: '/knowledge-desk',
                name: 'Knowledge Desk'
            },
            {
                link: '',
                name: blog?.name
            }
        ]" />

        <div class="blog-details-area pt-70 pb-70">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8">
                        <div class="blog-details-content pr-20">
                            <template v-if="!blogLoading">
                                <div class="blog-preview-img">
                                    <img v-lazy-load :data-src="blog?.image" :alt="blog?.image_alt" :title="blog?.image_title" />
                                </div>
                                <ul class="tag-list">
                                    <li>
                                        <span class="svg-icon">
                                            <font-awesome-icon :icon="['fa', 'user']"  />&nbsp; {{ blog?.published }}
                                        </span>
                                    </li>
                                    <li>
                                        <span class="svg-icon">
                                            <font-awesome-icon :icon="['fa', 'user']"  />&nbsp;
                                            <NuxtLink to="/leadership-team" v-html="blog?.author_name" />
                                        </span>
                                    </li>
                                </ul>
                                <h1 v-html="blog?.heading" />
                                <div v-html="blog?.description" />
                                <div class="article-share">
                                    <div class="row align-items-center justify-content-between">
                                        <div v-if="prev_blog !== null" class="col-lg-auto col-md-auto">
                                            <div class="pagination-area m-0">
                                                <NuxtLink
                                                    :to="prev_blog !== null ? `/knowledge-desk/${prev_blog?.slug}` : '#'"
                                                    title="previous blog" class="prev page-numbers">
                                                    <i class="flaticon-left-arrow"></i>
                                                </NuxtLink>
                                            </div>
                                        </div>
                                        <div class="col-lg-auto col-md-auto">
                                            <div class="article-social-icon">
                                                <ul class="social-icon">
                                                    <li class="title">Share :</li>
                                                    <li>
                                                        <a :href="`https://www.facebook.com/share.php?u=https://www.aaaedu.in/knowledge-desk/${blog?.slug}&title=${blog?.name}`"
                                                            target="_blank">
                                                            <span class="svg-icon">
                                                                <font-awesome-icon :icon="['fab', 'facebook-f']"  />
                                                            </span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a :href="`https://twitter.com/share?text=${blog?.name}&url=https://www.aaaedu.in/knowledge-desk/${blog?.slug}`"
                                                            target="_blank">
                                                            <span class="svg-icon">
                                                                <font-awesome-icon :icon="['fab', 'twitter']"  />
                                                            </span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a :href="`https://www.linkedin.com/shareArticle?mini=true&url=https://www.aaaedu.in/knowledge-desk/${blog?.slug}&title=${blog?.name}&source=${blog?.name}`"
                                                            target="_blank">
                                                            <span class="svg-icon">
                                                                <font-awesome-icon :icon="['fab', 'linkedin']"  />
                                                            </span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div v-if="next_blog !== null" class="col-lg-auto col-md-auto">
                                            <div class="pagination-area m-0">
                                                <NuxtLink
                                                    :to="next_blog !== null ? `/knowledge-desk/${next_blog?.slug}` : '#'"
                                                    title="next blog" class="next page-numbers">
                                                    <i class="flaticon-chevron"></i>
                                                </NuxtLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="courses-details-area pb-70" id="blog-comment-area">
                                    <div class="courses-details-contact">
                                        <div class="tab courses-details-tab">
                                            <div class="tab_content current active">
                                                <div class="tabs_item">
                                                    <div class="courses-details-tab-content">
                                                        <div class="courses-details-review-form">
                                                            <h3>Comments:</h3>
                                                            <template v-if="blogComment.length>0">
                                                                <div v-for="(item, i) in blogComment" :key="i" class="review-comments">
                                                                    <div class="review-item">
                                                                        <div class="content">
                                                                            <img data-src="/images/avatar.webp"
                                                                                alt="Images" v-lazy-load/>
                                                                            <div class="content-dtls">
                                                                                <h4 v-html="item.name" />
                                                                                <span v-html="item.comment_on" />
                                                                            </div>
                                                                        </div>
                                                                        <p v-html="item.comment" />
                                                                    </div>
                                                                </div>
                                                                <div v-if="blogCommentLastPage!==blogCommentPage" class="text-center">
                                                                    <button type="button" :disabled="blogCommentLoading" @click="++blogCommentPage"
                                                                        class="default-btn">
                                                                        <template v-if="!blogCommentLoading">
                                                                            Load More Comments
                                                                        </template>
                                                                        <div v-else class="spinner-border" role="status"></div>
                                                                    </button>
                                                                </div>
                                                            </template>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="comments-form">
                                    <div class="contact-form">
                                        <h4>Leave A Comment</h4>
                                        <ValidationObserver ref="form" v-slot="{ handleSubmit }">
                                            <form id="contactForm" @submit.prevent="handleSubmit(formHandler)">
                                                <div class="row">
                                                    <div class="col-lg-6 col-sm-6">
                                                        <div class="form-group">
                                                            <ValidationProvider v-slot="{ classes, errors }"
                                                                rules="required|alpha_spaces" name="name">
                                                                <input type="text" name="name" v-model="name" id="name"
                                                                    class="form-control" data-error="Please enter your name"
                                                                    placeholder="Your Name" />
                                                                <div :class="classes">{{ errors[0] }}</div>
                                                            </ValidationProvider>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-6 col-sm-6">
                                                        <div class="form-group">
                                                            <ValidationProvider v-slot="{ classes, errors }"
                                                                rules="required|email" name="email">
                                                                <input type="email" name="email" id="email"
                                                                    class="form-control" v-model="email"
                                                                    data-error="Please enter your email"
                                                                    placeholder="Your Email" />
                                                                <div :class="classes">{{ errors[0] }}</div>
                                                            </ValidationProvider>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-12 col-md-12">
                                                        <div class="form-group">
                                                            <ValidationProvider v-slot="{ classes, errors }"
                                                                rules="required|custom_message" name="comment">
                                                                <textarea name="message" v-model="comment"
                                                                    class="form-control" id="message" cols="30" rows="8"
                                                                    data-error="Write your message"
                                                                    placeholder="Comment..."></textarea>
                                                                <div :class="classes">{{ errors[0] }}</div>
                                                            </ValidationProvider>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-12 col-md-12">
                                                        <button type="submit" :disabled="commentPostLoading"
                                                            class="default-btn">
                                                            <template v-if="!commentPostLoading">
                                                                Post A Comment
                                                            </template>
                                                            <div v-else class="spinner-border" role="status"></div>
                                                        </button>
                                                    </div>
                                                </div>
                                            </form>
                                        </ValidationObserver>
                                    </div>
                                </div>
                            </template>
                            <template v-else>
                                <PageDetailLoading />
                            </template>
                        </div>
                    </div>
                    <div class="col-lg-4" id="popular-blog-area">
                        <div class="side-bar-area">
                            <div class="side-bar-widget">
                                <h3 class="title">Popular post</h3>
                                <div class="widget-popular-post">
                                    <PopularPostLoading v-if="popularBlogLoading" />
                                    <article v-if="!popularBlogLoading && popularBlog.length > 0"
                                        v-for="(item, i) in popularBlog" :key="i" class="item">
                                        <div class="info">
                                            <p>{{ item.published }}</p>
                                            <h4 class="title-text">
                                                <NuxtLink :to="`/knowledge-desk/${item.slug}`">
                                                    {{ item.name }}
                                                </NuxtLink>
                                            </h4>
                                            <p>
                                                {{ item.short_description }}
                                            </p>
                                            <hr>
                                        </div>
                                    </article>
                                    <div v-if="!popularBlogLoading && popularBlog.length > 0" class="col-12 text-center">
                                        <pagination v-model="popularBlogCurrentPage" :records="popularBlogCount"
                                            :per-page="popularBlogPerPage" :options="{ edgeNavigation:false }"
                                            @paginate="handlePopularBlogPaginationChnage" />
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
import { API_ROUTES } from '~/helper/api_routes';


export default {
    name: "BlogDetailPage",
    layout: "MainPageLayout",
    mounted() {
        this.getPopluarBlog(this.$route.query.page ? Number(this.$route.query.page) : 1);
    },
    data() {
        return {
            blogLoading: false,
            blog: null,
            prev_blog: null,
            next_blog: null,
            popularBlogLoading: false,
            popularBlog: [],
            popularBlogCount: 1,
            popularBlogCurrentPage: 1,
            popularBlogPerPage: 1,
            blogCommentLoading: false,
            blogComment: [],
            blogCommentPage: 1,
            blogCommentCount: 1,
            blogCommentPerPage: 1,
            blogCommentLastPage: 1,
            commentPostLoading: false,
            name: this.$auth.loggedIn ? this.$auth.user.name : '',
            email: this.$auth.loggedIn ? this.$auth.user.email : '',
            comment: '',
        };
    },
    head() {
        return {
            title: this.blog?.meta_title,
            meta: [
                // hid is used as unique identifier. Do not use `vmid` for it as it will not work
                {
                    hid: 'og:title',
                    name: 'og:title',
                    content: this.blog?.meta_title
                },
                {
                    hid: 'og:type',
                    name: 'og:type',
                    content: 'website'
                },
                {
                    hid: 'description',
                    name: 'description',
                    content: this.blog?.meta_description
                },
                {
                    hid: 'keywords',
                    name: 'keywords',
                    content: this.blog?.meta_keywords
                },
            ],
            script: [{
                type: 'application/ld+json',
                innerHTML: this.blog?.meta_scripts // <- set jsonld object in data or wherever you want
            }],
            __dangerouslyDisableSanitizers: ['script'],
        }
    },
    async fetch() {
        await this.getBlog();
    },
    watch: {
        $route(to, from) {
            this.handlePopularBlogPageChnage();
            if (process.client) {
                this.$scrollTo("#popular-blog-area", 0, { force: true });
            }
        },
        blog(to, from) {
            this.getBlogComment();
        },
        blogCommentPage(to, from) {
            this.getBlogComment(to);
            if (process.client) {
                this.$scrollTo("#blog-comment-area", 0, { force: true });
            }
        },
    },
    methods: {
        async getBlog() {
            this.blogLoading = true;
            try {
                const response = await this.$publicApi.get(API_ROUTES.blog + `/${this.$route.params.slug}`); // eslint-disable-line
                this.blog = response.data.blog;
                this.next_blog = response.data.next_blog;
                this.prev_blog = response.data.prev_blog;
            } catch (err) {
                // console.log(err.response);// eslint-disable-line
                this.$nuxt.context.error({
                    status: err.response.status,
                    message: err.response.data.message,
                })

            } finally {
                this.blogLoading = false;
            }
        },
        async getPopluarBlog(page = 0) {
            this.popularBlogLoading = true;
            try {
                const response = await this.$publicApi.get(API_ROUTES.blog + `?total=8&page=${page}&filter[is_popular]=true`); // eslint-disable-line
                this.popularBlog = response.data.data
                this.popularBlogCount = response?.data?.meta?.total
                this.popularBlogPerPage = response?.data?.meta?.per_page
                this.popularBlogCurrentPage = this.$route.query.page ? Number(this.$route.query.page) : 1;
            } catch (err) {
                // console.log(err.response);// eslint-disable-line
                this.$nuxt.context.error({
                    status: err.response.status,
                    message: err.response.data.message,
                })

            } finally {
                this.popularBlogLoading = false;
            }
        },
        handlePopularBlogPaginationChnage(page) {
            this.$router.push({ query: { page } });
        },
        handlePopularBlogPageChnage() {
            this.popularBlogCurrentPage = this.$route.query.page ? Number(this.$route.query.page) : 1;
            this.getPopluarBlog(this.$route.query.page ? Number(this.$route.query.page) : 1);
        },
        async formHandler() {
            this.commentPostLoading = true;
            try {
                const response = await this.$publicApi.post(API_ROUTES.blog + `/comment/${this.blog?.id}/create`, {
                    name: this.name,
                    email: this.email,
                    comment: this.comment,
                });
                this.comment = ''
                this.$refs.form.reset()
                this.$toast.success('Commented Successfully.')
            } catch (err) {
                this.$refs.form.setErrors({
                    email: err?.response?.data?.errors?.email?.length > 0 && err?.response?.data?.errors?.email[0],
                    name: err?.response?.data?.errors?.name?.length > 0 && err?.response?.data?.errors?.name[0],
                    comment: err?.response?.data?.errors?.comment?.length > 0 && err?.response?.data?.errors?.comment[0],
                });
                if (err?.response?.data?.message) this.$toast.error(err?.response?.data?.message)
                if (err?.response?.data?.error) this.$toast.error(err?.response?.data?.error)

            } finally {
                this.commentPostLoading = false;
            }
        },
        async getBlogComment(page = 1) {
            if(this.blog){
                this.blogCommentLoading = true;
                try {
                    const response = await this.$publicApi.get(API_ROUTES.blog + `/comment/${this.blog?.id}/paginate?total=8&page=${page}`); // eslint-disable-line
                    this.blogComment = [...this.blogComment, ...response.data.data]
                    this.blogCommentCount = response?.data?.meta?.total
                    this.blogCommentPerPage = response?.data?.meta?.per_page
                    this.blogCommentLastPage = response?.data?.meta?.last_page
                } catch (err) {
                    // console.log(err.response);// eslint-disable-line
                    this.$nuxt.context.error({
                        status: err.response.status,
                        message: err.response.data.message,
                    })
                } finally {
                    this.blogCommentLoading = false;
                }
            }
        },
    },
    components: { 
        Breadcrumb: () => import('~/components/Breadcrumb.vue'), 
        PageDetailLoading: () => import('~/components/PageDetailLoading.vue'), 
        PopularPostLoading: () => import('~/components/PopularPostLoading.vue') 
    }
}
</script>