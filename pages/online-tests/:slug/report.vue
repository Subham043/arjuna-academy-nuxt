<template>
    <div>
        <div class="inner-banner inner-banner-bg">
            <div class="container">
                <div class="inner-title text-center test-inner-title">
                    <h3>{{test?.name}}</h3>
                </div>
            </div>
        </div>


    </div>
</template>

<script>
import { API_ROUTES } from '~/helper/api_routes';

export default {
    name: "OnlineTestReportPage",
    layout: "MainPageLayout",
    middleware: ['auth'],
    data() {
        return {
            testLoading: false,
            test: null,
            is_test_enrolled: null,
        };
    },
    head() {
        return {
            title: this.test?.meta_title,
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
                    content: this.test?.meta_title
                },
                {
                    hid: 'og:type',
                    name: 'og:type',
                    content: 'website'
                },
                {
                    hid: 'description',
                    name: 'description',
                    content: this.test?.meta_description
                },
                {
                    hid: 'keywords',
                    name: 'keywords',
                    content: this.test?.meta_keywords
                },
            ],
            script: [{
                    type: 'application/ld+json',
                    innerHTML: this.test?.meta_scripts // <- set jsonld object in data or wherever you want
                }],
            __dangerouslyDisableSanitizers: ['script'],
        };
    },
    async fetch() {
        await this.getOnlineTestReport();
    },
    methods: {
        async getOnlineTestReport() {
            this.testLoading = true;
            try {
                const response = await this.$privateApi.get(API_ROUTES.tests + `/${this.$route.params.slug}/report`); // eslint-disable-line
                this.test = response.data.test;
                this.is_test_enrolled = response.data.test.is_test_enrolled;
                console.log(response);
            }
            catch (err) {
                // console.log(err);// eslint-disable-line
                this.$nuxt.context.error({
                    status: err.response.status,
                    message: err.response.data.message,
                });
            }
            finally {
                this.testLoading = false;
            }
        },
    }
}
</script>

<style scoped>
.test-inner-title{
    padding-top: 50px;
    padding-bottom: 10px;
}
</style>