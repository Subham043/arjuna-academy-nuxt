<template>
    <div class="newsletter-area section-bg ptb-100">
        <div class="container">
            <div class="row">
                <div class="col-lg-5">
                    <div class="section-title mt-rs-20">
                        <span>ARE YOU IMPRESSED FOR AMAZING SERVICES?</span>
                        <h2>Subscribe our newsletter</h2>
                    </div>
                </div>
                <div class="col-lg-7">
                    <ValidationObserver ref="form" v-slot="{ handleSubmit }">
                        <form class="newsletter-form" data-toggle="validator" method="POST" @submit.prevent="handleSubmit(formHandler)">
                            <ValidationProvider v-slot="{ classes, errors }" rules="required|email" name="email">
                                <input type="email" class="form-control" placeholder="Enter Your Email Address" name="EMAIL" v-model="email"
                                    autocomplete="off" />
                                <div  :class="classes">{{ errors[0] }}</div>
                            </ValidationProvider>
                            <button class="subscribe-btn" type="submit" :disabled="loading">
                                <template v-if="!loading">
                                    Subscribe Now <i class="flaticon-paper-plane"></i>
                                </template>
                                <div v-else class="spinner-border" role="status"></div>
                            </button>
                            <div id="validator-newsletter" class="form-result"></div>
                        </form>
                    </ValidationObserver>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { API_ROUTES } from '~/helper/api_routes';

export default {
    name: 'NewsletterComponent',
    data(){
        return {
            email:'',
            loading: false,
        }
    },
    methods: {
        async formHandler(){
            this.loading = true;
            try {
                await this.$publicApi.post(API_ROUTES.subscription, {
                    email:this.email, 
                    page_url:window.location.href,
                });
                this.email=''
                this.$refs.form.reset()
                this.$toast.success('Subscribed Successfully.')
            } catch (err) {
                this.$refs.form.setErrors({
                    email: err?.response?.data?.errors?.email?.length>0 && err?.response?.data?.errors?.email[0],
                });
                if(err?.response?.data?.message) this.$toast.error(err?.response?.data?.message)
                if(err?.response?.data?.error) this.$toast.error(err?.response?.data?.error)
                
            } finally{
                this.loading = false;
            }
        }
    },
}
</script>