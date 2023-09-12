<template>
    <div>
        <div class="hero-slider-area">
            <div v-if="bannerLoading" class="row justify-content-center hero-slider">
                <div v-for="i in 1" :key="i" class="col-lg-12 col-md-12 col-sm-12">
                    <el-skeleton style="width: 100%" animated>
                        <template slot="template">
                            <div class="container-fluid">
                                <div class="row align-items-center">
                                    <div class="col-lg-6">
                                        <div class="hero-content">
                                            <el-skeleton-item variant="p" style="width: 30%;" />
                                            <br/>
                                            <el-skeleton-item variant="h1" style="width: 50%;" />
                                            <br/>
                                            <el-skeleton-item variant="text" style="width: 100%;" />
                                            <br/>
                                            <el-skeleton-item variant="text" style="width: 100%;" />
                                            <br/>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="hero-img">
                                            <el-skeleton-item variant="image" style="width: 100%; height: 400px;" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </template>
                    </el-skeleton>
                </div>
            </div>
            <div v-if="!bannerLoading && banner.length>0" class="hero-slider owl-carousel owl-theme">
                <VueSlickCarousel v-bind="slickBannerOptions" ref="slickBanner">
                    <div v-for="(item, i) in banner" :key="i" class="hero-item">
                        <div class="container-fluid">
                            <div class="row align-items-center">
                                <div class="col-lg-6">
                                    <div class="hero-content">
                                        <span class="top-title">{{ item.title }}</span>
                                        <h1>{{ item.heading }}</h1>
                                        <p>{{ item.description }}</p>
                                        <div class="banner-btn">
                                            <a :href="item.button_link" target="_blank" class="default-btn border-radius-50">{{ item.button_text }}</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="hero-img">
                                        <img :src="item.banner_image" class="hero" :alt="item.banner_image_alt" :title="item.banner_image_title" />
                                        <div class="hero-bg-shape">
                                            <img src="/images/home-three/bg-shape1.png" class="bg-img-shape1" alt="Hero" />
                                            <img src="/images/home-three/bg-shape2.png" class="bg-img-shape2" alt="Hero" />
                                        </div>
                                        <div class="top-content">
                                            <div class="hero-img-content">
                                                <img :src="item.counter_image_1" />
                                                <div class="content">
                                                    <h3>{{ item.counter_title_1 }}</h3>
                                                    <p>{{ item.counter_description_1 }}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="right-content">
                                            <div class="hero-img-content">
                                                <img :src="item.counter_image_2" />
                                                <div class="content">
                                                    <h3>{{ item.counter_title_2 }}</h3>
                                                    <p>{{ item.counter_description_2 }}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </VueSlickCarousel>
            </div>
            <div class="hero-shape">
                <div class="shape1">
                    <img src="/images/home-three/shape.png" alt="Shape" />
                </div>
                <div class="shape2">
                    <img src="/images/home-three/shape2.png" alt="Shape" />
                </div>
            </div>
        </div>

        <div class="featured-area featured-area-mt pb-70">
          <div class="container">
            <div class="row justify-content-center">
                <div v-if="commonFeatureLoading" v-for="i in 3" :key="i" class="col-lg-4 col-md-6 col-sm-12">
                    <el-skeleton style="width: 100%" animated>
                        <template slot="template">
                            <div class="counter-card box-shadow px-1">
                                <el-skeleton-item variant="circle" style="width: 50px; height: 50px;" />
                                <el-skeleton-item variant="p" style="width: 50%" />
                                <br/>
                                <el-skeleton-item variant="p" style="width: 100%" />
                                <br/>
                            </div>
                        </template>
                    </el-skeleton>
                </div>
                <div v-if="!commonFeatureLoading && commonFeature.length>0" v-for="(item, i) in feature" :key="i" class="col-lg-4 col-6">
                    <div class="featured-item">
                    <img :src="item.image" class="featured-img">
                    <h3>{{ item.title }}</h3>
                    <p>
                        {{ item.description }}
                    </p>
                    </div>
                </div>
            </div>
          </div>
        </div>

        <WhoWeAreCard 
            :loading="aboutLoading"
            :image_alt="about?.image_alt"
            :image="about?.image"
            :image_title="about?.image_title"
            :heading="about?.heading"
            :detail="about?.description"
            :counter_description="about?.counter_description"
            :counter_image="about?.counter_image"
            :counter_title="about?.counter_title"
            :title="about?.title"
        />
        
        <WhatWeDoCard :loading="featureLoading" :feature="feature" />

        <div v-if="course_data.length>0" class="courses-area-two section-bg pt-100 pb-70">
            <div class="container">
                <div class="row align-items-end mb-45">
                    <div class="col-lg-8">
                        <div class="section-title mt-rs-20">
                            <span>COURSES</span>
                            <h2>Find popular courses</h2>
                        </div>
                    </div>
                    <div class="col-lg-4 text-end">
                        <a href="blog.html" class="default-btn border-radius-50">View all courses</a>
                    </div>
                </div>
                <div class="course-slider-two owl-carousel owl-theme">
                    <VueSlickCarousel v-bind="slickCourseOptions" ref="slickCourse">
                        <CourseCard 
                            v-for="(item, i) in course_data" 
                            :key="i" 
                            :course_image="item.course_image"
                            :instructor_image="item.instructor_image"
                            :category="item.category"
                            :title="item.title"
                            :duration="item.duration"
                            :lectures="item.lectures"
                            :price="item.price" />
                    </VueSlickCarousel>
                </div>
            </div>
        </div>

        <div class="testimonials-area pt-100 pb-100">
            <div class="container">
                <div class="section-title text-center">
                    <span>TESTIMONIAL</span>
                    <h2>What people say about us</h2>
                </div>
                <div v-if="testimonialLoading" class="row justify-content-center testimonials-slider-two">
                    <div v-for="i in 3" :key="i" class="col-lg-4 col-md-6 col-sm-12">
                        <el-skeleton style="width: 100%" animated>
                            <template slot="template">
                                <div class="testimonials-card-two">
                                    <div class="rating">
                                        <i v-for="i in 5" :key="i" class="ri-star-fill"></i>
                                    </div>
                                    <el-skeleton-item variant="text" style="width: 100%;" />
                                    <br/>
                                    <el-skeleton-item variant="text" style="width: 100%;" />
                                    <br/>
                                    <div class="content px-0">
                                        <el-skeleton-item variant="circle" style="width: 100px; height: 100px;" />
                                        <el-skeleton-item variant="p" style="width: 50%" />
                                        <br/>
                                    </div>
                                    <div class="quote"><i class="flaticon-quote"></i></div>
                                </div>
                            </template>
                        </el-skeleton>
                    </div>
                </div>
                <div v-if="!testimonialLoading && testimonial.length>0" class="testimonials-slider-two owl-carousel owl-theme">
                    <VueSlickCarousel v-bind="slickTestimonialOptions" ref="slickTestimonial">
                        <TestimonialCard 
                            v-for="(item, i) in testimonial" 
                            :key="i" 
                            :image="item.image" 
                            :name="item.name" 
                            :star="item.star" 
                            :message="item.message" 
                            :designation="item.designation" />
                    </VueSlickCarousel>
                </div>
            </div>
        </div>

        <div class="register-area pb-70">
            <div class="container">
                <div class="row">
                    <div class="col-lg-7">
                        <div class="play-btn-area-two">
                            <a href="https://www.youtube.com/watch?v=Zd00oIDAt60" class="play-btn">
                                <i class="flaticon-play-button-arrowhead"></i>
                            </a>
                        </div>
                    </div>
                    <div class="col-lg-5">
                        <div class="register-form">
                            <div class="top-header">
                                <h3>Register now</h3>
                                <span>More than 150 courses are free for this month</span>
                            </div>
                            <form class="register-form-max">
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="form-group">
                                            <input type="text" class="form-control" required
                                                data-error="Please Enter Your Name" placeholder="Your name" />
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="form-group">
                                            <input type="email" class="form-control" required
                                                data-error="Please Enter Email" placeholder="Email" />
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="form-group">
                                            <input type="text" class="form-control" required
                                                data-error="Please Enter Subject" placeholder="Subject" />
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="form-group">
                                            <input type="text" class="form-control" required data-error="Please Enter Phone"
                                                placeholder="Phone" />
                                        </div>
                                    </div>
                                    <div class="col-lg-12 col-md-12 text-center">
                                        <button type="submit" class="default-btn border-radius-50">
                                            Get it now
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="event-area section-bg pb-100">
            <div class="container">
                <div class="row align-items-end mb-45">
                    <div class="col-lg-8">
                        <div class="section-title mt-rs-20">
                            <span>EVENTS</span>
                            <h2>Upcoming events schedule</h2>
                        </div>
                    </div>
                    <div class="col-lg-4 text-end">
                        <NuxtLink to="/events" class="default-btn border-radius-50">View all events</NuxtLink>
                    </div>
                </div>
                <div v-if="eventLoading" class="row justify-content-center">
                    <div v-for="i in 2" :key="i" class="col-lg-6 col-md-6">
                        <el-skeleton style="width: 100%" animated>
                            <template slot="template">
                                <div class="event-item">
                                    <div class="event-img" style="width: 40%;">
                                        <el-skeleton-item variant="image" style="width: 100%; height: 140px;" />
                                    </div>
                                    <div class="event-content" style="width: 60%;">
                                        <el-skeleton-item variant="p" style="width: 100%" />
                                        <br/>
                                        <el-skeleton-item variant="text" style="width: 100%;" />
                                        <br/>
                                        <el-skeleton-item variant="text" style="width: 100%;" />
                                        <br/>
                                        <el-skeleton-item variant="text" style="width: 100%;" />
                                        <br/>
                                    </div>
                                </div>
                            </template>
                        </el-skeleton>
                    </div>
                </div>
                <div v-if="!eventLoading && event.length>0" class="event-slider owl-carousel owl-theme">
                    <VueSlickCarousel v-bind="slickEventOptions" ref="slickEvent">
                        <EventCard v-for="(item, i) in event" :key="i" :image="item.image" :title="item.name" :description="item.short_description" :date="item.event_date_on" :slug="item.slug" />
                    </VueSlickCarousel>
                </div>
            </div>
        </div>

        <div class="blog-area pt-100 pb-70">
            <div class="container">
                <div class="row align-items-end mb-45">
                    <div class="col-lg-8">
                        <div class="section-title mt-rs-20">
                            <span>LATEST BLOG</span>
                            <h2>Latest from our blogs</h2>
                        </div>
                    </div>
                    <div class="col-lg-4 text-end">
                        <NuxtLink to="/knowledge-desk" class="default-btn border-radius-50">View all blogs</NuxtLink>
                    </div>
                </div>
                <div v-if="blogLoading" class="row justify-content-center">
                    <div  v-for="i in 3" :key="i" class="col-lg-4 col-md-6">
                        <el-skeleton style="width: 100%" animated>
                            <template slot="template">
                                <el-skeleton-item variant="image" style="width: 100%; height: 240px;" />
                                <div style="padding: 14px;">
                                    <el-skeleton-item variant="p" style="width: 50%" />
                                    <br/>
                                    <el-skeleton-item variant="text" style="width: 100%;" />
                                    <br/>
                                    <el-skeleton-item variant="text" style="width: 50%;" />
                                </div>
                            </template>
                        </el-skeleton>
                    </div>
                </div>
                <div v-if="!blogLoading && blog.length>0" class="row justify-content-center">
                    <VueSlickCarousel v-bind="slickCourseOptions" ref="slickBlog">
                        <div v-for="(item, i) in blog" :key="i" class="col-lg-12 col-md-12">
                            <BlogCard :image="item.image" :title="item.name" :description="item.short_description" :date="item.published" :slug="item.slug" :author="item.author_name" />
                        </div>
                    </VueSlickCarousel>
                </div>
            </div>
        </div>


    </div>
