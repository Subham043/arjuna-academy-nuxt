<template>
    <div>
        <Breadcrumb title="Admission" />

        <div class="faq-area pt-100 pb-70">
            <div class="container">
                <div class="row">
                    <div class="col-lg-5">
                        <div class="faq-img">
                            <img src="/images/faq-img.jpg" alt="faq" />
                            <div class="shape">
                                <img src="/images/faq-shape.png" alt="Faq" />
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-7">
                        <div class="contact-widget-area pb-70">
                            <div class="container">
                                <div class="contact-form">
                                    <div class="section-title text-center mb-30">
                                        <h3>
                                            Online Admission Form for Class 11 or 1st PUC    
                                        </h3>
                                    </div>
                                    <ValidationObserver ref="form" v-slot="{ handleSubmit }">
                                        <form id="contactForm" @submit.prevent="handleSubmit(formHandler)">
                                            <div class="row">
                                                <div class="col-lg-4 col-md-6">
                                                    <div class="form-group">
                                                        <ValidationProvider v-slot="{ classes, errors }" rules="required|alpha_spaces" name="name">
                                                            <el-input placeholder="Name" class="w-100" v-model="name"></el-input>
                                                            <div  :class="classes">{{ errors[0] }}</div>
                                                        </ValidationProvider>
                                                    </div>
                                                </div>
                                                <div class="col-lg-4 col-md-6">
                                                    <div class="form-group">
                                                        <ValidationProvider v-slot="{ classes, errors }" rules="required|custom_message" name="school name">
                                                            <el-input placeholder="School's Name" class="w-100" v-model="school_name"></el-input>
                                                            <div  :class="classes">{{ errors[0] }}</div>
                                                        </ValidationProvider>
                                                    </div>
                                                </div>
                                                <div class="col-lg-4 col-md-6">
                                                    <div class="form-group">
                                                        <ValidationProvider v-slot="{ classes, errors }" rules="required|custom_message" name="aadhar card detail">
                                                            <el-input placeholder="Aadhar Card Detail" class="w-100" v-model="aadhar"></el-input>
                                                            <div  :class="classes">{{ errors[0] }}</div>
                                                        </ValidationProvider>
                                                    </div>
                                                </div>
                                                <div class="col-lg-4 col-md-6">
                                                    <div class="form-group">
                                                        <ValidationProvider v-slot="{ classes, errors }" rules="required|alpha_spaces" name="father's name">
                                                            <el-input placeholder="Father's Name" class="w-100" v-model="father_name"></el-input>
                                                            <div  :class="classes">{{ errors[0] }}</div>
                                                        </ValidationProvider>
                                                    </div>
                                                </div>
                                                <div class="col-lg-4 col-md-6">
                                                    <div class="form-group">
                                                        <ValidationProvider v-slot="{ classes, errors }" rules="required|phone" name="father's phone">
                                                            <el-input placeholder="Father's Phone" class="w-100" v-model="father_phone"></el-input>
                                                            <div  :class="classes">{{ errors[0] }}</div>
                                                        </ValidationProvider>
                                                    </div>
                                                </div>
                                                <div class="col-lg-4 col-md-6">
                                                    <div class="form-group">
                                                        <ValidationProvider v-slot="{ classes, errors }" rules="required|custom_message" name="father's occupation">
                                                            <el-input placeholder="Father's Occupation" class="w-100" v-model="father_occupation"></el-input>
                                                            <div  :class="classes">{{ errors[0] }}</div>
                                                        </ValidationProvider>
                                                    </div>
                                                </div>
                                                <div class="col-lg-4 col-md-6">
                                                    <div class="form-group">
                                                        <ValidationProvider v-slot="{ classes, errors }" rules="required|alpha_spaces" name="mother's name">
                                                            <el-input placeholder="Mother's Name" class="w-100" v-model="mother_name"></el-input>
                                                            <div  :class="classes">{{ errors[0] }}</div>
                                                        </ValidationProvider>
                                                    </div>
                                                </div>
                                                <div class="col-lg-4 col-md-6">
                                                    <div class="form-group">
                                                        <ValidationProvider v-slot="{ classes, errors }" rules="required|phone" name="mother's phone">
                                                            <el-input placeholder="Mother's Phone" class="w-100" v-model="mother_phone"></el-input>
                                                            <div  :class="classes">{{ errors[0] }}</div>
                                                        </ValidationProvider>
                                                    </div>
                                                </div>
                                                <div class="col-lg-4 col-md-6">
                                                    <div class="form-group">
                                                        <ValidationProvider v-slot="{ classes, errors }" rules="required|custom_message" name="mother's occupation">
                                                            <el-input placeholder="Mother's Occupation" class="w-100" v-model="mother_occupation"></el-input>
                                                            <div  :class="classes">{{ errors[0] }}</div>
                                                        </ValidationProvider>
                                                    </div>
                                                </div>
                                                <div class="col-lg-6 col-md-6">
                                                    <div class="form-group">
                                                        <ValidationProvider v-slot="{ classes, errors }" rules="required|custom_message" name="center">
                                                            <el-select v-model="center" class="w-100" placeholder="Choose Your Center">
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
                                                <div :class="`col-lg-6 col-md-6`">
                                                    <div class="form-group">
                                                        <ValidationProvider v-slot="{ classes, errors }" rules="required|custom_message" name="batch">
                                                            <el-select v-model="batch" class="w-100" placeholder="Select Your Batch">
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
                                                <div class="col-lg-12 col-md-12">
                                                    <ValidationProvider v-slot="{ classes, errors }" rules="required|ext:jpg,jpeg,png,webp" name="image">
                                                        <div class="form-group">
                                                            <label class="form-label">Class 10 Preparatory Marks* <br/> <code>(Only PDF | JPG | PNG files are allowed. Max-size 512kb)</code></label>
                                                            <input v-model="marks" type="hidden" />
                                                            <input class="form-control" type="file" @change="handleFileChnage" />
                                                        </div>
                                                        <div :class="classes">{{ errors[0] }}</div>
                                                    </ValidationProvider>
                                                </div>
                                                <div class="col-lg-12 col-md-12">
                                                    <div class="form-group">
                                                        <ValidationProvider v-slot="{ classes, errors }" rules="required|custom_message" name="permanent address">
                                                            <el-input placeholder="Permanenet Address" class="w-100" type="textarea" :rows="5" v-model="message"></el-input>
                                                            <div  :class="classes">{{ errors[0] }}</div>
                                                        </ValidationProvider>
                                                    </div>
                                                </div>
                                                <div class="col-lg-6 col-md-12">
                                                    <div class="form-group">
                                                        <ValidationProvider v-slot="{ classes, errors }" rules="required|custom_message" name="sibling">
                                                            <label>Do you have sibling?</label><br/>
                                                            <el-switch
                                                            v-model="sibling"
                                                            active-text="No"
                                                            inactive-text="Yes">
                                                            </el-switch>
                                                            <div  :class="classes">{{ errors[0] }}</div>
                                                        </ValidationProvider>
                                                    </div>
                                                </div>
                                                <template>
                                                    <div class="col-lg-6 col-md-12">
                                                        <div class="form-group">
                                                            <ValidationProvider v-slot="{ classes, errors }" rules="required|custom_message" name="sibling occupation">
                                                                <label>What are they doing?</label><br/>
                                                                <el-switch
                                                                v-model="sibling_occupation"
                                                                active-text="Working"
                                                                inactive-text="Studying">
                                                                </el-switch>
                                                                <div  :class="classes">{{ errors[0] }}</div>
                                                            </ValidationProvider>
                                                        </div>
                                                    </div>
                                                    <template>
                                                        <div class="col-lg-4 col-md-6">
                                                            <div class="form-group">
                                                                <ValidationProvider v-slot="{ classes, errors }" rules="required|custom_message" name="number of siblings">
                                                                    <el-input placeholder="Number of Siblings" class="w-100" v-model="no_of_sibling"></el-input>
                                                                    <div  :class="classes">{{ errors[0] }}</div>
                                                                </ValidationProvider>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-4 col-md-6">
                                                            <div class="form-group">
                                                                <ValidationProvider v-slot="{ classes, errors }" rules="required|custom_message" name="sibling's class">
                                                                    <el-input placeholder="If Studying, which grade are they studying in?" class="w-100" v-model="sibling_class"></el-input>
                                                                    <div  :class="classes">{{ errors[0] }}</div>
                                                                </ValidationProvider>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-4 col-md-6">
                                                            <div class="form-group">
                                                                <ValidationProvider v-slot="{ classes, errors }" rules="required|custom_message" name="sibling's school">
                                                                    <el-input placeholder="Your Siblings School Name" class="w-100" v-model="sibling_school"></el-input>
                                                                    <div  :class="classes">{{ errors[0] }}</div>
                                                                </ValidationProvider>
                                                            </div>
                                                        </div>
                                                    </template>
                                                </template>
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
</template>

<script>
import Breadcrumb from '~/components/Breadcrumb.vue';
import { API_ROUTES } from '~/helper/api_routes';



export default {
    name: "AdmissionPucPage",
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
        };
    },
    mounted() {
        // eslint-disable-next-line nuxt/no-env-in-hooks
        if (process.client) {
            this.$scrollTo("#__nuxt", 0, { force: true });
        }
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
                console.log(err?.response?.data?.errors?.email[0]);// eslint-disable-line
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
        handleFileChnage(event){
            this.marks = event.target.files[0];
        },
    },
    components: { Breadcrumb }
}
</script>