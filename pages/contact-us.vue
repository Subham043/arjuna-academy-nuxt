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

        <div class="faq-area pt-100 pb-70">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="contact-info-area pb-70">
                            <div class="container">
                                <div class="row justify-content-center">
                                    <div class="col-lg-12 col-12 col-sm-8">
                                        <div class="contact-info-card">
                                            <i class="ri-map-pin-fill"></i>
                                            <h3>Our location</h3>
                                            <p>Vijaya Nagar, Bengaluru, Karnataka, 560040</p>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-6">
                                        <div class="contact-info-card">
                                            <i class="ri-mail-fill"></i>
                                            <h3>Email us</h3>
                                            <p>
                                                <a
                                                    href=""><span>info@aaaedu.in</span></a>
                                            </p>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-6">
                                        <div class="contact-info-card">
                                            <i class="ri-phone-fill"></i>
                                            <h3>Phone</h3>
                                            <p><a href="tel:+917676642258">+91 7676642258</a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="contact-map-area pb-100">
                            <div class="container">
                                <div class="contact-map mb-20">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.972641599872!2d-122.40869708532713!3d37.790680919018435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808bfb7cb35b%3A0x9b649f6a7d9c50e8!2s560%20Bush%20St%20%235%2C%20San%20Francisco%2C%20CA%2094108%2C%20USA!5e0!3m2!1sen!2sbd!4v1641381557316!5m2!1sen!2sbd"></iframe>
                                </div>
                                <div class="contact-map mb-20">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.972641599872!2d-122.40869708532713!3d37.790680919018435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808bfb7cb35b%3A0x9b649f6a7d9c50e8!2s560%20Bush%20St%20%235%2C%20San%20Francisco%2C%20CA%2094108%2C%20USA!5e0!3m2!1sen!2sbd!4v1641381557316!5m2!1sen!2sbd"></iframe>
                                </div>
                                <div class="contact-map mb-20">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.972641599872!2d-122.40869708532713!3d37.790680919018435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808bfb7cb35b%3A0x9b649f6a7d9c50e8!2s560%20Bush%20St%20%235%2C%20San%20Francisco%2C%20CA%2094108%2C%20USA!5e0!3m2!1sen!2sbd!4v1641381557316!5m2!1sen!2sbd"></iframe>
                                </div>
                                <div class="contact-map mb-20">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.972641599872!2d-122.40869708532713!3d37.790680919018435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808bfb7cb35b%3A0x9b649f6a7d9c50e8!2s560%20Bush%20St%20%235%2C%20San%20Francisco%2C%20CA%2094108%2C%20USA!5e0!3m2!1sen!2sbd!4v1641381557316!5m2!1sen!2sbd"></iframe>
                                </div>
                                <div class="contact-map">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.972641599872!2d-122.40869708532713!3d37.790680919018435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808bfb7cb35b%3A0x9b649f6a7d9c50e8!2s560%20Bush%20St%20%235%2C%20San%20Francisco%2C%20CA%2094108%2C%20USA!5e0!3m2!1sen!2sbd!4v1641381557316!5m2!1sen!2sbd"></iframe>
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
                                                                <el-input placeholder="Course" class="w-100" v-model="course"></el-input>
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
import Breadcrumb from '~/components/Breadcrumb.vue';
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
    mounted() {
        // eslint-disable-next-line nuxt/no-env-in-hooks
        if (process.client) {
            this.$scrollTo("#__nuxt", 0, { force: true });
        }
    },
    async fetch() {
      await this.getSeo();
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
    },
    components: { Breadcrumb }
}
</script>