</template>

<script>
import BlogCard from '~/components/BlogCard.vue';
import CourseCard from '~/components/CourseCard.vue';
import EventCard from '~/components/EventCard.vue';
import TestimonialCard from '~/components/TestimonialCard.vue';
import WhatWeDoCard from '~/components/WhatWeDoCard.vue';
import WhoWeAreCard from '~/components/WhoWeAreCard.vue';
import { API_ROUTES } from '~/helper/api_routes';

export default {
    name: "IndexPage",
    layout: "MainPageLayout",
    mounted() {
        // eslint-disable-next-line nuxt/no-env-in-hooks
        if (process.client) {
            this.$scrollTo("#__nuxt", 0, { force: true });
        }
        this.getTestimonial();
        this.getEvent();
        this.getBlog();
    },
    async fetch() {
      await this.getBannerSection();
      await this.getAboutSection();
      await this.getFeature();
      await this.getCommonFeature();
    },
    data() {
        return {
            aboutLoading: false,
            about: null,
            bannerLoading: false,
            banner: [],
            featureLoading: false,
            feature: [],
            commonFeatureLoading: false,
            commonFeature: [],
            testimonialLoading: false,
            testimonial: [],
            blogLoading: false,
            blog: [],
            eventLoading: false,
            event: [],
            slickBannerOptions: {
                arrows: false,
                dots: false,
                infinite: true,
                autoplay: true,
                autoplaySpeed: 3000,
                draggable: true,
                pauseOnHover: true,
                swipe: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 1,
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
            slickCourseOptions: {
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
            slickEventOptions: {
                arrows: false,
                dots: false,
                infinite: true,
                autoplay: true,
                autoplaySpeed: 3000,
                draggable: true,
                pauseOnHover: true,
                swipe: true,
                slidesToShow: 2,
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
            banner_data: [
                {
                    title: "CHOOSE YOUR BEST COURSE",
                    heading: "A course is essential for building career",
                    description: "Flexible easy to access learning opportunities can bring a significant change in how to learn! The Ellen can offer you to enjoy the beauty of eLearning!",
                    image: "/images/home-three/hero-img1.jpg"
                },
                {
                    title: "CHOOSE YOUR BEST COURSE",
                    heading: "Start learning from best platform",
                    description: "Flexible easy to access learning opportunities can bring a significant change in how to learn! The Ellen can offer you to enjoy the beauty of eLearning!",
                    image: "/images/home-three/hero-img3.jpg"
                },
                {
                    title: "CHOOSE YOUR BEST COURSE",
                    heading: "Improve your skills by study with us",
                    description: "Flexible easy to access learning opportunities can bring a significant change in how to learn! The Ellen can offer you to enjoy the beauty of eLearning!",
                    image: "/images/home-three/hero-img2.jpg"
                },
            ],
            course_data: [
                {
                    course_image: "/images/courses/courses-img7.jpg",
                    instructor_image: "/images/courses/instructors1.jpg",
                    category: "Finance",
                    title: "The complete business plan course includes 50 templates",
                    duration: "10 hr 07 min",
                    lectures: "67 lectures",
                    price: "120"
                },
                {
                    course_image: "/images/courses/courses-img8.jpg",
                    instructor_image: "/images/courses/instructors2.jpg",
                    category: "Banking",
                    title: "Full web designing course with 20 web template designing",
                    duration: "10 hr 07 min",
                    lectures: "67 lectures",
                    price: "400"
                },
                {
                    course_image: "/images/courses/courses-img9.jpg",
                    instructor_image: "/images/courses/instructors3.jpg",
                    category: "Physics",
                    title: "Visual effects for games in unity beginner to intermediate",
                    duration: "10 hr 07 min",
                    lectures: "67 lectures",
                    price: "200"
                },
                {
                    course_image: "/images/courses/courses-img2.jpg",
                    instructor_image: "/images/courses/instructors4.jpg",
                    category: "Accounting",
                    title: "Basic knowledge about hibernal bharat in history",
                    duration: "10 hr 07 min",
                    lectures: "67 lectures",
                    price: "300"
                },
            ],
        };
    },
    methods: {
        async getAboutSection() {
            this.aboutLoading=true;
            try {
                const response = await this.$publicApi.get(API_ROUTES.aboutSection+`/home-page`); // eslint-disable-line
                this.about = response.data.about;
            } catch (err) {
                // console.log(err.response);// eslint-disable-line
                if(err?.response?.data?.message) this.$toast.error(err?.response?.data?.message)
                if(err?.response?.data?.error) this.$toast.error(err?.response?.data?.error)
    
            }finally{
                this.aboutLoading=false;
            }
        },
        async getBannerSection() {
            this.bannerLoading=true;
            try {
                const response = await this.$publicApi.get(API_ROUTES.bannerSection); // eslint-disable-line
                this.banner = response.data.banner;
            } catch (err) {
                // console.log(err.response);// eslint-disable-line
                if(err?.response?.data?.message) this.$toast.error(err?.response?.data?.message)
                if(err?.response?.data?.error) this.$toast.error(err?.response?.data?.error)
    
            }finally{
                this.bannerLoading=false;
            }
        },
        async getFeature() {
            this.featureLoading=true;
            try {
                const response = await this.$publicApi.get(API_ROUTES.feature+`/home-page`); // eslint-disable-line
                this.feature = response.data.feature;
            } catch (err) {
                // console.log(err.response);// eslint-disable-line
                if(err?.response?.data?.message) this.$toast.error(err?.response?.data?.message)
                if(err?.response?.data?.error) this.$toast.error(err?.response?.data?.error)
    
            }finally{
                this.featureLoading=false;
            }
        },
        async getCommonFeature() {
            this.commonFeatureLoading=true;
            try {
                const response = await this.$publicApi.get(API_ROUTES.feature+`/common`); // eslint-disable-line
                this.commonFeature = response.data.feature;
            } catch (err) {
                // console.log(err.response);// eslint-disable-line
                if(err?.response?.data?.message) this.$toast.error(err?.response?.data?.message)
                if(err?.response?.data?.error) this.$toast.error(err?.response?.data?.error)
    
            }finally{
                this.commonFeatureLoading=false;
            }
        },
        async getTestimonial(page=0) {
            this.testimonialLoading=true;
            try {
                const response = await this.$publicApi.get(API_ROUTES.testimonial+`?total=9&page=${page}`); // eslint-disable-line
                this.testimonial = response.data.data
            } catch (err) {
                // console.log(err.response);// eslint-disable-line
                if(err?.response?.data?.message) this.$toast.error(err?.response?.data?.message)
                if(err?.response?.data?.error) this.$toast.error(err?.response?.data?.error)
            }finally{
                this.testimonialLoading=false;
            }
        },
        async getBlog(page=0) {
            this.blogLoading=true;
            try {
                const response = await this.$publicApi.get(API_ROUTES.blog+`?total=6&page=${page}&filter[is_popular]=true`); // eslint-disable-line
                this.blog = response.data.data
            } catch (err) {
                // console.log(err.response);// eslint-disable-line
                if(err?.response?.data?.message) this.$toast.error(err?.response?.data?.message)
                if(err?.response?.data?.error) this.$toast.error(err?.response?.data?.error)
    
            }finally{
                this.blogLoading=false;
            }
        },
        async getEvent(page=0) {
            this.eventLoading=true;
            try {
                const response = await this.$publicApi.get(API_ROUTES.event+`?total=6&page=${page}`); // eslint-disable-line
                this.event = response.data.data
            } catch (err) {
                // console.log(err.response);// eslint-disable-line
                if(err?.response?.data?.message) this.$toast.error(err?.response?.data?.message)
                if(err?.response?.data?.error) this.$toast.error(err?.response?.data?.error)
    
            }finally{
                this.eventLoading=false;
            }
        },
    },
    components: { BlogCard, CourseCard, TestimonialCard, EventCard, WhoWeAreCard, WhatWeDoCard }
}
</script>