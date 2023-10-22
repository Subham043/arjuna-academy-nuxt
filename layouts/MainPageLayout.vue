<template>
  <div>
      <Preloader />
      <VerifyNotification />
      <Header />
      <Nuxt />
      <Newsletter />
      <Footer />
      <SocialMedia/>
  </div>
</template>

<script>


export default {
    name: "MainPageLayout",
    components: { 
      Header: () => import('~/components/Header.vue'), 
      Footer: () => import('~/components/Footer.vue'), 
      Newsletter: () => import('~/components/Newsletter.vue'), 
      VerifyNotification: () => import('~/components/VerifyNotification.vue'), 
      Preloader: () => import('~/components/Preloader.vue') ,
      SocialMedia: () => import('~/components/SocialMedia.vue') ,
    }
}

if(process.client){
  // window.addEventListener("load", (event) => {
  //   document.getElementById('preloader-main').classList.add('d-none');
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