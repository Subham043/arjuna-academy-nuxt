<template>
    <div>
        <Breadcrumb title="Forgot Password" />

        <div class="user-area pt-100 pb-70">
            <div class="container">
                <div class="row align-items-center justify-content-center">
                    <div class="col-lg-6">
                        <div class="user-all-form">
                            <div class="contact-form">
                                <h3 class="user-title">Forget Password</h3>
                                <form id="contactForm">
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div class="form-group">
                                                <input type="text" name="name" id="name" class="form-control" required
                                                    data-error="Username Or Email Address*"
                                                    placeholder="Username Or Email Address*" />
                                            </div>
                                        </div>
                                        <div class="col-lg-12 col-md-12">
                                            <button type="submit" class="default-btn">
                                                Reset Now
                                            </button>
                                        </div>
                                    </div>
                                </form>
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
    name: "ForgotPasswordPage",
    layout: "MainPageLayout",
    data() {
        return {};
    },
    mounted() {
        // eslint-disable-next-line nuxt/no-env-in-hooks
        if (process.client) {
            this.$scrollTo("#__nuxt", 0, { force: true });
        }
    },
    components: { Breadcrumb }
}
</script>