<template>
    <div>
        <Breadcrumb 
            title="Syllabus"
            :pages="[
                {
                    link:'/vrddhi',
                    name:'Vrddhi'
                },
                {
                    link:'',
                    name:'Syllabus'
                }
            ]"
        />

        <div class="faq-area pt-70 pb-70">
            <div class="container">
                <div class="row">
                    <div class="col-lg-5">
                        <div class="faq-img">
                            <img v-lazy-load data-src="/images/faq-img.jpg" alt="faq" />
                            <div class="shape">
                                <img v-lazy-load data-src="/images/faq-shape.png" alt="Faq" />
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-7">
                        <div class="contact-widget-area pb-70">
                            <div class="container">
                                <div class="register-form">
                                    <div class="top-header">
                                        <h3>
                                            Vrddhi Syllabus
                                        </h3>
                                    </div>
                                    <div class="contact-form">
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
                                                            <ValidationProvider v-slot="{ classes, errors }" rules="required|custom_message" name="school_name">
                                                                <el-input placeholder="School's Name" class="w-100" v-model="school_name"></el-input>
                                                                <div  :class="classes">{{ errors[0] }}</div>
                                                            </ValidationProvider>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-4 col-md-6">
                                                        <div class="form-group">
                                                            <ValidationProvider v-slot="{ classes, errors }" rules="required|phone" name="phone">
                                                                <el-input placeholder="Whatsapp Number" class="w-100" v-model="phone"></el-input>
                                                                <div  :class="classes">{{ errors[0] }}</div>
                                                            </ValidationProvider>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-4 col-md-6">
                                                        <div class="form-group">
                                                            <ValidationProvider v-slot="{ classes, errors }" rules="required|alpha_spaces" name="father_name">
                                                                <el-input placeholder="Father's Name" class="w-100" v-model="father_name"></el-input>
                                                                <div  :class="classes">{{ errors[0] }}</div>
                                                            </ValidationProvider>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-4 col-md-6">
                                                        <div class="form-group">
                                                            <ValidationProvider v-slot="{ classes, errors }" rules="required|phone" name="father_phone">
                                                                <el-input placeholder="Father's Phone" class="w-100" v-model="father_phone"></el-input>
                                                                <div  :class="classes">{{ errors[0] }}</div>
                                                            </ValidationProvider>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-4 col-md-6">
                                                        <div class="form-group">
                                                            <ValidationProvider v-slot="{ classes, errors }" rules="required|email" name="father_email">
                                                                <el-input placeholder="Father's Email" class="w-100" v-model="father_email"></el-input>
                                                                <div  :class="classes">{{ errors[0] }}</div>
                                                            </ValidationProvider>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-4 col-md-6">
                                                        <div class="form-group">
                                                            <ValidationProvider v-slot="{ classes, errors }" rules="required|alpha_spaces" name="mother_name">
                                                                <el-input placeholder="Mother's Name" class="w-100" v-model="mother_name"></el-input>
                                                                <div  :class="classes">{{ errors[0] }}</div>
                                                            </ValidationProvider>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-4 col-md-6">
                                                        <div class="form-group">
                                                            <ValidationProvider v-slot="{ classes, errors }" rules="required|phone" name="mother_phone">
                                                                <el-input placeholder="Mother's Phone" class="w-100" v-model="mother_phone"></el-input>
                                                                <div  :class="classes">{{ errors[0] }}</div>
                                                            </ValidationProvider>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-4 col-md-6">
                                                        <div class="form-group">
                                                            <ValidationProvider v-slot="{ classes, errors }" rules="required|custom_message" name="mother_email">
                                                                <el-input placeholder="Mother's Email" class="w-100" v-model="mother_email"></el-input>
                                                                <div  :class="classes">{{ errors[0] }}</div>
                                                            </ValidationProvider>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-6 col-md-6">
                                                        <div class="form-group">
                                                            <ValidationProvider v-slot="{ classes, errors }" rules="required|custom_message" name="standard">
                                                                <el-select v-model="standard" class="w-100" placeholder="Choose Your Class">
                                                                    <el-option
                                                                    v-for="item in standardOptions"
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
                                                            <ValidationProvider v-slot="{ classes, errors }" rules="required|custom_message" name="syllabus">
                                                                <el-select v-model="syllabus" class="w-100" placeholder="Select Your Syllabus">
                                                                    <el-option
                                                                    v-for="item in syllabusOptions"
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
                                                        <ValidationProvider v-slot="{ classes, errors }" rules="required|ext:jpg,jpeg,png,webp" name="card">
                                                            <div class="form-group">
                                                                <label class="form-label">Student's ID Cards * <br/> <code>(Only PDF | JPG | PNG files are allowed. Max-size 512kb)</code></label>
                                                                <input v-model="card" type="hidden" />
                                                                <input class="form-control" type="file" @change="handleFileChnage" />
                                                            </div>
                                                            <div :class="classes">{{ errors[0] }}</div>
                                                        </ValidationProvider>
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
    name: "VrddhiSyllabusPage",
    layout: "MainPageLayout",
    data() {
        return {
            standardOptions: [
                {
                    value: '8th',
                    label: '8th'
                },
                {
                    value: '9th',
                    label: '9th'
                },
                {
                    value: '10th',
                    label: '10th'
                },
            ],
            syllabusOptions: [
                {
                    value: 'ICSE',
                    label: 'ICSE'
                },
                {
                    value: 'CBSE',
                    label: 'CBSE'
                },
                {
                    value: 'State',
                    label: 'State'
                },
            ],
            name:'',
            school_name:'',
            phone:'',
            father_name:'',
            father_email:'',
            father_phone:'',
            mother_name:'',
            mother_email:'',
            mother_phone:'',
            standard:'',
            syllabus:'',
            card: [],
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
                const formData = new FormData;
                formData.append('name', this.name);
                formData.append('school_name', this.school_name);
                formData.append('phone', this.phone);
                formData.append('father_name', this.father_name);
                formData.append('father_email', this.father_email);
                formData.append('father_phone', this.father_phone);
                formData.append('mother_name', this.mother_name);
                formData.append('mother_email', this.mother_email);
                formData.append('mother_phone', this.mother_phone);
                formData.append('class', this.standard);
                formData.append('syllabus', this.syllabus);
                formData.append('card', this.card);
                const response = await this.$publicApi.post(API_ROUTES.vrddhi,formData);
                this.name=''
                this.school_name=''
                this.phone=''
                this.father_name=''
                this.father_email=''
                this.father_phone=''
                this.mother_name=''
                this.mother_email=''
                this.mother_phone=''
                this.standard=''
                this.syllabus=''
                this.card=[]
                this.$refs.form.reset()
                this.$toast.success('Admission Recieved Successfully.')
                window.open(response.data.file_link, '_blank');
            } catch (err) {
                this.$refs.form.setErrors({
                    school_name: err?.response?.data?.errors?.school_name?.length>0 && err?.response?.data?.errors?.school_name[0],
                    name: err?.response?.data?.errors?.name?.length>0 && err?.response?.data?.errors?.name[0],
                    phone: err?.response?.data?.errors?.phone?.length>0 && err?.response?.data?.errors?.phone[0],
                    father_name: err?.response?.data?.errors?.father_name?.length>0 && err?.response?.data?.errors?.father_name[0],
                    father_phone: err?.response?.data?.errors?.father_phone?.length>0 && err?.response?.data?.errors?.father_name[0],
                    father_email: err?.response?.data?.errors?.father_email?.length>0 && err?.response?.data?.errors?.father_name[0],
                    mother_name: err?.response?.data?.errors?.mother_name?.length>0 && err?.response?.data?.errors?.mother_name[0],
                    mother_phone: err?.response?.data?.errors?.mother_phone?.length>0 && err?.response?.data?.errors?.mother_name[0],
                    mother_email: err?.response?.data?.errors?.mother_email?.length>0 && err?.response?.data?.errors?.mother_name[0],
                    standard: err?.response?.data?.errors?.class?.length>0 && err?.response?.data?.errors?.class[0],
                    syllabus: err?.response?.data?.errors?.syllabus?.length>0 && err?.response?.data?.errors?.syllabus[0],
                    card: err?.response?.data?.errors?.card?.length>0 && err?.response?.data?.errors?.card[0],
                });
                if(err?.response?.data?.message) this.$toast.error(err?.response?.data?.message)
                if(err?.response?.data?.error) this.$toast.error(err?.response?.data?.error)
                
            } finally{
                this.loading = false;
            }
        },
        handleFileChnage(event){
            this.card = event.target.files[0];
        },
    },
    components: { Breadcrumb }
}
</script>