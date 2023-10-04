<template>
    <div>
        <Breadcrumb 
            title="Leadership Team"
            :pages="[
                {
                    link:'',
                    name:'Leadership Team'
                }
            ]"
        />

        <template v-if="managementLoading">
            <div v-for="i in 4" :key="i" :class="`instructors-details-area ${i===1 && 'pt-100'} pb-70`">
                <div v-if="(i+1)%2===0" class="container">
                    <div class="row">
                        <div class="col-lg-5">
                            <div class="instructors-details-img faq-img">
                                <el-skeleton style="width: 100%" animated>
                                    <template slot="template">
                                        <el-skeleton-item variant="image" style="width: 100%; height: 240px;" />
                                    </template>
                                </el-skeleton>
                            </div>
                        </div>
                        <div  class="col-lg-7">
                            <div class="instructors-details-content pl-20">
                                <el-skeleton style="width: 100%" animated>
                                    <template slot="template">
                                        <el-skeleton-item variant="h2" style="width: 30%" />
                                        <br/>
                                        <el-skeleton-item variant="text" style="width: 20%;" />
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
                                    </template>
                                </el-skeleton>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-else class="container">
                    <div class="row">
    
                        <div class="col-lg-7">
                            <div class="instructors-details-content pl-20">
                                <el-skeleton style="width: 100%" animated>
                                    <template slot="template">
                                        <el-skeleton-item variant="h2" style="width: 30%" />
                                        <br/>
                                        <el-skeleton-item variant="text" style="width: 20%;" />
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
                                    </template>
                                </el-skeleton>
                            </div>
                        </div>
                        <div class="col-lg-5">
                            <div class="instructors-details-img faq-img">
                                <el-skeleton style="width: 100%" animated>
                                    <template slot="template">
                                        <el-skeleton-item variant="image" style="width: 100%; height: 240px;" />
                                    </template>
                                </el-skeleton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </template>

        <template v-if="!managementLoading && management.length>0">
            <div v-for="(item, i) in management" :key="i" :class="`instructors-details-area ${i===0 && 'pt-70'} pb-70`">
                <div v-if="(i+1)%2===0" class="container">
                    <div class="row">
                        <div class="col-lg-5">
                            <div class="instructors-details-img faq-img">
                                <img :data-src="item.image" v-lazy-load :alt="item.image_alt" :title="item.image_title" />
                                <div class="shape">
                                    <h2><span class="badge bg-warning" v-html-safe="item.designation" /></h2>
                                </div>
                            </div>
                        </div>
                        <div  class="col-lg-7">
                            <div class="instructors-details-content pl-20">
                                <h2 v-html-safe="item.name" />
                                <i class="d-inline-flex mb-3 fw-semibold text-success-emphasis bg-success-subtle " v-html-safe="item.qualification" />
                                <div v-html-safe="item.description" />
                            </div>
                        </div>
                    </div>
                </div>
                <div v-else class="container">
                    <div class="row">
    
                        <div class="col-lg-7">
                            <div class="instructors-details-content pl-20">
                                <h2 v-html-safe="item.name" />
                                <i class="d-inline-flex mb-3 fw-semibold text-success-emphasis bg-success-subtle " v-html-safe="item.qualification" />
                                <div v-html-safe="item.description" />
                            </div>
                        </div>
                        <div class="col-lg-5">
                            <div class="instructors-details-img faq-img">
                                <img :data-src="item.image" v-lazy-load :alt="item.image_alt" :title="item.image_title" />
                                <div class="shape">
                                    <h2><span class="badge bg-warning" v-html-safe="item.designation" /></h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </template>


        <div class="instructors-area instructors-area-rs pb-70">
            <div class="container">
                <div class="section-title text-center mb-45">
                    <h2>Our Faculties</h2>
                </div>
                <div v-if="staffLoading" class="row justify-content-center">
                    <div  v-for="i in 8" :key="i" class="col-lg-3 col-md-6">
                        <el-skeleton style="width: 100%" animated>
                            <template slot="template">
                            <el-skeleton-item variant="image" style="width: 100%; height: 240px;" />
                            <div style="padding: 14px;">
                                <el-skeleton-item variant="p" style="width: 50%" />
                                <br/>
                                <el-skeleton-item variant="text" style="width: 30%;" />
                            </div>
                            </template>
                        </el-skeleton>
                    </div>
                </div>
                <div v-if="!staffLoading && staff.length>0" class="row justify-content-center">
                    <div v-for="(item, i) in staff" :key="i" class="col-lg-3 col-md-4">
                        <InstructorCard :image="item.image" :image_alt="item.image_alt" :image_title="item.image_title" :name="item.name" :designation="item.designation" :description="item.description" />
                    </div>
                    <div class="col-12 text-center">
                        <pagination v-model="staffCurrentPage" :records="staffCount" :per-page="staffPerPage"  :options="{edgeNavigation:false}" @paginate="handlePaginationChnage"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { API_ROUTES } from '~/helper/api_routes';



export default {
    name: "LeadershipPage",
    layout: "MainPageLayout",
    data() {
        return {
            managementLoading: false,
            management: [],
            staffLoading: false,
            staff: [],
            staffCount:1,
            staffCurrentPage: 1,
            staffPerPage: 1,
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
      await this.getManagement();
      await this.getStaff(this.$route.query.page ? Number(this.$route.query.page) : 1);
      await this.getSeo();
    },
    watch: {
        $route(to, from) {
            if (process.client) {
                this.$scrollTo("#__nuxt", 0, { force: true });
            }
            this.handlePageChnage();
        }
    },
    mounted() {
        // eslint-disable-next-line nuxt/no-env-in-hooks
        if (process.client) {
            this.$scrollTo("#__nuxt", 0, { force: true });
        }
    },
    methods: {
        async getManagement() {
            this.managementLoading=true;
            try {
                const response = await this.$publicApi.get(API_ROUTES.management); // eslint-disable-line
                this.management = response.data.data
            } catch (err) {
                // console.log(err.response);// eslint-disable-line
                this.$nuxt.context.error({
                    status: err.response.status,
                    message: err.response.data.message,
                })

            }finally{
                this.managementLoading=false;
            }
        },
        async getStaff(page=0) {
            this.staffLoading=true;
            try {
                const response = await this.$publicApi.get(API_ROUTES.staff+`?total=12&page=${page}`); // eslint-disable-line
                this.staff = response.data.data
                this.staffCount = response?.data?.meta?.total
                this.staffPerPage = response?.data?.meta?.per_page
                this.staffCurrentPage = this.$route.query.page ? Number(this.$route.query.page) : 1;
            } catch (err) {
                // console.log(err.response);// eslint-disable-line
                this.$nuxt.context.error({
                    status: err.response.status,
                    message: err.response.data.message,
                })

            }finally{
                this.staffLoading=false;
            }
        },
        async getSeo() {
            try {
                const response = await this.$publicApi.get(API_ROUTES.seo+`/leadership-page`); // eslint-disable-line
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
            this.staffCurrentPage = this.$route.query.page ? Number(this.$route.query.page) : 1;
            this.getStaff(this.$route.query.page ? Number(this.$route.query.page) : 1);
        }
    },
    components: { 
        Breadcrumb: () => import('~/components/Breadcrumb.vue'), 
        InstructorCard: () => import('~/components/InstructorCard.vue') 
    }
}
</script>