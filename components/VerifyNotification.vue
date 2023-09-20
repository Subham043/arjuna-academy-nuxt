<template>
    <div v-if="$auth.loggedIn && $auth.user.verified==='VERIFICATION PENDING' && display" class="alert alert-warning mb-0" role="alert">
        <div class="row justify-content-between">
          <h4 class="alert-heading col-auto">Verification Pending!</h4>
          <button type="button" class="btn-close col-auto" data-bs-dismiss="alert" aria-label="Close" @click="display=false"></button>
        </div>
        <p>Your email verification is still pending. Kindly verify your email by clicking on the link we had emailed to you? If you didn't receive the email, we will gladly send you another</p>
        <hr>
        <button class="btn btn-sm btn-dark" :disabled="loading" @click="resend_verification_mail">
            <template v-if="!loading">
                Resend Verification Email
            </template>
            <div v-else class="spinner-border" role="status"></div>
        </button>
    </div>
</template>

<script>
export default {
    name: 'VerifyNotification',
    data() {
        return {
            display: true,
            loading: false,
        }
    },
    methods: {
        async resend_verification_mail(){
            this.loading = true;
            try {
                const response = await this.$privateApi.post('/api/v1/email/verify/resend-notification', {});
                this.$toast.success(response.data.message)
            } catch (err) {
                if(err?.response?.data?.message) this.$toast.error(err?.response?.data?.message)
                if(err?.response?.data?.error) this.$toast.error(err?.response?.data?.error)
            } finally {
                this.loading = false;
            }
        }
    }
}
</script>