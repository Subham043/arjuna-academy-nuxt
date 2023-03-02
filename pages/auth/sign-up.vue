<template>
    <div>
        <Breadcrumb title="Sign Up" />

        <div class="user-area pt-100 pb-70">
            <div class="container">
                <div class="row align-items-center justify-content-center">
                    <div class="col-lg-6">
                        <div class="user-all-form">
                            <div class="contact-form">
                                <h3 class="user-title">Sign up</h3>
                                <form id="contactForm">
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div class="form-group">
                                                <input type="text" class="form-control" required data-error="Username"
                                                    placeholder="Username" />
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="form-group">
                                                <input type="email" class="form-control" required
                                                    data-error="Please enter Email" placeholder="Please Enter Email" />
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="form-group">
                                                <input class="form-control" type="password" name="password"
                                                    placeholder="Password" />
                                            </div>
                                        </div>
                                        <div class="col-lg-12 col-md-12">
                                            <button type="submit" class="default-btn">
                                                Register Now
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="user-img">
                            <img src="/images/faq-img.jpg" alt="faq" />
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
    name: "SignupPage",
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