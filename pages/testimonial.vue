<template>
    <div>
        <Breadcrumb title="Testimonial" />

        <div v-if="testimonial_data.length > 0" class="testimonials-area pt-100 pb-100">
            <div class="container">
                <div class="section-title text-center">
                    <span>TESTIMONIAL</span>
                    <h2>What our learers have to say</h2>
                </div>
                <div class="testimonials-slider-two owl-carousel owl-theme">
                    <VueSlickCarousel v-bind="slickTestimonialOptions" ref="slickTestimonial">
                        <TestimonialCard 
                            v-for="(item, i) in testimonial_data" 
                            :key="i" 
                            :image="item.image" 
                            :name="item.name" 
                            :designation="item.designation" />
                    </VueSlickCarousel>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import Breadcrumb from '~/components/Breadcrumb.vue';
import TestimonialCard from '~/components/TestimonialCard.vue';



export default {
    name: "TestimonialPage",
    layout: "MainPageLayout",
    data() {
        return {
            slickTestimonialOptions: {
                arrows: false,
                dots: false,
                infinite: true,
                autoplay: true,
                autoplaySpeed: 3000,
                draggable: true,
                pauseOnHover: true,
                swipe: true,
                slidesToShow: 3,
                slidesToScroll: 1,
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                            infinite: true,
                            dots: false,
                        },
                    },
                    {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            dots: false,
                        },
                    },
                ],
            },
            testimonial_data: [
                {
                    name: "Nikolas brooten",
                    designation: "Student",
                    image: "/images/testimonials/testimonials-img1.jpg"
                },
                {
                    name: "Terry ambady",
                    designation: "Content strategist",
                    image: "/images/testimonials/testimonials-img2.jpg"
                },
                {
                    name: "Cory zamora",
                    designation: "Photographer",
                    image: "/images/testimonials/testimonials-img3.jpg"
                },
                {
                    name: "Jonquil von",
                    designation: "Photographer",
                    image: "/images/testimonials/testimonials-img3.jpg"
                },
            ],
        };
    },
    mounted() {
        // eslint-disable-next-line nuxt/no-env-in-hooks
        if (process.client) {
            this.$scrollTo("#__nuxt", 0, { force: true });
        }
    },
    components: { TestimonialCard, Breadcrumb }
}
</script>