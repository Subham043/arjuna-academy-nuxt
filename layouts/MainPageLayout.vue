<template>
  <div>
      <Header />
      <Nuxt />
      <Newsletter />
      <Footer />
  </div>
</template>

<script>
import Footer from '~/components/Footer.vue';
import Header from '~/components/Header.vue';
import Newsletter from '~/components/Newsletter.vue';


export default {
    name: "MainPageLayout",
    components: { Header, Footer, Newsletter }
}

if(process.client){
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