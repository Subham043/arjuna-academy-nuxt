<template>
  <footer class="footer-area">
    <!-- <div class="container pt-70 pb-70"> -->
    <div class="container pt-3">
      <div class="row">
        <div class="col-lg-12 col-sm-12 mb-3">
          <div class="footer-widget text-center">
            <div class="footer-logo">
              <NuxtLink to="/">
                <img src="/images/logos/new-logo.png" alt="Images" />
              </NuxtLink>
            </div>
            <!-- <p>
              Lorem ipsum dolor sit amet, consec tetur adipiscing elit eiusmod
              tempor incididunt labore dolore magna aliqua consec tetur
              adipiscing elite sed do labor.
            </p> -->
            <ul class="social-link">
              <!-- <li class="social-title">Follow Us:</li> -->
              <li>
                <a href="https://www.facebook.com/www.aaaedu.in/" target="_blank">
                  <i class="ri-facebook-fill"></i>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/academy_arjunaa" target="_blank">
                  <i class="ri-twitter-fill"></i>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/arjunaa_academy_for_achievers/" target="_blank">
                  <i class="ri-instagram-line"></i>
                </a>
              </li>
              <li>
                <a href="https://in.linkedin.com/company/arjunaa-academy-for-achievers" target="_blank">
                  <i class="ri-linkedin-line"></i>
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/channel/UCcPOkcZ_YGpTMcVnLJQYLPA" target="_blank">
                  <i class="ri-youtube-line"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-3 col-sm-6">
          <div class="footer-widget ps-5">
            <h3>About us</h3>
            <ul class="footer-list">
              <li>
                <NuxtLink to="/about-us"> About Us </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/mission-vision"> Mission & Vision </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/leadership-team"> Leadership Team & Faculty </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/testimonial"> Testimonial </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/contact-us"> Contact Us </NuxtLink>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-3 col-sm-6">
          <div class="footer-widget ps-5">
            <h3>Resources</h3>
            <ul class="footer-list">
              <li>
                <NuxtLink to="/knowledge-desk"> Knowledge Desk </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/expert-tips"> Expert Tips </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/faq"> FAQ </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/gallery"> Gallery </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/events"> Events </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/2-year-integrated-day-scholar-and-residential-program"> Day Scholar / Residential </NuxtLink>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-3 col-sm-6">
          <div class="footer-widget ps-5">
            <h3>Legal</h3>
            <ul v-if="legalLoading" class="footer-list">
                <el-skeleton style="width: 100%" animated>
                    <template slot="template">
                        <li v-for="i in 4" :key="i">
                            <el-skeleton-item variant="p" style="width: 100%" />
                            <br />
                        </li>
                    </template>
                </el-skeleton>
            </ul>
            <ul v-if="!legalLoading && legal.length > 0" class="footer-list">
              <li v-for="(item, i) in legal" :key="i">
                <NuxtLink :to="`/legal/${item.slug}`"> {{ item.page_name }} </NuxtLink>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-3 col-sm-6">
          <div class="footer-widget ps-5">
            <h3>Official Info</h3>
            <ul class="footer-contact">
              <li>
                <i class="ri-map-pin-2-fill"></i>
                <div class="content">
                  <h4>Location:</h4>
                  <span><a href="https://goo.gl/maps/pDUVxh6ZVWEanYsi6" target="_blank" rel="noopener noreferrer">3rd Floor, No.02, CHBCS 1st Layout, 1st Floor, 5th Main, Vijaya Nagar</a></span>
                </div>
              </li>
              <li>
                <i class="ri-mail-fill"></i>
                <div class="content">
                  <h4>Email:</h4>
                  <span><a
                      href="mailto:info@aaaedu.in">info@aaaedu.in</a></span>
                </div>
              </li>
              <li>
                <i class="ri-phone-fill"></i>
                <div class="content">
                  <h4>Phone:</h4>
                  <span><a href="tel:7676642258">76766 42258</a></span><br/>
                  <span><a href="tel:8197554516">81975 54516</a></span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="copyright-area">
      <div class="container">
        <div class="copy-right-text text-center">
          <p>
            Copyright © {{ new Date().getFullYear() }} <NuxtLink to="/">Arjunaa Academy for Achievers</NuxtLink>. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { API_ROUTES } from '~/helper/api_routes';

export default {
  name: 'FooterComponent',
  data(){
    return {
      legal: [],
      legalLoading: false,
    }
  },
  mounted() {
    this.getLegal();
  },
  methods: {
    async getLegal() {
        this.legalLoading = true;
        try {
            const response = await this.$publicApi.get(API_ROUTES.legal); // eslint-disable-line
            this.legal = response.data.legal
        } catch (err) {
            // console.log(err.response);// eslint-disable-line
            if (err?.response?.data?.message) this.$toast.error(err?.response?.data?.message)
            if (err?.response?.data?.error) this.$toast.error(err?.response?.data?.error)
        } finally {
            this.legalLoading = false;
        }
    },
  },
}
</script>