<template>
    <div>
        <Preloader />
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
        <SocialMedia/>
    </div>
  </template>
  
  <script>

  export default {
    name: 'ErrorDefault',
    props: ['error'],// eslint-disable-line
    methods: {
        goBack() {
            this.$router.push('/');
        }
    },
    components: { 
        Header: () => import('~/components/Header.vue'), 
        Newsletter: () => import('~/components/Newsletter.vue'), 
        Footer: () => import('~/components/Footer.vue'), 
        Preloader: () => import('~/components/Preloader.vue'),
        SocialMedia: () => import('~/components/SocialMedia.vue'),
    }
}

if(process.client){
    // window.addEventListener("load", (event) => {
    //     document.getElementById('preloader-main').classList.add('d-none');
    // });
    document.addEventListener("DOMContentLoaded", function() {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 150) {
                document.getElementById('navbar').classList.add('is-sticky');
                } else {
                document.getElementById('navbar').classList.remove('is-sticky');
            }
        });
    });
}

  </script>