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
                    <form class="newsletter-form" data-toggle="validator" method="POST">
                        <input type="email" class="form-control" placeholder="Enter Your Email Address" name="EMAIL"
                            required autocomplete="off" />
                        <button class="subscribe-btn" type="submit">
                            Subscribe Now <i class="flaticon-paper-plane"></i>
                        </button>
                        <div id="validator-newsletter" class="form-result"></div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NewsletterComponent',
}
</script>