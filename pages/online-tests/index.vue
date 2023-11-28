<template>
    <div>
        <Breadcrumb 
            title="Online Test"
            :pages="[
                {
                    link:'',
                    name:'Online Test'
                }
            ]"
        />

        <div class="blog-area pt-70 pb-70" id="blog-area">
            <div class="container">
                <div class="section-title mb-45 text-center">
                    <h2>Latest from our <b>Online Tests</b></h2>
                    <p>
                        Explore The Latest Updates About NEET, JEE, IIT Exams And Foundation Courses
                    </p>
                    <div style="text-align:right;">
                        <el-select v-model="status" placeholder="Select">
                            <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <OnlineTestCardLoading v-if="testLoading" :count="9" />
                    <div v-if="!testLoading && test.length>0" v-for="(item, i) in test" :key="i" class="col-lg-4 col-md-6">
                        <OnlineTestCard :image="item.image" :title="item.name" :description="item.short_description" :is_paid="item.is_paid" :slug="item.slug" :amount="item.amount"  :image_alt="item.image_alt" :image_title="item.image_title" :enrollment="item.is_test_enrolled" />
                    </div>
                    <div v-if="!testLoading && test.length>0" class="col-12 text-center">
                        <pagination v-model="testCurrentPage" :records="testCount" :per-page="testPerPage"  :options="{edgeNavigation:false}" @paginate="handlePaginationChnage"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { API_ROUTES } from '~/helper/api_routes';


export default {
    name: "OnlineTestPage",
    layout: "MainPageLayout",
    middleware: ['auth'],
    data() {
        return {
            testLoading: false,
            status: 'All',
            options: [{
                value: 'All',
                label: 'All'
            }, {
                value: 'Pending',
                label: 'Pending'
            }, {
                value: 'Ongoing',
                label: 'Ongoing'
            }, {
                value: 'Completed',
                label: 'Completed'
            }, {
                value: 'Eliminated',
                label: 'Eliminated'
            }],
            test: [],
            testCount:1,
            testCurrentPage: 1,
            testPerPage: 1,
            seo: {
                meta_title:'Online Tests',
                meta_description:'Online Tests',
                meta_keywords:'Online Tests',
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
        }
    },
    async fetch() {
      await this.getTest(this.$route.query.page ? Number(this.$route.query.page) : 1);
    },
    watch: {
        $route(to, from) {
            this.handlePageChnage();
            if (process.client) {
                this.$scrollTo("#test-area", 0, { force: true });
            }
        },
        status(to, from) {
            this.getTest();
        }
    },
    methods: {
        async getTest(page=0) {
            this.testLoading=true;
            try {
                const filter = this.status=='All' ? "" : `&filter[has_status]=${this.status}`;
                const response = await this.$privateApi.get(API_ROUTES.tests+`?total=9&page=${page}${filter}`); // eslint-disable-line
                this.test = response.data.data
                this.testCount = response?.data?.meta?.total
                this.testPerPage = response?.data?.meta?.per_page
                this.testCurrentPage = this.$route.query.page ? Number(this.$route.query.page) : 1;
            } catch (err) {
                // console.log(err);// eslint-disable-line
                this.$nuxt.context.error({
                    status: err.response.status,
                    message: err.response.data.message,
                })
    
            }finally{
                this.testLoading=false;
            }
        },
        handlePaginationChnage(page){
            this.$router.push({query:{page}});
        },
        handlePageChnage(){
            this.testCurrentPage = this.$route.query.page ? Number(this.$route.query.page) : 1;
            this.getTest(this.$route.query.page ? Number(this.$route.query.page) : 1);
        },
    },
    components: { 
        OnlineTestCard: () => import('~/components/OnlineTestCard.vue'), 
        Breadcrumb: () => import('~/components/Breadcrumb.vue'), 
        OnlineTestCardLoading: () => import('~/components/OnlineTestCardLoading.vue') 
    }
}
</script>