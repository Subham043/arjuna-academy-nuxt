<template>
    <div>
        <Breadcrumb 
            title="Careers"
            :pages="[
                {
                    link:'',
                    name:'Careers'
                }
            ]"
        />

        <div class="enrolled-area pt-70 pb-70">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-5">
                        <div class="enrolled-img-two mb-30" data-speed="0.05" data-revert="true">
                            <img v-lazy-load data-src="/images/parent-say.webp" alt="Enrolled">
                        </div>
                    </div>
                    <div class="col-lg-7">
                        <div class="enrolled-content mb-30">
                            <div class="section-title">
                                <span>Careers</span>
                                <h2>
                                    Working at Arjunaa Academy For Achievers
                                </h2>
                                <p>
                                    At AAAEDU, our vision is driven by our people. We strongly believe our success lies in our people. We take great pride in the exceptional pedagogy and quality of education we deliver to our students. We make an unusual effort to identify and recruit the very best person for every job. We extend a lot of ownership to our people and offer our people the opportunity to move ahead more rapidly than is possible at most other places.
                                </p>
                                <p>
                                    We're looking for mission-focused candidates who have a deeper meaning in their work. We advocate for diversity and create a welcoming space for the employees.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="featured-area pt-70 pb-70">
            <div class="container">
                <div class="row align-items-center mb-45">
                    <div class="col-lg-12 col-md-12">
                        <div class="section-title mt-rs-20 text-center">
                            <span>Why Choose us</span>
                            <h2>Why Join AAAEDU?</h2>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-6 col-6">
                        <div class="featured-item-two">
                            <div class="feature-icon-holder">
                                <img data-src="/images/careers/heartbeat@1x.png" v-lazy-load>
                                <h3>Your wellbeing is our priority</h3>
                            </div>
                            <p>To be empowered to do your best, your wellbeing needs to come first. We prioritize the health, happiness, and wellbeing of an individual.</p>
                        </div>
                    </div>
                    <div class="col-lg-6 col-6">
                        <div class="featured-item-two">
                            <div class="feature-icon-holder">
                                <img data-src="/images/careers/teamwork@1x.png" v-lazy-load>
                                <h3>Inclusion</h3>
                            </div>
                            <p>We foster a collaborative, inclusive culture that inspires you to give the best. We strive to create an accessible and inclusive experience for all candidates.</p>
                        </div>
                    </div>
                    <div class="col-lg-6 col-6">
                        <div class="featured-item-two">
                            <div class="feature-icon-holder">
                                <img data-src="/images/careers/green-leaf@1x.png" v-lazy-load>
                                <h3>Learn and grow</h3>
                            </div>
                            <p>AAAEDU is a great place to start your working life, and we offer the opportunity to feel good by doing well in your everyday work. Our supportive environment enables you to learn, develop and be your best in the role that best suits you.</p>
                        </div>
                    </div>
                    <div class="col-lg-6 col-6">
                        <div class="featured-item-two">
                            <div class="feature-icon-holder">
                                <img data-src="/images/careers/respect--1-@1x.png" v-lazy-load>
                                <h3>Integrity, Respect, Courage, and Transparency</h3>
                            </div>
                            <p>The employees are a crucial fabric of our culture. We work on four essential principles: Integrity, Respect, Courage, and Transparency. We are committed to putting ethics first, and these principles allow us to continue to be the most trusted Institute. We empower our people to approach challenges to fulfil the students' dreams.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="featured-area pt-70 pb-70">
            <div class="container">
                <div class="row align-items-center mb-45">
                    <div class="col-lg-12 col-md-12">
                        <div class="section-title mt-rs-20 text-center">
                            <span>Current Openings</span>
                            <h2>Explore a Bright Career at AAAEDU</h2>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12 col-12" id="job-area">
                        <div v-if="jobLoading" class="row justify-content-center">
                            <div  v-for="i in 9" :key="i" class="col-lg-12 col-md-12">
                                <el-skeleton style="width: 100%" animated>
                                    <template slot="template">
                                        <el-skeleton-item variant="p" style="width: 100%; height: 50px;" />
                                        <br/>
                                    </template>
                                </el-skeleton>
                            </div>
                        </div>
                        <el-collapse v-if="!jobLoading && job.length>0" accordion :value="accordianValue" @change="(val)=>{accordianValue=val}">
                            <el-collapse-item v-for="(item, i) in job" :key="i" :name="item.id">
                                <template slot="title">
                                    <div class="w-100 d-flex align-items-center justify-content-between">
                                        <h4 class="col-auto m-0">{{item.name}}</h4>
                                        <button class="btn btn-success d-none-sm">{{accordianValue==item.id ? 'Hide' : 'View'}} Job Description</button>
                                    </div>
                                </template>
                                <div class="section-title" v-html="item.description" />
                                <button class="btn btn-outline-warning mt-2" @click="dialogVideoVisible=true">Apply Now</button>
                            </el-collapse-item>
                        </el-collapse>
                    </div>
                </div>
            </div>
        </div>
        <el-dialog title="Recruitment Form" :visible.sync="dialogVideoVisible" width="50%" top="20px">
            <div class="contact-form">
                <ValidationObserver ref="form" v-slot="{ handleSubmit }">
                    <form id="contactForm" @submit.prevent="handleSubmit(formHandler)">
                        <div class="row">
                            <div class="col-lg-12">
                                <ValidationProvider v-slot="{ classes, errors }" rules="required|alpha_spaces" name="name">
                                    <div class="form-group">
                                        <input type="text" name="name" id="name" class="form-control" v-model="name"
                                            data-error="Name*"
                                            placeholder="Name*" />
                                    </div>
                                    <div :class="classes">{{ errors[0] }}</div>
                                </ValidationProvider>
                            </div>
                            <div class="col-lg-12">
                                <ValidationProvider v-slot="{ classes, errors }" rules="required|email" name="email">
                                    <div class="form-group">
                                        <input type="text" name="email" id="email" class="form-control" v-model="email"
                                            data-error="Email Address*"
                                            placeholder="Email Address*" />
                                    </div>
                                    <div :class="classes">{{ errors[0] }}</div>
                                </ValidationProvider>
                            </div>
                            <div class="col-lg-12">
                                <ValidationProvider v-slot="{ classes, errors }" rules="required|phone" name="phone">
                                    <div class="form-group">
                                        <input type="text" name="phone" id="phone" class="form-control" v-model="phone"
                                            data-error="Phone Number*"
                                            placeholder="Phone Number*" />
                                    </div>
                                    <div :class="classes">{{ errors[0] }}</div>
                                </ValidationProvider>
                            </div>
                            <div class="col-lg-12">
                                <ValidationProvider v-slot="{ classes, errors }" rules="required|ext:jpg,jpeg,png,webp,pdf" name="cv">
                                    <div class="form-group">
                                        <label class="form-label">CV* <code>(Only PDF | JPG | PNG | PDF files are allowed. Max-size 512kb)</code></label>
                                        <input v-model="cv" type="hidden" />
                                        <input class="form-control" type="file" @change="handleFileChnage" />
                                    </div>
                                    <div :class="classes">{{ errors[0] }}</div>
                                </ValidationProvider>
                            </div>
                            <div class="col-lg-12 col-md-12 text-center">
                                <button type="submit" :disabled="loading" class="default-btn">
                                    <template v-if="!loading">
                                        Submit Now
                                    </template>
                                    <div v-else class="spinner-border" role="status"></div>
                                </button>
                            </div>
                        </div>
                    </form>
                </ValidationObserver>
            </div>
        </el-dialog>

    </div>
