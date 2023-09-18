<template>
    <div>
        <Breadcrumb 
            :title="expertTip?.name"
            :pages="[
                {
                    link:'/expert-tips',
                    name:'Expert Tips'
                },
                {
                    link:'',
                    name:expertTip?.name
                }
            ]"
        />

        <div class="blog-details-area pt-100 pb-70">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="blog-details-content pr-20">
                            <template v-if="!expertTipLoading">
                                <ul class="tag-list">
                                    <li><i class="ri-calendar-todo-fill"></i> {{ expertTip?.published }}</li>
                                    <li>
                                        <i class="ri-user-fill"></i>
                                        <NuxtLink to="/leadership-team">{{ expertTip?.author_name }}</NuxtLink>
                                    </li>
                                </ul>
                                <h1>{{ expertTip?.heading }}</h1>
                                <div v-html-safe="expertTip?.description" />
                                <div class="article-share">
                                    <div class="row align-items-center justify-content-between">
                                        <div v-if="prev_expertTip!==null" class="col-lg-auto col-md-auto">
                                            <div class="pagination-area m-0">
                                                <NuxtLink :to="prev_expertTip!==null ? `/expert-tips/${prev_expertTip?.slug}` : '#'" title="previous expert tip" class="prev page-numbers">
                                                    <i class="flaticon-left-arrow"></i>
                                                </NuxtLink>
                                            </div>
                                        </div>
                                        <div class="col-lg-auto col-md-auto">
                                            <div class="article-social-icon">
                                                <ul class="social-icon">
                                                    <li class="title">Share :</li>
                                                    <li>
                                                        <a :href="`https://www.facebook.com/share.php?u=https://www.aaaedu.in/expert-tips/${expertTip?.slug}&title=${expertTip?.name}`" target="_blank">
                                                            <i class="ri-facebook-fill"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a :href="`https://twitter.com/share?text=${expertTip?.name}&url=https://www.aaaedu.in/expert-tips/${expertTip?.slug}`" target="_blank">
                                                            <i class="ri-twitter-fill"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a :href="`https://www.linkedin.com/shareArticle?mini=true&url=https://www.aaaedu.in/expert-tips/${expertTip?.slug}&title=${expertTip?.name}&source=${expertTip?.name}`" target="_blank">
                                                            <i class="ri-linkedin-fill"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div v-if="next_expertTip!==null" class="col-lg-auto col-md-auto">
                                            <div class="pagination-area m-0">
                                                <NuxtLink :to="next_expertTip!==null ? `/expert-tips/${next_expertTip?.slug}` : '#'" title="next expert tip" class="next page-numbers">
                                                    <i class="flaticon-chevron"></i>
                                                </NuxtLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </template>
                            <template v-else>
                                <el-skeleton style="width: 100%" animated>
                                    <template slot="template">
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
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Breadcrumb from '~/components/Breadcrumb.vue';
import { API_ROUTES } from '~/helper/api_routes';


export default {
    name: "ExpertTipDetailPage",
    layout: "MainPageLayout",
    mounted() {
        // eslint-disable-next-line nuxt/no-env-in-hooks
        if (process.client) {
            this.$scrollTo("#__nuxt", 0, { force: true });
        }
    },
    data() {
        return {
            expertTipLoading: false,
            expertTip: null,
            prev_expertTip: null,
            next_expertTip: null,
        };
    },
    async fetch() {
      await this.getExpertTip();
    },
    methods: {
        async getExpertTip() {
            this.expertTipLoading=true;
            try {
                const response = await this.$publicApi.get(API_ROUTES.expertTip+`/${this.$route.params.slug}`); // eslint-disable-line
                this.expertTip = response.data.expertTip;
                this.next_expertTip = response.data.next_expertTip;
                this.prev_expertTip = response.data.prev_expertTip;
            } catch (err) {
                // console.log(err.response);// eslint-disable-line
                this.$nuxt.context.error({
                    status: err.response.status,
                    message: err.response.data.message,
                })
    
            }finally{
                this.expertTipLoading=false;
            }
        },
    },
    components: { Breadcrumb }
}
</script>