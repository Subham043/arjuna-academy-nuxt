<template>
    <div>
        <Breadcrumb 
            :title="legal?.page_name"
            :pages="[
                {
                    link:'',
                    name:'Legal'
                },
                {
                    link:'',
                    name:legal?.page_name
                }
            ]"
        />

        <div class="blog-details-area pt-70 pb-70">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="blog-details-content pr-20">
                            <template v-if="!legalLoading">
                                <h1 v-html="legal?.heading" />
                                <div v-html="legal?.description" />
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
            legalLoading: false,
            legal: null,
        };
    },
    head() {
        return {
            title: this.legal?.meta_title,
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
                    content: this.legal?.meta_title
                },
                {
                    hid: 'og:type',
                    name: 'og:type',
                    content: 'website'
                },
                {
                    hid: 'description',
                    name: 'description',
                    content: this.legal?.meta_description
                },
                {
                    hid: 'keywords',
                    name: 'keywords',
                    content: this.legal?.meta_keywords
                },
            ],
            script: [{
                type: 'application/ld+json',
                innerHTML: this.legal?.meta_scripts // <- set jsonld object in data or wherever you want
            }],
            __dangerouslyDisableSanitizers: ['script'],
        }
    },
    async fetch() {
      await this.getLegal();
    },
    methods: {
        async getLegal() {
            this.legalLoading=true;
            try {
                const response = await this.$publicApi.get(API_ROUTES.legal+`/${this.$route.params.slug}`); // eslint-disable-line
                this.legal = response.data.legal;
            } catch (err) {
                // console.log(err.response);// eslint-disable-line
                this.$nuxt.context.error({
                    status: err.response.status,
                    message: err.response.data.message,
                })
    
            }finally{
                this.legalLoading=false;
            }
        },
    },
    components: { 
        Breadcrumb: () => import('~/components/Breadcrumb.vue'), 
        PageDetailLoading: () => import('~/components/PageDetailLoading.vue') 
    }
}
</script>