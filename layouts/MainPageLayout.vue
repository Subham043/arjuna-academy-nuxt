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
      !function(t,e){t.artibotApi={l:[],t:[],on:function(){this.l.push(arguments)},trigger:function(){this.t.push(arguments)}};var a=!1,i=e.createElement("script");i.async=!0,i.type="text/javascript",i.src="https://app.artibot.ai/loader.js",e.getElementsByTagName("head").item(0).appendChild(i),i.onreadystatechange=i.onload=function(){if(!(a||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState)){new window.ArtiBot({i:"2c848ffb-661a-45fc-ab7b-b7705235191f"});a=!0}}}(window,document);
  });
}
</script>