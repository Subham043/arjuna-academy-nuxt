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
                                                <button v-if="!is_test_enrolled" type="button" :disabled="enrollmentLoading" class="default-btn" @click="testApplyHandler">
                                                    <template v-if="!enrollmentLoading">
                                                        Take Now
                                                    </template>
                                                    <div v-else class="spinner-border" role="status"></div>
                                                </button>
                                                <button v-else-if="is_test_enrolled && is_test_enrolled.is_enrolled && is_test_enrolled.test_status=='Pending'" type="button" :disabled="enrollmentLoading" class="default-btn" @click="dialogVisible = true">
                                                    Start Now
                                                </button>
                                                <button v-else-if="is_test_enrolled && is_test_enrolled.is_enrolled && is_test_enrolled.test_status=='Ongoing'" type="button" :disabled="enrollmentLoading" class="default-btn" @click="dialogVisible = true">
                                                    Resument Test
                                                </button>
                                                <button v-else-if="is_test_enrolled && is_test_enrolled.is_enrolled && is_test_enrolled.test_status=='Eliminated'" type="button" :disabled="enrollmentLoading" class="default-btn" @click="dialogEliminatedVisible = true">
                                                    Elimination Report
                                                </button>
                                                <NuxtLink v-else :to="`/online-tests/${test?.slug}/report`" class="default-btn">
                                                    View Test Report
                                                </NuxtLink>
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

        <el-dialog v-if="is_test_enrolled && is_test_enrolled.is_enrolled" :title="test.name" :visible.sync="dialogVisible" width="50%" top="20px">
            <div class="p-4 py-1">
                <div class="test-instruction">
                    <h5 class="text-center mb-0"><code>Instructions:</code></h5>
                    <ol>
                        <li>There are <b>set of questions</b></li>
                        <li>Each questions hold <b>4 options</b>.</li>
                        <li>You need to <b>select any one of the option</b> out of the four.</li>
                        <li>Once you have selected your favourable option, <b>click on the submit button</b> to submit your answer.</li>
                        <li>Once you submit your answer, <b>the next question will appear for you to answer</b>.</li>
                        <li>You need to repeat the above steps, till you have reached the last question of your questionarie timeline.</li>
                        <li>Each question holds a duration. You need to answer the question within the given time period. <b>If you fail to answer within the given time period, you will automatically move to the next question</b>.</li>
                        <li>Once you proceed to the next question, <b>you cannot move backward to change your answer</b>. So select your answer carefully.</li>
                        <li><b>The test will be conducted in full screen mode</b>. Trying to escape the full screen mode will lead to disqualification/elimination.</li>
                        <li><b>Do not try to change your browser tab, or use your system for other purposes while attending the test</b>. Trying to do that will also lead you to disqualification/elimination.</li>
                        <li>Once you are disqualified/eliminated, you can never re-attend the test.</li>
                        <li>In case of bad network or system shut down while attending the test, No need to worry. <b>You can refresh the browser and resume the test from where it was last attended</b>.</li>
                        <li>Once you complete answering all the question, you will recieve your report card.</li>
                    </ol>
                    <p>Once you are done reading the above instructions, Please click the button given below to proceed with your test.</p>
                </div>
                <div v-if="is_test_enrolled.test_status=='Pending' || is_test_enrolled.test_status=='Ongoing'" class="my-2 text-center">
                    <NuxtLink class="default-btn" :to="`/online-tests/${test.slug}/ongoing`">
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

        <el-dialog v-if="is_test_enrolled && is_test_enrolled.is_enrolled && is_test_enrolled.test_status=='Eliminated'" :title="test.name" :visible.sync="dialogEliminatedVisible" width="30vw" top="20px">
            <div class="p-4 pt-1">
                <div class="test-instruction">
                    <h5 class="text-center mb-0"><code>ELIMINATED:</code></h5>
                    <p class="text-center">{{is_test_enrolled.reason}}</p>
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
            testLoading: false,
            dialogVisible: false,
            dialogEliminatedVisible: false,
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