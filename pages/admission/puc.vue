<template>
    <div>
        <Breadcrumb 
            title="Admission for Class 11 or 1st PUC"
            :pages="[
                {
                    link:'',
                    name:'Admission for Class 11 or 1st PUC'
                }
            ]"
        />

        <div class="faq-area pt-70 pb-70">
            <div class="container">
                <div class="row">
                    <div class="col-lg-5">
                        <div class="faq-img">
                            <img v-lazy-load data-src="/images/faq-img.jpg" width="526" height="491" alt="faq" />
                            <div class="shape">
                                <img v-lazy-load data-src="/images/faq-shape.png" width="80" height="85" alt="Faq" />
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-7">
                        <div class="contact-widget-area pb-70">
                            <div class="container">
                                <div class="register-form">
                                    <div class="top-header">
                                        <h3>
                                            Admission for Class 11 or 1st PUC
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
                                                            <ValidationProvider v-slot="{ classes, errors }" rules="required|custom_message" name="aadhar">
                                                                <el-input placeholder="Aadhar Card Detail" class="w-100" v-model="aadhar"></el-input>
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
                                                            <ValidationProvider v-slot="{ classes, errors }" rules="required|custom_message" name="father_occupation">
                                                                <el-input placeholder="Father's Occupation" class="w-100" v-model="father_occupation"></el-input>
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
                                                            <ValidationProvider v-slot="{ classes, errors }" rules="required|custom_message" name="mother_occupation">
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
                                                                    v-for="item in centerOptions"
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
                                                                    v-for="item in batchOptions"
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
                                                        <ValidationProvider v-slot="{ classes, errors }" rules="required|ext:jpg,jpeg,png,webp" name="marks">
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
                                                            <ValidationProvider v-slot="{ classes, errors }" rules="required|custom_message" name="address">
                                                                <el-input placeholder="Permanenet Address" class="w-100" type="textarea" :rows="5" v-model="address"></el-input>
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
                                                                active-text="Yes"
                                                                inactive-text="No">
                                                                </el-switch>
                                                                <div  :class="classes">{{ errors[0] }}</div>
                                                            </ValidationProvider>
                                                        </div>
                                                    </div>
                                                    <template v-if="sibling">
                                                        <div class="col-lg-6 col-md-12">
                                                            <div class="form-group">
                                                                <ValidationProvider v-slot="{ classes, errors }" rules="required|custom_message" name="sibling_occupation">
                                                                    <label>What are they doing?</label><br/>
                                                                    <el-switch
                                                                    v-model="sibling_occupation"
                                                                    active-text="Studying"
                                                                    inactive-text="Working">
                                                                    </el-switch>
                                                                    <div  :class="classes">{{ errors[0] }}</div>
                                                                </ValidationProvider>
                                                            </div>
                                                        </div>
                                                        <template v-if="sibling_occupation">
                                                            <div class="col-lg-4 col-md-6">
                                                                <div class="form-group">
                                                                    <ValidationProvider v-slot="{ classes, errors }" rules="required|custom_message" name="no_of_sibling">
                                                                        <el-input placeholder="Number of Siblings" class="w-100" v-model="no_of_sibling"></el-input>
                                                                        <div  :class="classes">{{ errors[0] }}</div>
                                                                    </ValidationProvider>
                                                                </div>
                                                            </div>
                                                            <div class="col-lg-4 col-md-6">
                                                                <div class="form-group">
                                                                    <ValidationProvider v-slot="{ classes, errors }" rules="required|custom_message" name="sibling_class">
                                                                        <el-input placeholder="If Studying, which grade are they studying in?" class="w-100" v-model="sibling_class"></el-input>
                                                                        <div  :class="classes">{{ errors[0] }}</div>
                                                                    </ValidationProvider>
                                                                </div>
                                                            </div>
                                                            <div class="col-lg-4 col-md-6">
                                                                <div class="form-group">
                                                                    <ValidationProvider v-slot="{ classes, errors }" rules="required|custom_message" name="sibling_school">
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
    </div>
</template>

<script>
import { API_ROUTES } from '~/helper/api_routes';



