<template>
    <div>
        <Header />
        <div class="error-area pt-70 pb-70">
            <div class="d-table">
                <div class="d-table-cell">
                    <div class="error-content">
                        <h1>{{ error.statusCode }}</h1>
                        <template v-if="error.statusCode === 404">
                            <h3>Oops! Page Not Found</h3>
                            <p>
                                The page you are looking for might have been removed had its name
                                changed or is temporarily unavailable.
                            </p>
                        </template>
                        <h3 v-else>Oops! An error occured</h3>
                        <NuxtLink to="/" class="default-btn"> Return To Home Page </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
        <Newsletter />
        <Footer />
    </div>
  </template>
  
  <script>
import Footer from '~/components/Footer.vue';
import Header from '~/components/Header.vue';
import Newsletter from '~/components/Newsletter.vue';

  export default {
    name: 'ErrorDefault',
    props: ['error'],// eslint-disable-line
    mounted() {
        // eslint-disable-next-line nuxt/no-env-in-hooks
        if (process.client) {
            this.$scrollTo("#__nuxt", 0, { force: true });
        }
    },
    methods: {
        goBack() {
            this.$router.push('/');
        }
    },
    components: { Header, Newsletter, Footer }
}
  </script>