<template>
    <div>

        <div class="blog-details-area">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="blog-details-content">
                            <div class="blog-preview-img">
                                <img v-if="selected==='Day Scholar'" data-src="/images/scholar-bg.jpg" v-lazy-load
                                    alt="2 Year Integrated Day Scholar Program for PU/CBSE Boards, CET, NEET and JEE"
                                    title="2 Year Integrated Day Scholar Program for PU/CBSE Boards, CET, NEET and JEE" />
                                <img v-else data-src="/images/residential-bg.jpg" v-lazy-load
                                    alt="2 Year Integrated Residential Program for PU/CBSE Boards, CET, JEE and NEET"
                                    title="2 Year Integrated Residential Program for PU/CBSE Boards, CET, JEE and NEET" />
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3">
                        <div class="register-form form-sticky">
                            <div class="top-header">
                                <h4 class="size text-center text-light">Fill in your details</h4>
                            </div>
                            <div class="contact-form px-3">
                                <ValidationObserver ref="form" v-slot="{ handleSubmit }">
                                    <form id="contactForm" @submit.prevent="handleSubmit(formHandler)">
                                        <div class="row">
                                            <div class="col-lg-12 col-sm-12">
                                                <div class="form-group">
                                                    <ValidationProvider v-slot="{ classes, errors }"
                                                        rules="required|alpha_spaces" name="name">
                                                        <el-input placeholder="Your Name" class="w-100" v-model="name"></el-input>
                                                        <div :class="classes">{{ errors[0] }}</div>
                                                    </ValidationProvider>
                                                </div>
                                            </div>
                                            <div class="col-lg-12 col-sm-12">
                                                <div class="form-group">
                                                    <ValidationProvider v-slot="{ classes, errors }" rules="required|email"
                                                        name="email">
                                                        <el-input placeholder="Your Email" class="w-100" v-model="email"></el-input>
                                                        <div :class="classes">{{ errors[0] }}</div>
                                                    </ValidationProvider>
                                                </div>
                                            </div>
                                            <div class="col-lg-12 col-sm-12">
                                                <div class="form-group">
                                                    <ValidationProvider v-slot="{ classes, errors }" rules="required|phone"
                                                        name="phone">
                                                        <el-input placeholder="Your Phone" class="w-100" v-model="phone"></el-input>
                                                        <div :class="classes">{{ errors[0] }}</div>
                                                    </ValidationProvider>
                                                </div>
                                            </div>
                                            <div class="col-lg-12 col-sm-12">
                                                <div class="form-group">
                                                    <ValidationProvider v-slot="{ classes, errors }" rules="required|custom_message" name="course">
                                                        <el-select v-model="selected" class="w-100" placeholder="Select Your Course">
                                                            <el-option
                                                            v-for="item in courseOptions"
                                                            :key="item.value"
                                                            :label="item.label"
                                                            :value="item.value">
                                                            </el-option>
                                                        </el-select>
                                                        <div  :class="classes">{{ errors[0] }}</div>
                                                    </ValidationProvider>
                                                </div>
                                            </div>
                                            <div class="col-lg-12 col-sm-12">
                                                <div class="form-group">
                                                    <ValidationProvider v-slot="{ classes, errors }" rules="required|custom_message" name="branch">
                                                        <el-select v-model="branch" class="w-100" placeholder="Select Your Branch">
                                                            <el-option
                                                            v-if="selected==='Day Scholar'"
                                                            v-for="item in dayScholarBranchOptions"
                                                            :key="item.value"
                                                            :label="item.label"
                                                            :value="item.value">
                                                            </el-option>
                                                            <el-option
                                                            v-if="selected==='Residential'"
                                                            v-for="item in residentialBranchOptions"
                                                            :key="item.value"
                                                            :label="item.label"
                                                            :value="item.value">
                                                            </el-option>
                                                        </el-select>
                                                        <div  :class="classes">{{ errors[0] }}</div>
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
                    <div :class="'col-lg-9'">
                        <div class="blog-details-content pr-20 main-content">
                            <div class="side-bar-area">
                                <div class="side-bar-widget py-2">
                                    <ul class="side-bar-widget-tag">
                                        <li :class="selected==='Day Scholar' && 'active'" @click="selected='Day Scholar'"><a href="javascript:void(0)" aria-label="2 year day scholar cet, jee, neet integrated pu/cbse program">2 year day scholar cet, jee, neet integrated pu/cbse program</a></li>
                                        <li :class="selected==='Residential' && 'active'" @click="selected='Residential'"><a href="javascript:void(0)" aria-label="2 year day residential cet, jee, neet integrated pu/cbse program">2 year day residential cet, jee, neet integrated pu/cbse program</a></li>
                                    </ul>
                                </div>
                            </div>

                            <div v-if="selected==='Day Scholar'" class="scholar-info pt-2">
                                <ul>
                                    <li>This integrated programme is designed to help students to excel in their board
                                        exams. (PU and CBSE 12)</li>
                                    <li>It is also designed to help students crack competitive exams like KCET, JEE
                                        Mains, JEE Advanced, NEET and KVPY</li>
                                    <li>The environment is ideal for thorough preparation of the exams.</li>
                                    <li>1600+ classroom Teaching Hours with Weekly Lab Sessions and Monthly Parents
                                        Teachers Team.</li>
                                    <li>400+ Teacher Assisted JEE, NEET &amp; KVPY Problem solving sessions in a Year to
                                        ensure excellent results.</li>
                                    <li>The Faculty are all experts and ex-IITians, NITians, and NEET Toppers.</li>
                                    <li>Students receive career guidance for choosing the best institutes for their
                                        undergraduate courses.</li>
                                    <li>There is a single comprehensive study material, with daily practice problems as
                                        home assignments.</li>
                                </ul>
                            </div>

                            <div v-else class="residential-info pt-2">
                                <ul>
                                    <li>This integrated programme is designed to help students to excel in their board
                                        exams. (PU and CBSE 12)</li>
                                    <li>It is also designed to help students crack competitive exams like KCET, JEE
                                        Mains, JEE Advanced, NEET and KVPY</li>
                                    <li>The environment is ideal for thorough preparation of the exams.</li>
                                    <li>1600+ classroom Teaching Hours with Weekly Lab Sessions and Monthly Parents
                                        Teachers Team.</li>
                                    <li>600+ Teacher Assisted JEE, NEET &amp; KVPY Problem solving sessions in a Year to
                                        ensure excellent results.</li>
                                    <li>The Faculty are all experts and ex-IITians, NITians, and NEET Toppers.</li>
                                    <li>Students receive career guidance for choosing the best institutes for their
                                        undergraduate courses.</li>
                                    <li>There is a single comprehensive study material, with daily practice problems as
                                        home assignments.</li>
                                    <li>Hostel Environment ensures zero distractions. Teachers residing in the same
                                        campus with the Students ensures guaranteed success</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import { API_ROUTES } from '~/helper/api_routes';


