<template>
    <div>

        <div class="blog-details-area pb-70">
            <div class="container">
                <div class="row">
                    <template v-if="!campaignLoading">
                        <div class="col-lg-12">
                            <div class="blog-details-content">
                                <div class="blog-preview-img">
                                    <img :data-src="campaign?.image" :alt="campaign?.image_alt" :title="campaign?.image_title" v-lazy-load/>
                                </div>
                            </div>
                        </div>
                        <div v-if="campaign?.include_form === true" class="col-lg-3">
                            <div class="register-form form-sticky">
                                <div class="top-header">
                                    <h3 class="size" v-html="campaign?.form_heading" />
                                </div>
                                <div class="contact-form px-3">
                                    <h5 class="text-center">Fill in your details</h5>
                                    <ValidationObserver ref="form" v-slot="{ handleSubmit }">
                                        <form id="contactForm" @submit.prevent="handleSubmit(formHandler)">
                                            <div class="row">
                                                <div class="col-lg-12 col-sm-12">
                                                    <div class="form-group">
                                                        <ValidationProvider v-slot="{ classes, errors }"
                                                            rules="required|alpha_spaces" name="name">
                                                            <input type="text" name="name" v-model="name" id="name"
                                                                class="form-control" data-error="Please enter your name"
                                                                placeholder="Your Name" />
                                                            <div :class="classes">{{ errors[0] }}</div>
                                                        </ValidationProvider>
                                                    </div>
                                                </div>
                                                <div class="col-lg-12 col-sm-12">
                                                    <div class="form-group">
                                                        <ValidationProvider v-slot="{ classes, errors }"
                                                            rules="required|email" name="email">
                                                            <input type="email" name="email" id="email" class="form-control"
                                                                v-model="email" data-error="Please enter your email"
                                                                placeholder="Your Email" />
                                                            <div :class="classes">{{ errors[0] }}</div>
                                                        </ValidationProvider>
                                                    </div>
                                                </div>
                                                <div class="col-lg-12 col-sm-12">
                                                    <div class="form-group">
                                                        <ValidationProvider v-slot="{ classes, errors }"
                                                            rules="required|phone" name="phone">
                                                            <input type="text" name="phone" id="phone" class="form-control"
                                                                v-model="phone" data-error="Please enter your phone"
                                                                placeholder="Your Phone" />
                                                            <div :class="classes">{{ errors[0] }}</div>
                                                        </ValidationProvider>
                                                    </div>
                                                </div>
                                                <div class="col-lg-12 col-md-12">
                                                    <button type="submit" :disabled="enquiryLoading" class="default-btn">
                                                        <template v-if="!enquiryLoading">
                                                            Submit
                                                        </template>
                                                        <div v-else class="spinner-border" role="status"></div>
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </ValidationObserver>
                                </div>
                            </div>
                        </div>
                        <div :class="campaign?.include_form === true ? 'col-lg-9' : 'col-lg-12'">
                            <div class="blog-details-content pr-20 main-content">
                                <template v-if="!campaignLoading">
                                    <h1 v-html="campaign?.heading" />
                                    <div v-html="campaign?.description" />
                                    <template v-if="campaign?.include_testimonial === true">
                                        <div class="section-title text-center">
                                            <span>TESTIMONIAL</span>
                                            <h2 v-html="campaign?.testimonial_heading" />
                                        </div>
                                        <div v-if="campaign?.testimonials.length>0" class="testimonials-slider-two row justify-content-center mt-4">
                                            <div v-for="(item, i) in campaign?.testimonials" 
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
                                    <template v-if="campaign?.include_topper === true">
                                        <div class="section-title text-center">
                                            <span>ACHIEVERS</span>
                                            <h2 v-html="campaign?.topper_heading" />
                                        </div>
                                        <div v-if="campaign?.achievers.length>0" class="row justify-content-center mt-4">
                                            <div v-if="campaign?.achievers.length>0" v-for="(item, i) in campaign?.achievers" :key="i" class="col-lg-4 col-md-4">
                                                <AchieverStudentCard :image="item.image" :image_alt="item.image_alt" :image_title="item.image_title" :name="item.name" :rank="item.rank" :college="item.college" />
                                            </div>
                                        </div>
                                    </template>
                                    <div class="article-share">
                                        <div class="row align-items-center justify-content-center">
                                            <div class="col-lg-auto col-md-auto">
                                                <div class="article-social-icon">
                                                    <ul class="social-icon">
                                                        <li class="title">Share :</li>
                                                        <li>
                                                            <a aria-label="facebook share" :href="`https://www.facebook.com/share.php?u=https://www.aaaedu.in/${campaign?.slug}&title=${campaign?.name}`"
                                                                target="_blank">
                                                                <span class="svg-icon">
                                                                    <font-awesome-icon :icon="['fab', 'facebook-f']"  />
                                                                </span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a aria-label="twitter share" :href="`https://twitter.com/share?text=${campaign?.name}&url=https://www.aaaedu.in/${campaign?.slug}`"
                                                                target="_blank">
                                                                <span class="svg-icon">
                                                                    <font-awesome-icon :icon="['fab', 'twitter']"  />
                                                                </span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a aria-label="linkedin share" :href="`https://www.linkedin.com/shareArticle?mini=true&url=https://www.aaaedu.in/${campaign?.slug}&title=${campaign?.name}&source=${campaign?.name}`"
                                                                target="_blank">
                                                                <span class="svg-icon">
                                                                    <font-awesome-icon :icon="['fab', 'linkedin']"  />
                                                                </span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </template>
                            </div>
                        </div>
                    </template>
                    <template v-else>
                        <el-skeleton style="width: 100%" animated>
                            <template slot="template">
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="blog-details-content pr-20">
                                            <div class="blog-preview-img">
                                                <el-skeleton-item variant="image" style="width: 100%; height: 440px;" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-3">
                                        <el-skeleton-item variant="rect" style="width: 100%; height: 400px;" />
                                    </div>
                                    <div class="col-lg-9">
                                        <el-skeleton-item variant="p" style="width: 50%" />
                                        <br />
                                        <el-skeleton-item variant="text" style="width: 100%;" />
                                        <br />
                                        <el-skeleton-item variant="text" style="width: 100%;" />
                                        <br />
                                        <el-skeleton-item variant="text" style="width: 100%;" />
                                        <br />
                                        <el-skeleton-item variant="text" style="width: 100%;" />
                                        <br />
                                        <el-skeleton-item variant="text" style="width: 100%;" />
                                        <br />
                                        <el-skeleton-item variant="text" style="width: 100%;" />
                                        <br />
                                        <el-skeleton-item variant="text" style="width: 100%;" />
                                        <br />
                                        <el-skeleton-item variant="text" style="width: 100%;" />
                                        <br />
                                        <el-skeleton-item variant="text" style="width: 100%;" />
                                        <br />
                                        <el-skeleton-item variant="text" style="width: 100%;" />
                                        <br />
                                        <el-skeleton-item variant="text" style="width: 100%;" />
                                        <br />
                                        <el-skeleton-item variant="text" style="width: 100%;" />
                                        <br />
                                        <el-skeleton-item variant="text" style="width: 100%;" />
                                        <br />
                                        <el-skeleton-item variant="text" style="width: 100%;" />
                                        <br />
                                        <el-skeleton-item variant="text" style="width: 50%;" />
                                    </div>
                                </div>
                            </template>
                        </el-skeleton>
                    </template>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import { API_ROUTES } from '~/helper/api_routes';


