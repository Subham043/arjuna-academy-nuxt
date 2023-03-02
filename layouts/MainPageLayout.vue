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
</script>