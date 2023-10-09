<template>
    <div>
        <Breadcrumb 
            title="Contact Us"
            :pages="[
                {
                    link:'',
                    name:'Contact Us'
                }
            ]"
        />

        <div class="faq-area pt-70 pb-70">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="contact-info-area pb-70">
                            <div class="container">
                                <div class="row justify-content-center">
                                    <div class="col-lg-12 col-12 col-sm-8">
                                        <div class="contact-info-card">
                                            <span class="svg-icon">
                                                <font-awesome-icon :icon="['fa', 'map-pin']"  />
                                            </span>
                                            <h3>Our location</h3>
                                            <p>3rd Floor, No.02, CHBCS 1st Layout, 1st Floor, 5th Main, Vijaya Nagar</p>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-6">
                                        <div class="contact-info-card">
                                            <span class="svg-icon">
                                                <font-awesome-icon :icon="['fa', 'envelope']"  />
                                            </span>
                                            <h3>Email us</h3>
                                            <p>
                                                <a
                                                    href="mailto:info@aaaedu.in"><span>info@aaaedu.in</span></a>
                                            </p>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-6">
                                        <div class="contact-info-card">
                                            <span class="svg-icon">
                                                <font-awesome-icon :icon="['fa', 'phone']"  />
                                            </span>
                                            <h3>Phone</h3>
                                            <p><a href="tel:+917676642258">+91 7676642258</a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="contact-map-area pb-100">
                            <div class="container">
                                <div v-for="(item, i) in maps" :key="i" class="contact-map mb-20">
                                    <div class="contact-info-card p-4 rounded">
                                        <iframe
                                            :src="item"></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="contact-widget-area faq-contact">
                            <div class="container">
                                <div class="register-form">
                                    <div class="top-header">
                                        <h3>Get in Touch with us</h3>
                                    </div>
                                    <div class="contact-form">
                                        <ValidationObserver ref="form" v-slot="{ handleSubmit }">
                                            <form id="contactForm" @submit.prevent="handleSubmit(formHandler)">
                                                <div class="row">
                                                    <div class="col-12">
                                                        <h3 class="user-title">Personal Information</h3>
                                                    </div>
                                                    <div class="col-lg-6 col-md-6">
                                                        <div class="form-group">
                                                            <ValidationProvider v-slot="{ classes, errors }" rules="required|alpha_spaces" name="name">
                                                                <el-input placeholder="Name" class="w-100" v-model="name"></el-input>
                                                                <div  :class="classes">{{ errors[0] }}</div>
                                                            </ValidationProvider>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-6 col-md-6">
                                                        <div class="form-group">
                                                            <ValidationProvider v-slot="{ classes, errors }" rules="required|email" name="email">
                                                                <el-input placeholder="Email" class="w-100" v-model="email"></el-input>
                                                                <div  :class="classes">{{ errors[0] }}</div>
                                                            </ValidationProvider>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-6 col-md-6">
                                                        <div class="form-group">
                                                            <ValidationProvider v-slot="{ classes, errors }" rules="required|phone" name="phone">
                                                                <el-input placeholder="Phone" class="w-100" v-model="phone"></el-input>
                                                                <div  :class="classes">{{ errors[0] }}</div>
                                                            </ValidationProvider>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-6 col-md-6">
                                                        <div class="form-group">
                                                            <ValidationProvider v-slot="{ classes, errors }" rules="required|custom_message" name="course">
                                                                <el-select v-model="course" class="w-100" placeholder="Select Your Course">
                                                                    <el-option
                                                                    v-for="item in courseOptions"
                                                                    :key="item.id"
                                                                    :label="item.name"
                                                                    :value="item.name">
                                                                    </el-option>
                                                                </el-select>
                                                                <div  :class="classes">{{ errors[0] }}</div>
                                                            </ValidationProvider>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-6 col-md-6">
                                                        <div class="form-group">
                                                            <ValidationProvider v-slot="{ classes, errors }" rules="required|custom_message" name="location">
                                                                <el-input placeholder="Location" class="w-100" v-model="location"></el-input>
                                                                <div  :class="classes">{{ errors[0] }}</div>
                                                            </ValidationProvider>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-6 col-md-6">
                                                        <div class="form-group">
                                                            <ValidationProvider v-slot="{ classes, errors }" rules="required|custom_message" name="request_type">
                                                                <el-select v-model="request_type" class="w-100" placeholder="Select Your Request">
                                                                    <el-option
                                                                    v-for="item in requestOptions"
                                                                    :key="item.value"
                                                                    :label="item.label"
                                                                    :value="item.value">
                                                                    </el-option>
                                                                </el-select>
                                                                <div  :class="classes">{{ errors[0] }}</div>
                                                            </ValidationProvider>
                                                        </div>
                                                    </div>
                                                    <div class="col-12 mb-3">
                                                        <h3 class="user-title">Please give us your comfortable date & time to contact you</h3>
                                                    </div>
                                                    <div :class="`${request_type==='Visit Our Center' ? 'col-lg-4' : 'col-lg-6'} col-md-6`">
                                                        <div class="form-group">
                                                            <ValidationProvider v-slot="{ classes, errors }" rules="required|custom_message" name="date">
                                                                <el-date-picker
                                                                v-model="date"
                                                                type="date"
                                                                class="w-100"
                                                                placeholder="Pick A Date">
                                                                </el-date-picker>
                                                                <div  :class="classes">{{ errors[0] }}</div>
                                                            </ValidationProvider>
                                                        </div>
                                                    </div>
                                                    <div :class="`${request_type==='Visit Our Center' ? 'col-lg-4' : 'col-lg-6'} col-md-6`">
                                                        <div class="form-group">
                                                            <ValidationProvider v-slot="{ classes, errors }" rules="required|custom_message" name="time">
                                                                <el-time-picker
                                                                v-model="time"
                                                                class="w-100"
                                                                placeholder="Pick A Time">
                                                                </el-time-picker>
                                                                <div  :class="classes">{{ errors[0] }}</div>
                                                            </ValidationProvider>
                                                        </div>
                                                    </div>
                                                    <div v-if="request_type==='Visit Our Center'" class="col-lg-4 col-md-6">
                                                        <div class="form-group">
                                                            <ValidationProvider v-slot="{ classes, errors }" :rules="request_type==='Visit Our Center' ? 'required|custom_message' : ''" name="branch">
                                                                <el-select v-model="branch" class="w-100" placeholder="Select Branch">
                                                                    <el-option
                                                                    v-for="item in branchOptions"
                                                                    :key="item.value"
                                                                    :label="item.label"
                                                                    :value="item.value">
                                                                    </el-option>
                                                                </el-select>
                                                                <div  :class="classes">{{ errors[0] }}</div>
                                                            </ValidationProvider>
                                                        </div>
                                                    </div>
                                                    <div class="col-12 mb-3">
                                                        <h3 v-if="request_type==='Home Visit'" class="user-title">Please provide the address where you would like our executive to meet you</h3>
                                                        <h3 v-else-if="request_type==='Connect Online'" class="user-title">Please provide us the details to connect online</h3>
                                                        <h3 v-else class="user-title">Please provide us the reason for contacting us</h3>
                                                    </div>
                                                    <div class="col-lg-12 col-md-12">
                                                        <div class="form-group">
                                                            <ValidationProvider v-slot="{ classes, errors }" rules="required|custom_message" name="detail">
                                                                <el-input :placeholder="request_type==='Home Visit' ? 'Address' : 'Detail'" class="w-100" type="textarea" :rows="5" v-model="message"></el-input>
                                                                <div  :class="classes">{{ errors[0] }}</div>
                                                            </ValidationProvider>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-12 col-md-12">
                                                        <button type="submit" :disabled="loading" class="default-btn">
                                                            <template v-if="!loading">
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
    name: "ContactPage",
    layout: "MainPageLayout",
    data() {
        return {
            requestOptions: [
                {
                    value: 'Call Back',
                    label: 'Call Back'
                },
                {
                    value: 'Home Visit',
                    label: 'Home Visit'
                },
                {
                    value: 'Visit Our Center',
                    label: 'Visit Our Center'
                },
                {
                    value: 'Connect Online',
                    label: 'Connect Online'
                },
            ],
            branchOptions: [
                {
                    value: 'Vijaynagar',
                    label: 'Vijaynagar'
                },
                {
                    value: 'Hebbal',
                    label: 'Hebbal'
                },
                {
                    value: 'Kanakapura Road',
                    label: 'Kanakapura Road'
                }
            ],
            courseOptions: [],
            courseLoading: false,
            name:'',
            email:'',
            phone:'',
            course:'',
            location:'',
            date:'',
            time:'',
            message:'',
            request_type:'',
            branch:'',
            loading: false,
            seo: {
                meta_title:'',
                meta_description:'',
                meta_keywords:'',
                meta_scripts:'',
            },
            maps: [
                'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15552.00140800217!2d77.538494!3d12.971829!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x515d5069e0a4fce1!2sArjunaa%20Academy%20for%20Achievers(AAA)%20JEE%2C%20NEET%20-%20Vijayanagar!5e0!3m2!1sen!2sin!4v1586440325192!5m2!1sen!2sin',
                'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.776319452084!2d77.48676211403486!3d12.922093090888328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3ede984f1f27%3A0x7f696ad5a4030d9a!2sNational%20Public%20School%20Kengeri%2C%20Volagalahalli%2C%20Stage%20II%2C%20Kengeri%20Satellite%20Town%2C%20Bengaluru%2C%20Karnataka%20560060!5e0!3m2!1sen!2sin!4v1635591023182!5m2!1sen!2sin',
                'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.454024789481!2d77.49268751403518!3d12.942773490874773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3e950bc53455%3A0x35253b19d0cb96fa!2sVSS%20INTERNATIONAL%20PUBLIC%20SCHOOL!5e0!3m2!1sen!2sin!4v1635595187330!5m2!1sen!2sin',
                'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.2062541862324!2d77.55329661403454!3d12.894455090906535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3fe6d9b96d51%3A0x650acbdfbeb1f043!2sVedantha%20College!5e0!3m2!1sen!2sin!4v1635595849883!5m2!1sen!2sin',
                'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.1679844355695!2d77.49364961403452!3d12.896917590904888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3f16953a6b8b%3A0xfb95d40f56b02c16!2sBGS%20Public%20School!5e0!3m2!1sen!2sin!4v1635595752947!5m2!1sen!2sin',
                'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.8786673860386!2d77.54884191403657!3d13.043394290808772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3d5aa542f7bf%3A0xec9cb3775d5f49e2!2sMother%20Teresa%20Public%20School!5e0!3m2!1sen!2sin!4v1635595631174!5m2!1sen!2sin',
                'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3896.4942777478095!2d76.67923811402815!3d12.41675259122155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf771b52ccebd7%3A0x4ce0c7b1507fd22f!2sParivarthana%20School%20%26%20College!5e0!3m2!1sen!2sin!4v1635595569553!5m2!1sen!2sin',
                'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3898.2380873874727!2d76.62523931402662!3d12.299746891299138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf7ab9ffafcf89%3A0xbe58a7b82c389e52!2sVijaya%20Vittala%20Composite%20Pre%20University%20College!5e0!3m2!1sen!2sin!4v1635595501547!5m2!1sen!2sin',
                'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.917965171257!2d77.45936461403389!3d12.848574890936664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae474832a8c011%3A0x5ff56b36d7a4247b!2sBGS%20International%20Residential%20School!5e0!3m2!1sen!2sin!4v1635595447580!5m2!1sen!2sin'
            ]
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
      await this.getCourse();
    },
    methods: {
        async formHandler(){
            this.loading = true;
            try {
                await this.$publicApi.post(API_ROUTES.contact, {
                    name:this.name, 
                    email:this.email, 
                    phone:this.phone, 
                    course:this.course,
                    location:this.location,
                    date:this.date,
                    time:this.time,
                    branch:this.branch,
                    detail:this.message,
                    request_type:this.request_type,
                    page_url:window.location.href,
                });
                this.name=''
                this.email=''
                this.phone=''
                this.message=''
                this.course=''
                this.location=''
                this.date=''
                this.time=''
                this.branch=''
                this.request_type=''
                this.$refs.form.reset()
                this.$toast.success('Message Recieved Successfully.')
            } catch (err) {
                this.$refs.form.setErrors({
                    email: err?.response?.data?.errors?.email?.length>0 && err?.response?.data?.errors?.email[0],
                    name: err?.response?.data?.errors?.name?.length>0 && err?.response?.data?.errors?.name[0],
                    phone: err?.response?.data?.errors?.phone?.length>0 && err?.response?.data?.errors?.phone[0],
                    course: err?.response?.data?.errors?.course?.length>0 && err?.response?.data?.errors?.course[0],
                    location: err?.response?.data?.errors?.location?.length>0 && err?.response?.data?.errors?.location[0],
                    date: err?.response?.data?.errors?.date?.length>0 && err?.response?.data?.errors?.date[0],
                    time: err?.response?.data?.errors?.time?.length>0 && err?.response?.data?.errors?.time[0],
                    branch: err?.response?.data?.errors?.branch?.length>0 && err?.response?.data?.errors?.branch[0],
                    message: err?.response?.data?.errors?.message?.length>0 && err?.response?.data?.errors?.message[0],
                    request_type: err?.response?.data?.errors?.request_type?.length>0 && err?.response?.data?.errors?.request_type[0],
                });
                if(err?.response?.data?.message) this.$toast.error(err?.response?.data?.message)
                if(err?.response?.data?.error) this.$toast.error(err?.response?.data?.error)
                
            } finally{
                this.loading = false;
            }
        },
        async getSeo() {
            try {
                const response = await this.$publicApi.get(API_ROUTES.seo+`/contact-page`); // eslint-disable-line
                this.seo = response.data.seo
            } catch (err) {
                // console.log(err.response);// eslint-disable-line
                this.$nuxt.context.error({
                    status: err.response.status,
                    message: err.response.data.message,
                })
    
            }
        },
        async getCourse() {
            this.courseLoading = true;
            try {
                const response = await this.$publicApi.get(API_ROUTES.course); // eslint-disable-line
                this.courseOptions = response.data.course
            } catch (err) {
                // console.log(err.response);// eslint-disable-line
                if (err?.response?.data?.message) this.$toast.error(err?.response?.data?.message)
                if (err?.response?.data?.error) this.$toast.error(err?.response?.data?.error)
            } finally {
                this.courseLoading = false;
            }
        },
    },
    components: { 
        Breadcrumb: () => import('~/components/Breadcrumb.vue') 
    }
}
</script>