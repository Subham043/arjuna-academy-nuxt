<template>
    <div>
        <Breadcrumb 
            title="Sign Up"
            :pages="[
                {
                    link:'',
                    name:'Sign Up'
                }
            ]"
        />

        <div class="user-area pt-70 pb-70">
            <div class="container">
                <div class="row align-items-center justify-content-center">
                    <div class="col-lg-5">
                        <div class="user-all-form">
                            <div class="register-form">
                                <div class="top-header">
                                    <h3>Sign up</h3>
                                </div>
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
                                                <div class="col-12">
                                                    <ValidationProvider v-slot="{ classes, errors }" rules="required" vid="password" name="password">
                                                        <div class="form-group">
                                                            <input class="form-control" type="password" v-model="password" name="password"
                                                                placeholder="Password*" />
                                                        </div>
                                                        <div :class="classes">{{ errors[0] }}</div>
                                                    </ValidationProvider>
                                                </div>
                                                <div class="col-12">
                                                    <ValidationProvider v-slot="{ classes, errors }" rules="required|confirmed:password" name="confirm_password">
                                                        <div class="form-group">
                                                            <input class="form-control" type="password" v-model="confirm_password" name="password"
                                                                placeholder="Confirm Password*" />
                                                        </div>
                                                        <div :class="classes">{{ errors[0] }}</div>
                                                    </ValidationProvider>
                                                </div>
                                                <div class="col-lg-12 col-md-12 text-center">
                                                    <button type="submit" :disabled="loading" class="default-btn">
                                                        <template v-if="!loading">
                                                            Register Now
                                                        </template>
                                                        <div v-else class="spinner-border" role="status"></div>
                                                    </button>
                                                </div>
                                                <div class="col-lg-12 mt-3 text-center">
                                                    <label for="chb1">
                                                        Already have an account?
                                                        <NuxtLink class="forget" to="/auth/sign-in">Login</NuxtLink>
                                                    </label>
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
    name: "SignupPage",
    layout: "MainPageLayout",
    middleware: ['Unauthenticated'],
    data() {
        return {
            email: '',
            name: '',
            phone: '',
            password: '',
            confirm_password: '',
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
            this.loading=true;
            try {
                const response = await this.$publicApi.post(API_ROUTES.register, {
                    name:this.name, 
                    email:this.email, 
                    phone:this.phone, 
                    password:this.password,
                    confirm_password:this.confirm_password, 
                });
                this.name=''
                this.email=''
                this.phone=''
                this.password=''
                this.confirm_password=''
                this.$refs.form.reset()
                this.$toast.success(response.data.message)
            } catch (err) {
                this.$refs.form.setErrors({
                    email: err?.response?.data?.errors?.email?.length>0 && err?.response?.data?.errors?.email[0],
                    name: err?.response?.data?.errors?.name?.length>0 && err?.response?.data?.errors?.name[0],
                    phone: err?.response?.data?.errors?.phone?.length>0 && err?.response?.data?.errors?.phone[0],
                    password: err?.response?.data?.errors?.password?.length>0 && err?.response?.data?.errors?.password[0],
                    confirm_password: err?.response?.data?.errors?.confirm_password?.length>0 && err?.response?.data?.errors?.confirm_password[0],
                });
                if(err?.response?.data?.message) this.$toast.error(err?.response?.data?.message)
                if(err?.response?.data?.error) this.$toast.error(err?.response?.data?.error)
            } finally{
                this.loading=false;
            }
        }
    },
    components: { Breadcrumb }
}
</script>