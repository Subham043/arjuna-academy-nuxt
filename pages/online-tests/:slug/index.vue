<template>
    <div>
        <div class="inner-banner inner-banner-bg9">
            <div class="container">
                <div class="inner-title">
                    <h3 v-html="test?.name" />
                    <ul>
                        <li>
                            <NuxtLink to="/">Home</NuxtLink>
                        </li>
                        <li>Online Tests</li>
                        <li v-html="test?.name" />
                    </ul>
                </div>
            </div>
        </div>

        <div class="courses-details-area pt-70 pb-70">
            <div class="container">
                <div class="row">
                    <div class="col-lg-9">
                        <template v-if="!testLoading">
                            <div class="courses-details-contact">
                                <div class="tab courses-details-tab">
                                    <div class="tab_content current active">
                                        <div class="tabs_item">
                                            <div class="courses-details-tab-content">
                                                <div class="courses-details-into" v-html="test?.description" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </template>
                        <template v-else>
                            <PageDetailLoading :image="false" />
                        </template>
                    </div>
                    <div class="col-lg-3">
                        <template v-if="!testLoading">
                            <div class="courses-details-sidebar">
                                <div class="price-tag">
                                    <h5 class="d-inline m-0"><span v-if="test?.is_paid ">&#8377;{{ test?.amount }}</span><span v-else>Free</span></h5>
                                </div>
                                <img :src="test?.image" :alt="test?.image_alt" :title="test?.image_title" class="w-100" do-not-lazy/>
                                <div class="content">
                                    <span class="d-flex justify-content-center align-items-center">
                                        <h5 class="d-inline m-0"><span>{{ test?.name }}</span></h5>
                                    </span>
                                    <hr/>
                                    <div class="">
                                        <div class="col-lg-12 col-md-12">
                                            <div class="d-flex align-items-center">
                                                <button type="button" :disabled="enrollmentLoading" class="default-btn" @click="buttonHandler">
                                                    <template v-if="!enrollmentLoading">
                                                        <template v-if="!is_test_enrolled">
                                                            Take Now
                                                        </template>
                                                        <template v-else>
                                                            <template v-if="is_test_enrolled.enrollment_type=='Purchased'">
                                                                <template v-if="is_test_enrolled.is_enrolled && is_test_enrolled.test_status=='Pending'">
                                                                    Start Now
                                                                </template>
                                                                <template v-else-if="is_test_enrolled.is_enrolled && is_test_enrolled.test_status=='Ongoing'">
                                                                    Resument Test
                                                                </template>
                                                                <template v-else-if="is_test_enrolled.is_enrolled && is_test_enrolled.test_status=='Completed'">
                                                                    View Test Report
                                                                </template>
                                                                <template v-else-if="is_test_enrolled.is_enrolled && is_test_enrolled.test_status=='Eliminated'">
                                                                    View Elimination Report
                                                                </template>
                                                                <template v-else>
                                                                    Take Now
                                                                </template>
                                                            </template>
                                                            <template v-else>
                                                                <template v-if="is_test_enrolled.is_enrolled && is_test_enrolled.test_status=='Pending'">
                                                                    Start Now
                                                                </template>
                                                                <template v-else-if="is_test_enrolled.is_enrolled && is_test_enrolled.test_status=='Ongoing'">
                                                                    Resument Test
                                                                </template>
                                                                <template v-else-if="is_test_enrolled.is_enrolled && is_test_enrolled.test_status=='Completed'">
                                                                    View Test Report
                                                                </template>
                                                                <template v-else-if="is_test_enrolled.is_enrolled && is_test_enrolled.test_status=='Eliminated'">
                                                                    View Elimination Report
                                                                </template>
                                                                <template v-else>
                                                                    Take Now
                                                                </template>
                                                            </template>
                                                        </template>
                                                    </template>
                                                    <div v-else class="spinner-border" role="status"></div>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </template>
                        <template v-else>
                            <el-skeleton style="width: 100%" animated>
                                <template slot="template">
                                    <div class="courses-details-sidebar">
                                        <el-skeleton-item variant="rect" style="width: 100%; height: 440px;" />
                                    </div>
                                </template>
                            </el-skeleton>
                        </template>
                    </div>
                </div>
            </div>
        </div>

        <el-dialog v-if="is_test_enrolled && is_test_enrolled.is_enrolled" :title="test.name" :visible.sync="dialogVisible" width="60%" top="20px">
            <div class="p-4">
                <div class="test-instruction">
                    <h5 class="text-center mb-0"><code>Instructions:</code></h5>
                    <ol>
                        <li>test</li>
                    </ol>
                </div>
                <div class="my-2 text-center">
                    <NuxtLink v-if="is_test_enrolled.test_status=='Completed'" class="default-btn" :to="`/online-tests/${test.slug}/report`">
                        View Test Report
                    </NuxtLink>
                    <NuxtLink v-else-if="is_test_enrolled.test_status=='Eliminated'" class="default-btn" :to="`/online-tests/${test.slug}/eliminated`">
                        View Elimination Report
                    </NuxtLink>
                    <NuxtLink v-else class="default-btn" :to="`/online-tests/${test.slug}/ongoing`">
                        <template v-if="is_test_enrolled.test_status=='Pending'">
                            Start Now
                        </template>
                        <template v-else-if="is_test_enrolled.test_status=='Ongoing'">
                            Resument Test
                        </template>
                        <template v-else>
                            Take Now
                        </template>
                    </NuxtLink>
                </div>
            </div>
        </el-dialog>

    </div>
