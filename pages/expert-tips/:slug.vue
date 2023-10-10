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

        <div class="blog-details-area pt-70 pb-70">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="blog-details-content pr-20">
                            <template v-if="!expertTipLoading">
                                <ul class="tag-list">
                                    <li>
                                        <span class="svg-icon">
                                            <font-awesome-icon :icon="['fa', 'calendar-days']"  />&nbsp; {{ expertTip?.published }}
                                        </span>
                                    </li>
                                    <li>
                                        <span class="svg-icon">
                                            <font-awesome-icon :icon="['fa', 'user']"  />&nbsp;
                                            <NuxtLink to="/leadership-team" :aria-label="expertTip?.author_name" v-html="expertTip?.author_name" />
                                        </span>
                                    </li>
                                </ul>
                                <h1 v-html="expertTip?.heading" />
                                <div v-html="expertTip?.description" />
                                <div class="article-share">
                                    <div class="row align-items-center justify-content-between">
                                        <div v-if="prev_expertTip!==null" class="col-lg-auto col-md-auto">
                                            <div class="pagination-area m-0">
                                                <NuxtLink :to="prev_expertTip!==null ? `/expert-tips/${prev_expertTip?.slug}` : '#'" title="previous expert tip" class="prev page-numbers" aria-label="previous expert tip">
                                                    <i class="flaticon-left-arrow"></i>
                                                </NuxtLink>
                                            </div>
                                        </div>
                                        <div class="col-lg-auto col-md-auto">
                                            <div class="article-social-icon">
                                                <ul class="social-icon">
                                                    <li class="title">Share :</li>
                                                    <li>
                                                        <a aria-label="facebook share" :href="`https://www.facebook.com/share.php?u=https://www.aaaedu.in/expert-tips/${expertTip?.slug}&title=${expertTip?.name}`" target="_blank">
                                                            <span class="svg-icon">
                                                                <font-awesome-icon :icon="['fab', 'facebook-f']"  />
                                                            </span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a aria-label="twitter share" :href="`https://twitter.com/share?text=${expertTip?.name}&url=https://www.aaaedu.in/expert-tips/${expertTip?.slug}`" target="_blank">
                                                            <span class="svg-icon">
                                                                <font-awesome-icon :icon="['fab', 'twitter']"  />
                                                            </span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a aria-label="linkedin share" :href="`https://www.linkedin.com/shareArticle?mini=true&url=https://www.aaaedu.in/expert-tips/${expertTip?.slug}&title=${expertTip?.name}&source=${expertTip?.name}`" target="_blank">
                                                            <span class="svg-icon">
                                                                <font-awesome-icon :icon="['fab', 'linkedin']"  />
                                                            </span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div v-if="next_expertTip!==null" class="col-lg-auto col-md-auto">
                                            <div class="pagination-area m-0">
                                                <NuxtLink :to="next_expertTip!==null ? `/expert-tips/${next_expertTip?.slug}` : '#'" title="next expert tip" class="next page-numbers" aria-label="next expert tip">
                                                    <i class="flaticon-chevron"></i>
                                                </NuxtLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </template>
                            <template v-else>
                                <PageDetailLoading :image="false" />
                            </template>
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
    name: "ExpertTipDetailPage",
    layout: "MainPageLayout",
    data() {
        return {
            expertTipLoading: false,
            expertTip: null,
            prev_expertTip: null,
            next_expertTip: null,
        };
    },
    head() {
        return {
            title: this.expertTip?.meta_title,
            meta: [
            // hid is used as unique identifier. Do not use `vmid` for it as it will not work
                {
                    hid: 'og:title',
                    name: 'og:title',
                    content: this.expertTip?.meta_title
                },
                {
                    hid: 'og:type',
                    name: 'og:type',
                    content: 'website'
                },
                {
                    hid: 'description',
                    name: 'description',
                    content: this.expertTip?.meta_description
                },
                {
                    hid: 'keywords',
                    name: 'keywords',
                    content: this.expertTip?.meta_keywords
                },
            ],
            script: [{
                type: 'application/ld+json',
                innerHTML: this.expertTip?.meta_scripts // <- set jsonld object in data or wherever you want
            }],
            __dangerouslyDisableSanitizers: ['script'],
        }
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
    components: { 
        Breadcrumb: () => import('~/components/Breadcrumb.vue'), 
        PageDetailLoading: () => import('~/components/PageDetailLoading.vue')
    }
}
</script>