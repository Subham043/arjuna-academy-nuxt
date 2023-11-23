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
                                                <button type="button" :disabled="enrollmentLoading" class="default-btn" @click.prevent="formHandler">
                                                    <template v-if="!enrollmentLoading">
                                                        Take Now
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
            test: null,
            enrollmentLoading: false,
            name: this.$auth.loggedIn ? this.$auth.user.name : '',
            email: this.$auth.loggedIn ? this.$auth.user.email : '',
            phone: this.$auth.loggedIn ? this.$auth.user.phone : '',
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
            }
            catch (err) {
                // console.log(err.response);// eslint-disable-line
                this.$nuxt.context.error({
                    status: err.response.status,
                    message: err.response.data.message,
                });
            }
            finally {
                this.testLoading = false;
            }
        },
        async formHandler() {
            this.$refs.form.validate().then(async (success) => {
                if (!success) {
                    return;
                }
                this.enrollmentLoading = true;
                try {
                    const response = await this.$privateApi.post(API_ROUTES.tests + `/${this.$route.params.slug}`, {
                        name: this.name,
                        email: this.email,
                        phone: this.phone,
                    });
                    this.$refs.form.reset();
                    this.loadRazorpay(response.data.enrollmentForm);
                }
                catch (err) {
                    this.$refs.form.setErrors({
                        email: err?.response?.data?.errors?.email?.length > 0 && err?.response?.data?.errors?.email[0],
                        name: err?.response?.data?.errors?.name?.length > 0 && err?.response?.data?.errors?.name[0],
                        phone: err?.response?.data?.errors?.phone?.length > 0 && err?.response?.data?.errors?.phone[0],
                    });
                    if (err?.response?.data?.message)
                        this.$toast.error(err?.response?.data?.message);
                    if (err?.response?.data?.error)
                        this.$toast.error(err?.response?.data?.error);
                }
                finally {
                    this.enrollmentLoading = false;
                }
            });
        },
        async formCallbackHandler() {
            this.$refs.form.validate().then(async (success) => {
                if (!success) {
                    return;
                }
                this.enrollmentLoading = true;
                try {
                    await this.$privateApi.post(API_ROUTES.tests + `/${this.$route.params.slug}/request`, {
                        name: this.name,
                        email: this.email,
                        phone: this.phone,
                    });
                    this.$refs.form.reset();
                    this.$toast.success('We have received your request. Our team will contact you soon.');
                }
                catch (err) {
                    this.$refs.form.setErrors({
                        email: err?.response?.data?.errors?.email?.length > 0 && err?.response?.data?.errors?.email[0],
                        name: err?.response?.data?.errors?.name?.length > 0 && err?.response?.data?.errors?.name[0],
                        phone: err?.response?.data?.errors?.phone?.length > 0 && err?.response?.data?.errors?.phone[0],
                    });
                    if (err?.response?.data?.message)
                        this.$toast.error(err?.response?.data?.message);
                    if (err?.response?.data?.error)
                        this.$toast.error(err?.response?.data?.error);
                }
                finally {
                    this.enrollmentLoading = false;
                }
            });
        },
        loadRazorpay(data) {
            const options = {
                key: this.$config.RAZORPAY_KEY_ID,
                amount: data.discounted_amount * 100,
                currency: 'INR',
                description: "Payment description",
                order_id: data.razorpay_order_id,
                prefill: {
                    name: data.name,
                    email: data.email,
                    contact: data.phone
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
                const response = await this.$privateApi.post('/api/v1/enrollment/verify', {
                    razorpay_order_id: data.razorpay_order_id,
                    razorpay_payment_id: data.razorpay_payment_id,
                    razorpay_signature: data.razorpay_signature,
                }); // eslint-disable-line
                this.$toast.success(response.data.message);
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
</style>