</template>

<script>
import { API_ROUTES } from '~/helper/api_routes';

export default {
    name: "OnlineTestDetailPage",
    layout: "MainPageLayout",
    middleware: ['auth'],
    data() {
        return {
            dialogVisible: false,
            testLoading: false,
            test: null,
            is_test_enrolled: null,
            enrollmentLoading: false,
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
                },
                { src: 'https://checkout.razorpay.com/v1/checkout.js', async: true }],
            __dangerouslyDisableSanitizers: ['script'],
        };
    },
    async fetch() {
        await this.getOnlineTest();
    },
    methods: {
        buttonHandler(){
            this.is_test_enrolled==null ? this.testApplyHandler() : (!this.is_test_enrolled.is_enrolled ? this.testApplyHandler() : this.dialogVisible = true)
        },
        async getOnlineTest() {
            this.testLoading = true;
            try {
                const response = await this.$privateApi.get(API_ROUTES.tests + `/${this.$route.params.slug}`); // eslint-disable-line
                this.test = response.data.test;
                this.is_test_enrolled = response.data.test.is_test_enrolled;
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
        async testApplyHandler() {
            this.enrollmentLoading = true;
            try {
                const response = await this.$privateApi.get(API_ROUTES.tests + `/${this.$route.params.slug}/apply`);
                if(this.test.is_paid){
                    this.loadRazorpay(response.data.test_enrollment);
                }else{
                    this.$toast.success('Test Enrollment done successfully.');
                    await this.getOnlineTest();
                    this.dialogVisible=true;
                }
            }
            catch (err) {
                if (err?.response?.data?.message)
                    this.$toast.error(err?.response?.data?.message);
                if (err?.response?.data?.error)
                    this.$toast.error(err?.response?.data?.error);
            }
            finally {
                this.enrollmentLoading = false;
            }
        },
        loadRazorpay(data) {
            const options = {
                key: this.$config.RAZORPAY_KEY_ID,
                amount: data.amount * 100,
                currency: 'INR',
                description: "Payment description",
                order_id: data.razorpay_order_id,
                prefill: {
                    name: this.$auth.loggedIn ? this.$auth.user.name : '',
                    email: this.$auth.loggedIn ? this.$auth.user.email : '',
                    contact: this.$auth.loggedIn ? this.$auth.user.phone : ''
                },
                theme: {
                    color: "#000000" // Set your website theme color
                },
                handler: async (response) => {
                    await this.verifyPayment(response);
                }
            };
            // eslint-disable-next-line no-undef
            const rzp = new Razorpay(options);
            rzp.open();
        },
        async verifyPayment(data) {
            const loading = this.$loading({
                lock: true,
                fullscreen: true,
            });
            try {
                const response = await this.$privateApi.post(API_ROUTES.tests + `/${this.$route.params.slug}/apply/payment-verification`, {
                    razorpay_order_id: data.razorpay_order_id,
                    razorpay_payment_id: data.razorpay_payment_id,
                    razorpay_signature: data.razorpay_signature,
                }); // eslint-disable-line
                this.$toast.success(response.data.message);
                await this.getOnlineTest();
                this.dialogVisible=true;
            }
            catch (err) {
                if (err?.response?.data?.message)
                    this.$toast.error(err?.response?.data?.message);
                if (err?.response?.data?.error)
                    this.$toast.error(err?.response?.data?.error);
            }
            finally {
                loading.close();
            }
        }
    },
    components: { 
        TestimonialCard: () => import('~/components/TestimonialCard.vue'), 
        AchieverStudentCard: () => import('~/components/AchieverStudentCard.vue'), 
        InstructorCard: () => import('~/components/InstructorCard.vue') ,
        PageDetailLoading: () => import('~/components/PageDetailLoading.vue'), 
    }
}
</script>

<style scoped>
.price-tag{
    position: relative;
}
.price-tag h5{
    position: absolute;
    top:0;
    right: 0;
    padding: 5px;
    background-color: var(--mainColor);
    color: var(--whiteColor);
}
.test-instruction{
    width: 100%;
    border: 1px dashed #222;
    padding: 10px;
}
</style>