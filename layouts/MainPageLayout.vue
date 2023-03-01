<template>
  <div>
      <Header />
      <Nuxt />
      <Footer />
  </div>
</template>

<script>
import Footer from '~/components/Footer.vue';
import Header from '~/components/Header.vue';


export default {
    name: "MainPageLayout",
    head() {
        return {
            link: [
                { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/remixicon@2.2.0/fonts/remixicon.css" },
            ],
        };
    },
    components: { Header, Footer }
}
</script>