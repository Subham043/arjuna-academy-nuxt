<template>
    <div>
        <Breadcrumb 
            :title="achieverCategory?.name"
            :pages="[
                {
                    link:'',
                    name:achieverCategory?.name
                }
            ]"
        />

        <div class="blog-area pt-70 pb-70" id="achiever-area">
            <div class="container">
                <div v-if="!achieverCategoryLoading" class="section-title mb-45 text-center">
                    <h2 v-html="achieverCategory?.heading" />
                    <p v-html="achieverCategory?.description" />
                </div>
                <div v-if="achieverCategoryLoading" class="section-title mb-45 text-center">
                    <el-skeleton style="width: 100%" animated>
                        <template slot="template">
                            <el-skeleton-item variant="h1" style="width: 30%" />
                            <br/>
                            <el-skeleton-item variant="text" style="width: 50%;" />
                            <br/>
                            <el-skeleton-item variant="text" style="width: 50%;" />
                        </template>
                    </el-skeleton>
                </div>
                <AchieverStudentLoading v-if="achieverStudentLoading" :count="8" />
                <div v-if="!achieverStudentLoading && achieverStudent.length>0" class="row justify-content-center">
                    <div v-for="(item, i) in achieverStudent" :key="i" class="col-lg-3 col-md-6">
                        <AchieverStudentCard :image="item.image" :image_alt="item.image_alt" :image_title="item.image_title" :name="item.name" :rank="item.rank" :college="item.college" />
                    </div>
                    <div v-if="!achieverStudentLoading && achieverStudent.length>0" class="col-12 text-center">
                        <pagination v-model="achieverStudentCurrentPage" :records="achieverStudentCount" :per-page="achieverStudentPerPage"  :options="{edgeNavigation:false}" @paginate="handleAchieverStudentPaginationChnage"/>
                    </div>
                </div>
            </div>
        </div>


    </div>
</template>

<script>
import { API_ROUTES } from '~/helper/api_routes';



export default {
    name: "AchieversPage",
    layout: "MainPageLayout",
    data() {
        return {
            achieverCategoryLoading: false,
            achieverCategory: null,
            achieverStudentLoading: false,
            achieverStudent: [],
            achieverStudentCount:1,
            achieverStudentCurrentPage: 1,
            achieverStudentPerPage: 1,
        };
    },
    head() {
        return {
            title: this.achieverCategory?.meta_title,
            meta: [
                // hid is used as unique identifier. Do not use `vmid` for it as it will not work
                {
                    hid: 'og:title',
                    name: 'og:title',
                    content: this.achieverCategory?.meta_title
                },
                {
                    hid: 'og:type',
                    name: 'og:type',
                    content: 'website'
                },
                {
                    hid: 'description',
                    name: 'description',
                    content: this.achieverCategory?.meta_description
                },
                {
                    hid: 'keywords',
                    name: 'keywords',
                    content: this.achieverCategory?.meta_keywords
                },
            ],
            script: [{
                type: 'application/ld+json',
                innerHTML: this.achieverCategory?.meta_scripts // <- set jsonld object in data or wherever you want
            }],
            __dangerouslyDisableSanitizers: ['script'],
        }
    },
    async fetch() {
        await this.getAchieverCategory();
        await this.getAchieverStudent(this.$route.query.page ? Number(this.$route.query.page) : 1);
    },
    watch: {
        $route(to, from) {
            this.handleAchieverStudentPageChnage();
            if (process.client) {
                this.$scrollTo("#achiever-area", 0, { force: true });
            }
        }
    },
    methods: {
        async getAchieverCategory() {
            this.achieverCategoryLoading=true;
            try {
                const response = await this.$publicApi.get(API_ROUTES.achieverCategory+`/${this.$route.params.slug}`); // eslint-disable-line
                this.achieverCategory = response.data.achiverCategory;
            } catch (err) {
                // console.log(err);// eslint-disable-line
                this.$nuxt.context.error({
                    status: err.response.status,
                    message: err.response.data.message,
                })
            }finally{
                this.achieverCategoryLoading=false;
            }
        },
        async getAchieverStudent(page=0) {
            this.achieverStudentLoading=true;
            try {
                const response = await this.$publicApi.get(API_ROUTES.achieverStudent+`?total=12&page=${page}&filter[has_categories]=${this.$route.params.slug}`); // eslint-disable-line
                this.achieverStudent = response.data.data
                this.achieverStudentCount = response?.data?.meta?.total
                this.achieverStudentPerPage = response?.data?.meta?.per_page
                this.achieverStudentCurrentPage = this.$route.query.page ? Number(this.$route.query.page) : 1;
            } catch (err) {
                // console.log(err.response);// eslint-disable-line
                this.$nuxt.context.error({
                    status: err.response.status,
                    message: err.response.data.message,
                })
    
            }finally{
                this.achieverStudentLoading=false;
            }
        },
        handleAchieverStudentPaginationChnage(page){
            this.$router.push({query:{page}});
        },
        handleAchieverStudentPageChnage(){
            this.achieverStudentCurrentPage = this.$route.query.page ? Number(this.$route.query.page) : 1;
            this.getAchieverStudent(this.$route.query.page ? Number(this.$route.query.page) : 1);
        },
    },
    components: { 
        Breadcrumb: () => import('~/components/Breadcrumb.vue'), 
        AchieverStudentLoading: () => import('~/components/AchieverStudentLoading.vue'), 
        AchieverStudentCard: () => import('~/components/AchieverStudentCard.vue')
    }
}
</script>