export default {
    name: "CampaignDetailPage",
    layout: "MainPageLayout",
    data() {
        return {
            campaignLoading: false,
            campaign: null,
            name: '',
            email: '',
            phone: '',
            enquiryLoading: false,
        };
    },
    head() {
        return {
            title: this.campaign?.meta_title,
            meta: [
                // hid is used as unique identifier. Do not use `vmid` for it as it will not work
                {
                    hid: 'og:title',
                    name: 'og:title',
                    content: this.campaign?.meta_title
                },
                {
                    hid: 'og:type',
                    name: 'og:type',
                    content: 'website'
                },
                {
                    hid: 'description',
                    name: 'description',
                    content: this.campaign?.meta_description
                },
                {
                    hid: 'keywords',
                    name: 'keywords',
                    content: this.campaign?.meta_keywords
                },
            ],
            script: [{
                type: 'application/ld+json',
                innerHTML: this.campaign?.meta_scripts // <- set jsonld object in data or wherever you want
            }],
            __dangerouslyDisableSanitizers: ['script'],
        }
    },
    async fetch() {
        await this.getEvent();
    },
    methods: {
        async getEvent() {
            this.campaignLoading = true;
            try {
                const response = await this.$publicApi.get(API_ROUTES.campaign + `/${this.$route.params.slug}`); // eslint-disable-line
                this.campaign = response.data.campaign;
            } catch (err) {
                // console.log(err.response);// eslint-disable-line
                this.$nuxt.context.error({
                    status: err.response.status,
                    message: err.response.data.message,
                })

            } finally {
                this.campaignLoading = false;
            }
        },
        async formHandler() {
            this.enquiryLoading = true;
            try {
                await this.$publicApi.post(API_ROUTES.campaign + `/enquiry/${this.campaign?.id}`, {
                    name: this.name,
                    email: this.email,
                    phone: this.phone,
                });
                this.name = ''
                this.email = ''
                this.phone = ''
                this.$refs.form.reset()
                this.$toast.success('Enquiry Recieved Successfully.')
            } catch (err) {
                this.$refs.form.setErrors({
                    email: err?.response?.data?.errors?.email?.length > 0 && err?.response?.data?.errors?.email[0],
                    name: err?.response?.data?.errors?.name?.length > 0 && err?.response?.data?.errors?.name[0],
                    phone: err?.response?.data?.errors?.phone?.length > 0 && err?.response?.data?.errors?.phone[0],
                });
                if (err?.response?.data?.message) this.$toast.error(err?.response?.data?.message)
                if (err?.response?.data?.error) this.$toast.error(err?.response?.data?.error)

            } finally {
                this.enquiryLoading = false;
            }
        },
    },
    components: { 
        TestimonialCard: () => import('~/components/TestimonialCard.vue'), 
        AchieverStudentCard: () => import('~/components/AchieverStudentCard.vue') 
    }
}
</script>