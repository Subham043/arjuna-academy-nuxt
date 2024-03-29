<template>
    <div>
        <Breadcrumb 
            title="Forgot Password"
            :pages="[
                {
                    link:'',
                    name:'Forgot Password'
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
                                    <h3>Forgot Password</h3>
                                </div>
                                <div class="contact-form">
                                    <h3 class="user-title">Forgot Password</h3>
                                    <ValidationObserver ref="form" v-slot="{ handleSubmit }">
                                        <form id="contactForm" @submit.prevent="handleSubmit(formHandler)">
                                            <div class="row">
                                                <div class="col-lg-12">
                                                    <ValidationProvider v-slot="{ classes, errors }" rules="required|email" name="email">
                                                        <div class="form-group">
                                                            <input type="email" name="email" id="email" class="form-control" v-model="email"
                                                                data-error="Email Address*"
                                                                placeholder="Email Address*" />
                                                        </div>
                                                        <div :class="classes">{{ errors[0] }}</div>
                                                    </ValidationProvider>
                                                </div>
                                                <div class="col-lg-12 col-md-12 text-center">
                                                    <button type="submit" :disabled="loading" class="default-btn">
                                                        <template v-if="!loading">
                                                            Reset Password
                                                        </template>
                                                        <div v-else class="spinner-border" role="status"></div>
                                                    </button>
                                                </div>
                                                <div class="col-lg-12 mt-3 text-center">
                                                    <label for="chb1">
                                                        Remember your password?
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
import { API_ROUTES } from '~/helper/api_routes';

export default {
    name: "ForgotPasswordPage",
    layout: "MainPageLayout",
    middleware: ['Unauthenticated'],
    data() {
        return {
            email: '',
            loading: false,
        };
    },
    head() {
        return {
            title: 'Arjunaa Academy - Forgot Password',
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
                    content: 'Arjunaa Academy - Forgot Password'
                },
                {
                    hid: 'og:type',
                    name: 'og:type',
                    content: 'website'
                },
                {
                    hid: 'description',
                    name: 'description',
                    content: 'Arjunaa Academy - Forgot Password'
                },
                {
                    hid: 'keywords',
                    name: 'keywords',
                    content: 'Arjunaa Academy - Forgot Password'
                },
            ],
        }
    },
    methods: {
        async formHandler(){
            this.loading=true;
            try {
                const response = await this.$publicApi.post(API_ROUTES.forgot_password, {
                    email:this.email, 
                });
                this.email=''
                this.$refs.form.reset()
                this.$toast.success(response.data.message)
            } catch (err) {
                this.$refs.form.setErrors({
                    email: err?.response?.data?.errors?.email?.length>0 && err?.response?.data?.errors?.email[0],
                });
                if(err?.response?.data?.message) this.$toast.error(err?.response?.data?.message)
                if(err?.response?.data?.error) this.$toast.error(err?.response?.data?.error)
            } finally{
                this.loading=false;
            }
        }
    },
    components: { 
        Breadcrumb: () => import('~/components/Breadcrumb.vue') 
    }
}
</script>