<template>
    <div>
        <Breadcrumb 
            title="Sign In"
            :pages="[
                {
                    link:'',
                    name:'Sign In'
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
                                    <h3>Sign in</h3>
                                </div>
                                <div class="contact-form">
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
                                                <div class="col-12">
                                                    <ValidationProvider v-slot="{ classes, errors }" rules="required" name="password">
                                                        <div class="form-group">
                                                            <input class="form-control" type="password" v-model="password" name="Password"
                                                                placeholder="Password*" />
                                                        </div>
                                                        <div :class="classes">{{ errors[0] }}</div>
                                                    </ValidationProvider>
                                                </div>
                                                <div class="col-lg-12 form-condition">
                                                    <div class="agree-label">
                                                        <input type="checkbox" id="chb1" />
                                                        <label for="chb1">
                                                            Remember Me
                                                            <NuxtLink class="forget" to="/auth/forgot-password">Forgot Password?</NuxtLink>
                                                        </label>
                                                    </div>
                                                </div>
                                                <div class="col-lg-12 col-md-12 text-center">
                                                    <button type="submit" :disabled="loading" class="default-btn">
                                                        <template v-if="!loading">
                                                            Login Now
                                                        </template>
                                                        <div v-else class="spinner-border" role="status"></div>
                                                    </button>
                                                </div>
                                                <div class="col-lg-12 mt-3 text-center">
                                                    <label for="chb1">
                                                        Don't have an account?
                                                        <NuxtLink class="forget" to="/auth/sign-up">Register</NuxtLink>
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



export default {
    name: "SigninPage",
    layout: "MainPageLayout",
    middleware: ['Unauthenticated'],
    data() {
        return {
            email: '',
            password: '',
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
                await this.$auth.loginWith('local', { data: {email:this.email, password:this.password} }); // eslint-disable-line
                this.email=''
                this.password=''
                this.$refs.form.reset()
                this.$toast.success('Logged in successfully')
                // console.log(this.$store.state.auth);// eslint-disable-line
            } catch (err) {
                console.log(err.response);// eslint-disable-line
                this.$refs.form.setErrors({
                    email: err?.response?.data?.errors?.email?.length>0 && err?.response?.data?.errors?.email[0],
                    password: err?.response?.data?.errors?.password?.length>0 && err?.response?.data?.errors?.password[0],
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