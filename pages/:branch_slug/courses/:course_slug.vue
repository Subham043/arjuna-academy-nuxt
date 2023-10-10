<template>
    <div>
        <div class="inner-banner inner-banner-bg9">
            <div class="container">
                <div class="inner-title">
                    <h3 v-html="course?.name" />
                    <ul>
                        <li>
                            <NuxtLink to="/">Home</NuxtLink>
                        </li>
                        <li>Courses</li>
                        <li v-html="course?.name" />
                    </ul>
                </div>
            </div>
        </div>

        <div class="courses-details-area pt-70 pb-70">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8">
                        <template v-if="!courseLoading">
                            <div class="courses-details-contact">
                                <div class="tab courses-details-tab">
                                    <div class="tab_content current active">
                                        <div class="tabs_item">
                                            <div class="courses-details-tab-content">
                                                <div v-if="course?.branch_details.length>0" class="courses-details-into" v-html="course?.branch_details[0].description" />
                                                <div class="courses-details-into" v-html="course?.description" />
                                                <template v-if="course?.branch_details.length>0 && course?.branch_details[0].include_staff === true">
                                                    <div class="section-title text-center">
                                                        <span>STAFFS</span>
                                                        <h2 v-html="course?.branch_details[0].staff_heading" />
                                                    </div>
                                                    <div v-if="course?.branch_details[0].staffs.length>0" class="instructor-row row justify-content-center mt-4">
                                                        <div v-if="course?.branch_details[0].staffs.length>0" v-for="(item, i) in course?.branch_details[0].staffs" :key="i" class="col-lg-6 col-md-6 col-sm-6">
                                                            <InstructorCard :image="item.image" :image_alt="item.image_alt" :image_title="item.image_title" :name="item.name" :designation="item.designation" :description="item.description" />
                                                        </div>
                                                    </div>
                                                </template>
                                                <template v-if="course?.branch_details.length>0 && course?.branch_details[0].include_topper === true">
                                                    <div class="section-title text-center">
                                                        <span>ACHIEVERS</span>
                                                        <h2 v-html="course?.branch_details[0].topper_heading" />
                                                    </div>
                                                    <div v-if="course?.branch_details[0].achievers.length>0" class="achiever-row row justify-content-center mt-4">
                                                        <div v-if="course?.branch_details[0].achievers.length>0" v-for="(item, i) in course?.branch_details[0].achievers" :key="i" class="col-lg-4 col-md-6 col-sm-6">
                                                            <AchieverStudentCard :image="item.image" :image_alt="item.image_alt" :image_title="item.image_title" :name="item.name" :rank="item.rank" :college="item.college" />
                                                        </div>
                                                    </div>
                                                </template>
                                                <template v-if="course?.branch_details.length>0 && course?.branch_details[0].include_testimonial === true">
                                                    <div class="section-title text-center">
                                                        <span>TESTIMONIAL</span>
                                                        <h2 v-html="course?.branch_details[0].testimonial_heading" />
                                                    </div>
                                                    <div v-if="course?.branch_details[0].testimonials.length>0" class="testimonials-slider-two row justify-content-center mt-4">
                                                        <div v-for="(item, i) in course?.branch_details[0].testimonials" 
                                                                :key="i" class="col-lg-6 col-md-6 col-sm-12">
                                                            <TestimonialCard 
                                                                :image="item.image" 
                                                                :name="item.name" 
                                                                :star="item.star" 
                                                                :message="item.message" 
                                                                :designation="item.designation" />
                                                        </div>
                                                    </div>
                                                </template>
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
                    <div class="col-lg-4">
                        <template v-if="!courseLoading">
                            <div class="courses-details-sidebar">
                                <img :src="course?.image" :alt="course?.image_alt" :title="course?.image_title" class="w-100" do-not-lazy/>
                                <div class="content">
                                    <span class="d-flex justify-content-between align-items-center">
                                        <small v-if="this.course?.branch_details.length>0 && course?.branch_details[0].discount!=0" class="d-inline-flex m-0 px-2 py-1 fw-semibold text-success-emphasis bg-success-subtle border border-success-subtle rounded-2">{{course?.branch_details[0].discount}}% OFF</small>
                                        <h5 class="d-inline m-0"><code v-if="this.course?.branch_details.length>0 && course?.branch_details[0].discount!=0"><del>&#8377;{{ course?.branch_details[0].amount }}</del></code> <span>&#8377;{{ course?.branch_details[0].discounted_amount }}</span></h5>
                                    </span>
                                    <hr/>
                                    <div class="">
                                        <ValidationObserver ref="form">
                                            <form id="contactForm">
                                                <div class="row">
                                                    <div class="col-12">
                                                        <h3 class="user-title">Fill in your details</h3>
                                                    </div>
                                                    <div class="col-lg-12 col-md-12 mb-2">
                                                        <div class="form-group">
                                                            <ValidationProvider v-slot="{ classes, errors }" rules="required|alpha_spaces" name="name">
                                                                <el-input placeholder="Name" class="w-100" v-model="name"></el-input>
                                                                <div  :class="classes">{{ errors[0] }}</div>
                                                            </ValidationProvider>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-12 col-md-12 mb-2">
                                                        <div class="form-group">
                                                            <ValidationProvider v-slot="{ classes, errors }" rules="required|email" name="email">
                                                                <el-input placeholder="Email" class="w-100" v-model="email"></el-input>
                                                                <div  :class="classes">{{ errors[0] }}</div>
                                                            </ValidationProvider>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-12 col-md-12 mb-3">
                                                        <div class="form-group">
                                                            <ValidationProvider v-slot="{ classes, errors }" rules="required|phone" name="phone">
                                                                <el-input placeholder="Phone" class="w-100" v-model="phone"></el-input>
                                                                <div  :class="classes">{{ errors[0] }}</div>
                                                            </ValidationProvider>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-12 col-md-12">
                                                        <div class="d-flex align-items-center">
                                                            <button type="button" :disabled="enrollmentLoading" class="default-btn" @click.prevent="formHandler">
                                                                <template v-if="!enrollmentLoading">
                                                                    Enroll Now
                                                                </template>
                                                                <div v-else class="spinner-border" role="status"></div>
                                                            </button>
                                                            <button type="button" :disabled="enrollmentLoading" class="default-btn mx-1" @click.prevent="formCallbackHandler">
                                                                <template v-if="!enrollmentLoading">
                                                                    Request Callback
                                                                </template>
                                                                <div v-else class="spinner-border" role="status"></div>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </ValidationObserver>
                                    </div>
                                    <ul class="social-link">
                                        <li class="social-title">Share this course:</li>
                                        <li>
                                            <a aria-label="facebook share" :href="`https://www.facebook.com/share.php?u=https://www.aaaedu.in/${$route.params.branch_slug}/courses/${$route.params.course_slug}&title=${course?.name}`" target="_blank">
                                                <span class="svg-icon">
                                                    <font-awesome-icon :icon="['fab', 'facebook-f']"  />
                                                </span>
                                            </a>
                                        </li>
                                        <li>
                                            <a aria-label="twitter share" :href="`https://twitter.com/share?text=${course?.name}&url=https://www.aaaedu.in/${$route.params.branch_slug}/courses/${$route.params.course_slug}`" target="_blank">
                                                <span class="svg-icon">
                                                    <font-awesome-icon :icon="['fab', 'twitter']"  />
                                                </span>
                                            </a>
                                        </li>
                                        <li>
                                            <a aria-label="linkedin share" :href="`https://www.linkedin.com/shareArticle?mini=true&url=https://www.aaaedu.in/${$route.params.branch_slug}/courses/${$route.params.course_slug}&title=${course?.name}&source=${course?.name}`" target="_blank">
                                                <span class="svg-icon">
                                                    <font-awesome-icon :icon="['fab', 'linkedin']"  />
                                                </span>
                                            </a>
                                        </li>
                                    </ul>
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
    name: "CourseDetailPage",
    layout: "MainPageLayout",
    data() {
        return {
            courseLoading: false,
            course: null,
            enrollmentLoading: false,
            name: this.$auth.loggedIn ? this.$auth.user.name : '',
            email: this.$auth.loggedIn ? this.$auth.user.email : '',
            phone: this.$auth.loggedIn ? this.$auth.user.phone : '',
        };
    },
    head() {
        return {
            title: this.course?.branch_details.length > 0 ? this.course?.branch_details[0].meta_title : '',
            meta: [
                // hid is used as unique identifier. Do not use `vmid` for it as it will not work
                {
                    hid: 'og:title',
                    name: 'og:title',
                    content: this.course?.branch_details.length > 0 ? this.course?.branch_details[0].meta_title : ''
                },
                {
                    hid: 'og:type',
                    name: 'og:type',
                    content: 'website'
                },
                {
                    hid: 'description',
                    name: 'description',
                    content: this.course?.branch_details.length > 0 ? this.course?.branch_details[0].meta_description : ''
                },
                {
                    hid: 'keywords',
                    name: 'keywords',
                    content: this.course?.branch_details.length > 0 ? this.course?.branch_details[0].meta_keywords : ''
                },
            ],
            script: [{
                    type: 'application/ld+json',
                    innerHTML: this.course?.branch_details.length > 0 ? this.course?.branch_details[0].meta_scripts : '' // <- set jsonld object in data or wherever you want
                },
                { src: 'https://checkout.razorpay.com/v1/checkout.js' }],
            __dangerouslyDisableSanitizers: ['script'],
        };
    },
    async fetch() {
        await this.getCourse();
    },
    methods: {
        async getCourse() {
            this.courseLoading = true;
            try {
                const response = await this.$publicApi.get(API_ROUTES.course + `/${this.$route.params.course_slug}/branch/${this.$route.params.branch_slug}`); // eslint-disable-line
                this.course = response.data.course;
            }
            catch (err) {
                // console.log(err.response);// eslint-disable-line
                this.$nuxt.context.error({
                    status: err.response.status,
                    message: err.response.data.message,
                });
            }
            finally {
                this.courseLoading = false;
            }
        },
        async formHandler() {
            this.$refs.form.validate().then(async (success) => {
                if (!success) {
                    return;
                }
                this.enrollmentLoading = true;
                try {
                    const response = await this.$publicApi.post(API_ROUTES.course + `/${this.$route.params.course_slug}/branch/${this.$route.params.branch_slug}/enroll`, {
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
                    await this.$publicApi.post(API_ROUTES.course + `/${this.$route.params.course_slug}/branch/${this.$route.params.branch_slug}/request`, {
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