export default {
    name: "DayScholarDetailPage",
    layout: "MainPageLayout",
    data() {
        return {
            name: '',
            email: '',
            phone: '',
            enquiryLoading: false,
            selected:'Day Scholar',
            branch:'',
            courseOptions: [
                {
                    value: 'Day Scholar',
                    label: 'Day Scholar'
                },
                {
                    value: 'Residential',
                    label: 'Residential'
                },
            ],
            dayScholarBranchOptions: [
                {
                    value: 'Vijayanagar (PU & CBSE)',
                    label: 'Vijayanagar (PU & CBSE)'
                },
                {
                    value: 'NPS Kengeri (CBSE)',
                    label: 'NPS Kengeri (CBSE)'
                },
                {
                    value: 'VSS School, Ullal (CBSE)',
                    label: 'VSS School, Ullal (CBSE)'
                },
                {
                    value: 'Vedantha College, Vasanthapura (PU)',
                    label: 'Vedantha College, Vasanthapura (PU)'
                },
            ],
            residentialBranchOptions: [
                {
                    value: 'Vijayanagar (for both boys & girls)',
                    label: 'Vijayanagar (for both boys & girls)'
                },
                {
                    value: 'Vedantha College, Vasanthapura (for girls only)',
                    label: 'Vedantha College, Vasanthapura (for girls only)'
                },
                {
                    value: 'Parivarthana College, Mysore (for both boys & girls)',
                    label: 'Parivarthana College, Mysore (for both boys & girls)'
                },
            ],
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
      await this.getSeo();
    },
    methods: {
        async formHandler() {
            this.enquiryLoading = true;
            try {
                await this.$publicApi.post(API_ROUTES.day_scholar, {
                    name: this.name,
                    email: this.email,
                    phone: this.phone,
                    course: this.selected,
                    branch: this.branch,
                });
                this.name = ''
                this.email = ''
                this.phone = ''
                this.branch = ''
                this.$refs.form.reset()
                this.$toast.success('Enquiry Recieved Successfully.')
            } catch (err) {
                this.$refs.form.setErrors({
                    email: err?.response?.data?.errors?.email?.length > 0 && err?.response?.data?.errors?.email[0],
                    name: err?.response?.data?.errors?.name?.length > 0 && err?.response?.data?.errors?.name[0],
                    phone: err?.response?.data?.errors?.phone?.length > 0 && err?.response?.data?.errors?.phone[0],
                    selected: err?.response?.data?.errors?.course?.length > 0 && err?.response?.data?.errors?.course[0],
                    branch: err?.response?.data?.errors?.branch?.length > 0 && err?.response?.data?.errors?.branch[0],
                });
                if (err?.response?.data?.message) this.$toast.error(err?.response?.data?.message)
                if (err?.response?.data?.error) this.$toast.error(err?.response?.data?.error)

            } finally {
                this.enquiryLoading = false;
            }
        },
        async getSeo() {
            try {
                const response = await this.$publicApi.get(API_ROUTES.seo+`/day-scholar-page`); // eslint-disable-line
                this.seo = response.data.seo
            } catch (err) {
                // console.log(err.response);// eslint-disable-line
                this.$nuxt.context.error({
                    status: err.response.status,
                    message: err.response.data.message,
                })
    
            }
        },
    },
}
</script>

<style scoped>
.side-bar-widget .side-bar-widget-tag li.active {
    position: relative;
    z-index: 10;
}
.side-bar-widget .side-bar-widget-tag li.active a {
    color: var(--whiteColor);
    background-color: var(--mainColor);
}
.side-bar-widget .side-bar-widget-tag li.active a:after {
    content: "";
    left: 45%;
    bottom: -18px;
    margin-top: -25px;
    width: 40px;
    height: 40px;
    background: #eacf6c;
    position: absolute;
    display: block;
    transform: rotate(50grad);
    z-index: -1;
}

@media only screen and (max-width:767px) {
    .side-bar-widget .side-bar-widget-tag li.active a:after {
        left: 40%;
        bottom: -12px;
    }
}
</style>