export default {
    name: "AdmissionPucPage",
    layout: "MainPageLayout",
    data() {
        return {
            centerOptions: [
                {
                    value: 'Hebbal (PU)',
                    label: 'Hebbal (PU)'
                },
                {
                    value: 'Vijaynagar (PU)',
                    label: 'Vijaynagar (PU)'
                },
                {
                    value: 'Kengeri (CBSE)',
                    label: 'Kengeri (CBSE)'
                },
                {
                    value: 'Uttarahalli Road (PU)',
                    label: 'Uttarahalli Road (PU)'
                },
                {
                    value: 'Kanakpura Road(Residential Campus)',
                    label: 'Kanakpura Road(Residential Campus)'
                },
            ],
            batchOptions: [
                {
                    value: '2-Years Full-Time Super 30 Classroom Program(Day Scholar)',
                    label: '2-Years Full-Time Super 30 Classroom Program(Day Scholar)'
                },
                {
                    value: '2-Year Full-Time Super 30 Classroom Program (Residential)',
                    label: '2-Year Full-Time Super 30 Classroom Program (Residential)'
                },
                {
                    value: 'JEE Evening Batch',
                    label: 'JEE Evening Batch'
                },
                {
                    value: 'NEET Evening Batch',
                    label: 'NEET Evening Batch'
                },
                {
                    value: 'KVPY Weekend Batch',
                    label: 'KVPY Weekend Batch'
                },
                {
                    value: 'JEE+NEET+KVPY (7 Days a week)',
                    label: 'JEE+NEET+KVPY (7 Days a week)'
                },
            ],
            name:'',
            school_name:'',
            aadhar:'',
            father_name:'',
            father_occupation:'',
            father_phone:'',
            mother_name:'',
            mother_occupation:'',
            mother_phone:'',
            center:'',
            batch:'',
            address:'',
            sibling:false,
            sibling_occupation:false,
            no_of_sibling:'',
            sibling_school:'',
            sibling_class:'',
            marks: [],
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
                formData.append('aadhar', this.aadhar);
                formData.append('father_name', this.father_name);
                formData.append('father_occupation', this.father_occupation);
                formData.append('father_phone', this.father_phone);
                formData.append('mother_name', this.mother_name);
                formData.append('mother_occupation', this.mother_occupation);
                formData.append('mother_phone', this.mother_phone);
                formData.append('center', this.center);
                formData.append('batch', this.batch);
                formData.append('address', this.address);
                formData.append('sibling', this.sibling ? 'Yes' : 'No');
                if(this.sibling){
                    formData.append('sibling_occupation', this.sibling_occupation ? 'studying' : 'working');
                    if(this.sibling_occupation){
                        formData.append('no_of_sibling', this.no_of_sibling);
                        formData.append('sibling_school', this.sibling_school);
                        formData.append('sibling_class', this.sibling_class);
                    }
                }
                formData.append('marks', this.marks);
                await this.$publicApi.post(API_ROUTES.admission_puc,formData);
                this.name=''
                this.school_name=''
                this.aadhar=''
                this.father_name=''
                this.father_occupation=''
                this.father_phone=''
                this.mother_name=''
                this.mother_occupation=''
                this.mother_phone=''
                this.center=''
                this.batch=''
                this.address=''
                this.no_of_sibling=''
                this.sibling_school=''
                this.sibling_class=''
                this.sibling=false
                this.sibling_occupation=false
                this.marks=[]
                this.$refs.form.reset()
                this.$toast.success('Admission Recieved Successfully.')
            } catch (err) {
                this.$refs.form.setErrors({
                    school_name: err?.response?.data?.errors?.school_name?.length>0 && err?.response?.data?.errors?.school_name[0],
                    name: err?.response?.data?.errors?.name?.length>0 && err?.response?.data?.errors?.name[0],
                    aadhar: err?.response?.data?.errors?.aadhar?.length>0 && err?.response?.data?.errors?.aadhar[0],
                    father_name: err?.response?.data?.errors?.father_name?.length>0 && err?.response?.data?.errors?.father_name[0],
                    father_phone: err?.response?.data?.errors?.father_phone?.length>0 && err?.response?.data?.errors?.father_name[0],
                    father_occupation: err?.response?.data?.errors?.father_occupation?.length>0 && err?.response?.data?.errors?.father_name[0],
                    mother_name: err?.response?.data?.errors?.mother_name?.length>0 && err?.response?.data?.errors?.mother_name[0],
                    mother_phone: err?.response?.data?.errors?.mother_phone?.length>0 && err?.response?.data?.errors?.mother_name[0],
                    mother_occupation: err?.response?.data?.errors?.mother_occupation?.length>0 && err?.response?.data?.errors?.mother_name[0],
                    center: err?.response?.data?.errors?.center?.length>0 && err?.response?.data?.errors?.center[0],
                    batch: err?.response?.data?.errors?.batch?.length>0 && err?.response?.data?.errors?.batch[0],
                    marks: err?.response?.data?.errors?.marks?.length>0 && err?.response?.data?.errors?.marks[0],
                    address: err?.response?.data?.errors?.address?.length>0 && err?.response?.data?.errors?.address[0],
                    sibling: err?.response?.data?.errors?.sibling?.length>0 && err?.response?.data?.errors?.sibling[0],
                    sibling_occupation: err?.response?.data?.errors?.sibling_occupation?.length>0 && err?.response?.data?.errors?.sibling_occupation[0],
                    sibling_school: err?.response?.data?.errors?.sibling_school?.length>0 && err?.response?.data?.errors?.sibling_school[0],
                    sibling_class: err?.response?.data?.errors?.sibling_class?.length>0 && err?.response?.data?.errors?.sibling_class[0],
                    no_of_sibling: err?.response?.data?.errors?.no_of_sibling?.length>0 && err?.response?.data?.errors?.no_of_sibling[0],
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
    components: { 
        Breadcrumb: () => import('~/components/Breadcrumb.vue')
    }
}
</script>