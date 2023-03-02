<template>
    <div>
        <Breadcrumb title="About us" />

        <WhoWeAreCard 
            :first="true"
            image="/images/enrolled/enrolled-img3.jpg"
            heading="We have the most qualified instructors in your hometown."
            :detail="[
                'Arjunaa Academy for Achivers(AAA) is a premier and a leading coaching institute for the preparation of JEE (Main+Advanced), JEE (Main), Pre-Medical (NEET-UG), KVPY, Pre-Nurture & Career Foundation (Class VIII to X, NTSE & Olympiads) & Boards(CBSE,ICSE & State) in Bangalore, India. The Institute is well regarded for the high-quality entrance exams & Board exams preparation and produces best results year after year. Ever since the inception in 2012, Arjunaa Academy for Achievers (AAA) focusses on building a strong foundation of knowledge and concepts, instilling a vigour for research in the students.',
                'The best personalized training is provided is given at AAA to each & every student in the form of 24/7 online & offline support. We treat Students like Professionals and care for them like Parents. To our Students, we making education exciting, relevant & stress free.',
                'We provide value-based education, stressing the importance of character, values along with core competency in order to churn out high character driven responsible future citizens of our Nation.'
            ]"
        />

        <div class="play-area ptb-100">
            <div class="container">
                <div class="title text-center mb-45">
                    <h2>
                        We worked with <span>250+ </span> leading universities and companies
                    </h2>
                </div>
                <div class="play-btn-area">
                    <a href="https://www.youtube.com/watch?v=Zd00oIDAt60" class="play-btn">
                        <i class="flaticon-play-button-arrowhead"></i>
                    </a>
                </div>
            </div>
        </div>

        <div class="counter-area-three pb-70">
            <div class="container">
                <div class="row">
                    <div class="col-lg-3 col-6">
                        <div class="counter-card box-shadow">
                            <i class="flaticon-online-course"></i>
                            <h3><span class="odometer" data-count="15000">00000</span>+</h3>
                            <p>Courses & videos</p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-6">
                        <div class="counter-card box-shadow">
                            <i class="flaticon-student"></i>
                            <h3><span class="odometer" data-count="145000">000000</span>+</h3>
                            <p>Students enrolled</p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-6">
                        <div class="counter-card box-shadow">
                            <i class="flaticon-online-course-1"></i>
                            <h3><span class="odometer" data-count="10000">00000</span>+</h3>
                            <p>Courses instructors</p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-6">
                        <div class="counter-card box-shadow">
                            <i class="flaticon-customer-satisfaction"></i>
                            <h3><span class="odometer" data-count="100">000</span>%</h3>
                            <p>Satisfaction rate</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <WhatWeDoCard />


    </div>
</template>

<script>
import Breadcrumb from '~/components/Breadcrumb.vue';
import WhatWeDoCard from '~/components/WhatWeDoCard.vue';
import WhoWeAreCard from '~/components/WhoWeAreCard.vue';



export default {
    name: "AboutPage",
    layout: "MainPageLayout",
    data() {
        return {};
    },
    mounted() {
        // eslint-disable-next-line nuxt/no-env-in-hooks
        if (process.client) {
            this.$scrollTo("#__nuxt", 0, { force: true });
        }
    },
    components: { Breadcrumb, WhoWeAreCard, WhatWeDoCard }
}
</script>