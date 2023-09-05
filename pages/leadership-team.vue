<template>
    <div>
        <Breadcrumb title="Leadership Team" />

        <div class="instructors-details-area pt-100 pb-70">
            <div class="container">
                <div class="row">
                    <div class="col-lg-5">
                        <div class="instructors-details-img faq-img">
                            <img src="/images/instructors/instructors-details.jpg" alt="Instructor" />
                            <div class="shape">
                                <h2><span class="badge bg-warning">CEO & Founder</span></h2>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-7">
                        <div class="instructors-details-content pl-20">
                            <h2>Sally welch</h2>
                            <i class="d-inline-flex mb-3 fw-semibold text-success-emphasis bg-success-subtle ">B-Tech, E&C, NITK Surathkal <br/>
Patent Holder of US Patent No: US9977454B1</i>
                            <p>
                                Sed porttitor lectus nibh. Donec rutrum congue leo eget
                                malesuada. Praesent sapien massa, convallis a pellentesque
                                egestas Curabitur arcu erat, accumsan id imperdiet et, porttitor
                                at sem. Cras ultricies ligula sed magna dictum porta. Vestibulum
                                ante ipsum primis in faucibus orci luctus et ultrices posuere
                                cubilia.
                            </p>
                            <p>
                                Vestibulum ac diam sit amet quam vehicula elementum sed sit amet
                                dui. Vestibulum ac diam sit amet quam vehicula elementum sed sit
                                amet dui. Curabitur non nulla sit amet nisl tempus convallis
                                quis ac lectus.
                            </p>
                            <p>
                                Sed porttitor lectus nibh. Donec rutrum congue leo eget
                                malesuada. Praesent sapien massa, convallis a pellentesque
                                egestas Curabitur arcu erat, accumsan id imperdiet et, porttitor
                                at sem. Cras ultricies ligula sed magna dictum porta. Vestibulum
                                ante ipsum primis in faucibus orci luctus et ultrices posuere
                                cubilia.
                            </p>
                            <p>
                                Vestibulum ac diam sit amet quam vehicula elementum sed sit amet
                                dui. Vestibulum ac diam sit amet quam vehicula elementum sed sit
                                amet dui. Curabitur non nulla sit amet nisl tempus convallis
                                quis ac lectus.
                            </p>
                            <p>
                                Sed porttitor lectus nibh. Donec rutrum congue leo eget
                                malesuada. Praesent sapien massa, convallis a pellentesque
                                egestas Curabitur arcu erat, accumsan id imperdiet et, porttitor
                                at sem. Cras ultricies ligula sed magna dictum porta. Vestibulum
                                ante ipsum primis in faucibus orci luctus et ultrices posuere
                                cubilia.
                            </p>
                            <p>
                                Vestibulum ac diam sit amet quam vehicula elementum sed sit amet
                                dui. Vestibulum ac diam sit amet quam vehicula elementum sed sit
                                amet dui. Curabitur non nulla sit amet nisl tempus convallis
                                quis ac lectus.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="instructors-details-area pb-70">
            <div class="container">
                <div class="row">

                    <div class="col-lg-7">
                        <div class="instructors-details-content pl-20">
                            <h2>Sally welch</h2>
                            <i class="d-inline-flex mb-3 fw-semibold text-success-emphasis bg-success-subtle ">(B. Tech, M.B.A)</i>
                            <p>
                                Sed porttitor lectus nibh. Donec rutrum congue leo eget
                                malesuada. Praesent sapien massa, convallis a pellentesque
                                egestas Curabitur arcu erat, accumsan id imperdiet et, porttitor
                                at sem. Cras ultricies ligula sed magna dictum porta. Vestibulum
                                ante ipsum primis in faucibus orci luctus et ultrices posuere
                                cubilia.
                            </p>
                            <p>
                                Vestibulum ac diam sit amet quam vehicula elementum sed sit amet
                                dui. Vestibulum ac diam sit amet quam vehicula elementum sed sit
                                amet dui. Curabitur non nulla sit amet nisl tempus convallis
                                quis ac lectus.
                            </p>
                            <p>
                                Sed porttitor lectus nibh. Donec rutrum congue leo eget
                                malesuada. Praesent sapien massa, convallis a pellentesque
                                egestas Curabitur arcu erat, accumsan id imperdiet et, porttitor
                                at sem. Cras ultricies ligula sed magna dictum porta. Vestibulum
                                ante ipsum primis in faucibus orci luctus et ultrices posuere
                                cubilia.
                            </p>
                            <p>
                                Vestibulum ac diam sit amet quam vehicula elementum sed sit amet
                                dui. Vestibulum ac diam sit amet quam vehicula elementum sed sit
                                amet dui. Curabitur non nulla sit amet nisl tempus convallis
                                quis ac lectus.
                            </p>
                            <p>
                                Sed porttitor lectus nibh. Donec rutrum congue leo eget
                                malesuada. Praesent sapien massa, convallis a pellentesque
                                egestas Curabitur arcu erat, accumsan id imperdiet et, porttitor
                                at sem. Cras ultricies ligula sed magna dictum porta. Vestibulum
                                ante ipsum primis in faucibus orci luctus et ultrices posuere
                                cubilia.
                            </p>
                            <p>
                                Vestibulum ac diam sit amet quam vehicula elementum sed sit amet
                                dui. Vestibulum ac diam sit amet quam vehicula elementum sed sit
                                amet dui. Curabitur non nulla sit amet nisl tempus convallis
                                quis ac lectus.
                            </p>
                        </div>
                    </div>
                    <div class="col-lg-5">
                        <div class="instructors-details-img faq-img">
                            <img src="/images/instructors/instructors-details.jpg" alt="Instructor" />
                            <div class="shape">
                                <h2><span class="badge bg-warning">Managing Director</span></h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

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
                    <div v-for="(item, i) in staff" :key="i" class="col-lg-3 col-md-6">
                        <div class="instructors-card">
                            <img :src="item.image" :alt="item.alt" :title="item.title" />
                            <div class="content">
                                <h3>{{ item.name }}</h3>
                                <span>{{ item.designation }}</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 text-center">
                        <pagination v-model="staffCurrentPage" :records="staffCount" :per-page="staffPerPage"  :options="{chunk:9, chunksNavigation:'scroll'}" @paginate="handlePaginationChnage"/>
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
    name: "LeadershipPage",
    layout: "MainPageLayout",
    data() {
        return {
            staffLoading: false,
            staff: [],
            staffCount:1,
            staffCurrentPage: 1,
            staffPerPage: 1,
        };
    },
    async fetch() {
      await this.getStaff();
    },
    watch: {
        $route(to, from) {
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
        async getStaff(page=0) {
            this.staffLoading=true;
            try {
                const response = await this.$publicApi.get(API_ROUTES.staff+`?total=8&page=${page}`); // eslint-disable-line
                this.staff = response.data.data
                this.staffCount = response?.data?.meta?.total
                this.staffPerPage = response?.data?.meta?.per_page
                this.staffCurrentPage = this.$route.query.page ? Number(this.$route.query.page) : 1;
            } catch (err) {
                // console.log(err.response);// eslint-disable-line
                if(err?.response?.data?.message) this.$toast.error(err?.response?.data?.message)
                if(err?.response?.data?.error) this.$toast.error(err?.response?.data?.error)

            }finally{
                this.staffLoading=false;
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
    components: { Breadcrumb }
}
</script>