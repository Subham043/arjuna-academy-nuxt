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

        <div class="blog-area pt-70 pb-70">
            <div class="container">
                <div v-if="!achieverCategoryLoading" class="section-title mb-45 text-center">
                    <h2>{{ achieverCategory?.heading }}</h2>
                    <p>
                        {{ achieverCategory?.description }}
                    </p>
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
                <div class="row justify-content-center">
                    <div  v-if="achieverStudentLoading" v-for="i in 8" :key="i" class="col-lg-3 col-md-6">
                        <el-skeleton style="width: 100%" animated>
                            <template slot="template">
                                <div class="achiever-detail">
                                    <div class="achiever-detail-container pb-0 text-center">
                                        <el-skeleton-item variant="image" style="width: 50%; height: 150px; margin: auto;" />
                                        <br/>
                                        <el-skeleton-item variant="p" style="width: 100%" />
                                        <br/>
                                        <el-skeleton-item variant="p" style="width: 100%" />
                                    </div>
                                </div>
                            </template>
                        </el-skeleton>
                    </div>
                    <div v-if="!achieverStudentLoading && achieverStudent.length>0" v-for="(item, i) in achieverStudent" :key="i" class="col-lg-3 col-md-6">
                        <div class="achiever-detail">
                            <div class="achiever-detail-container pb-0">
                                <img :src="item.image"
                                :alt="item.image_alt" :title="item.image_title"
                                class="img-responsive">
                                <h5>{{ item.name }}</h5>
                            </div>
                            <h3> {{ item.rank }}</h3>
                            <div class="achiever-detail-container pt-0">
                                <p>{{ item.college }} </p>
                            </div>
                        </div>
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
import Breadcrumb from '~/components/Breadcrumb.vue';
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
    mounted() {
        // eslint-disable-next-line nuxt/no-env-in-hooks
        if (process.client) {
            this.$scrollTo("#__nuxt", 0, { force: true });
        }
    },
    async fetch() {
        await this.getAchieverCategory();
        await this.getAchieverStudent(this.$route.query.page ? Number(this.$route.query.page) : 1);
    },
    watch: {
        $route(to, from) {
            this.handleAchieverStudentPageChnage();
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
    components: { Breadcrumb }
}
</script>

<style scoped>
.achiever-detail {
    background-color: #f9f9f9;
    text-align: center;
    margin-bottom: 30px;
    clip-path: polygon(50% 0,100% 0,100% 99%,50% 85%,0 100%,0 0);
    min-height: 375px;
    height: 375px;
}

.achiever-detail-container{
    padding: 15px 30px;
}
.achiever-detail img {
    width: 55%;
    border: 2px solid #D7C167;
}
.achiever-detail h5 {
    font-weight: 700;
    font-size: 17px;
    padding: 10px 0;
    margin: 0;
}
.achiever-detail h3 {
    font-size: 15px;
    color: #fff;
    background: #304557;
    padding: 10px;
    font-weight: 700;
    text-align: center;
}
.tab-filter p {
    font-size: 14px;
    text-align: center;
    padding: 0 10%;
    font-weight: 620;
}
.achiever-detail p {
    font-weight: 700;
}

@media only screen and (max-width:767px) {
    .achiever-detail {
        min-height: 445px;
        height: 445px;
    }
}
</style>