</template>

<script>
import { API_ROUTES } from '~/helper/api_routes';


export default {
    name: "CareersPage",
    layout: "MainPageLayout",
    data() {
        return {
            jobLoading: false,
            job: [],
            jobCount:1,
            jobCurrentPage: 1,
            jobPerPage: 1,
            accordianValue: "0",
            dialogVideoVisible: false,
            loading: false,
            email: '',
            name: '',
            phone: '',
            cv: [],
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
        await this.getJob(this.$route.query.page ? Number(this.$route.query.page) : 1);
        await this.getSeo();
    },
    watch: {
        $route(to, from) {
            this.handlePageChnage();
            if (process.client) {
                this.$scrollTo("#job-area", 0, { force: true });
            }
        }
    },
    methods: {
        async getSeo() {
            try {
                const response = await this.$publicApi.get(API_ROUTES.seo+`/careers-page`); // eslint-disable-line
                this.seo = response.data.seo
            } catch (err) {
                // console.log(err.response);// eslint-disable-line
                this.$nuxt.context.error({
                    status: err.response.status,
                    message: err.response.data.message,
                })
    
            }
        },
        async getJob(page=0) {
            this.jobLoading=true;
            try {
                const response = await this.$publicApi.get(API_ROUTES.job_opening+`?total=12&page=${page}`); // eslint-disable-line
                this.job = response.data.data
                this.jobCount = response?.data?.meta?.total
                this.jobPerPage = response?.data?.meta?.per_page
                this.jobCurrentPage = this.$route.query.page ? Number(this.$route.query.page) : 1;
            } catch (err) {
                // console.log(err.response);// eslint-disable-line
                this.$nuxt.context.error({
                    status: err.response.status,
                    message: err.response.data.message,
                })
    
            }finally{
                this.jobLoading=false;
            }
        },
        handlePaginationChnage(page){
            this.$router.push({query:{page}});
        },
        handlePageChnage(){
            this.faqCurrentPage = this.$route.query.page ? Number(this.$route.query.page) : 1;
            this.getJob(this.$route.query.page ? Number(this.$route.query.page) : 1);
        },
        async formHandler(){
            this.loading=true;
            try {
                const formData = new FormData;
                formData.append('name', this.name);
                formData.append('email', this.email);
                formData.append('phone', this.phone);
                formData.append('cv', this.cv);
                const response = await this.$publicApi.post(API_ROUTES.job_opening+`/enquiry/${this.accordianValue}/create`, formData);
                this.name=''
                this.email=''
                this.phone=''
                this.$refs.form.reset()
                this.$toast.success(response.data.message)
                this.dialogVideoVisible=false;
            } catch (err) {
                this.$refs.form.setErrors({
                    email: err?.response?.data?.errors?.email?.length>0 && err?.response?.data?.errors?.email[0],
                    name: err?.response?.data?.errors?.name?.length>0 && err?.response?.data?.errors?.name[0],
                    phone: err?.response?.data?.errors?.phone?.length>0 && err?.response?.data?.errors?.phone[0],
                });
                if(err?.response?.data?.message) this.$toast.error(err?.response?.data?.message)
                if(err?.response?.data?.error) this.$toast.error(err?.response?.data?.error)
            } finally{
                this.loading=false;
            }
        },
        handleFileChnage(event){
            this.cv = event.target.files[0];
        },
    },
    components: { 
        Breadcrumb: () => import('~/components/Breadcrumb.vue'),
    }
}
</script>