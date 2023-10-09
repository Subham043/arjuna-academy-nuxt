<template>
    <div>
        <div class="hero-slider-area">
            <BannerCardLoading v-if="bannerLoading" />
            <div v-if="!bannerLoading && banner.length>0" class="hero-slider owl-carousel owl-theme">
                <VueSlickCarousel v-bind="slickBannerOptions" ref="slickBanner">
                    <div v-for="(item, i) in banner" :key="i" class="hero-item">
                        <div class="container-fluid">
                            <div class="row align-items-center">
                                <div class="col-lg-6">
                                    <div class="hero-content">
                                        <span class="top-title" v-html="item.title" />
                                        <h1 v-html="item.heading" />
                                        <p v-html="item.description" />
                                        <div class="banner-btn">
                                            <a :href="item.button_link" target="_blank" class="default-btn border-radius-50" v-html="item.button_text" />
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="hero-img">
                                        <img :src="item.banner_image" class="hero" :alt="item.banner_image_alt" :title="item.banner_image_title" data-not-lazy/>
                                        <div class="hero-bg-shape">
                                            <img data-src="/images/home-three/bg-shape1.png" class="bg-img-shape1" alt="Hero" v-lazy-load/>
                                            <img data-src="/images/home-three/bg-shape2.png" class="bg-img-shape2" alt="Hero" v-lazy-load/>
                                        </div>
                                        <div class="top-content">
                                            <div class="hero-img-content">
                                                <img :data-src="item.counter_image_1" :alt="item.counter_title_1" :title="item.counter_title_1" v-lazy-load/>
                                                <div class="content">
                                                    <h3 v-html="item.counter_title_1" />
                                                    <p v-html="item.counter_description_1" />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="right-content">
                                            <div class="hero-img-content">
                                                <img :data-src="item.counter_image_2" :alt="item.counter_title_2" :title="item.counter_title_2" v-lazy-load/>
                                                <div class="content">
                                                    <h3 v-html="item.counter_title_2" />
                                                    <p v-html="item.counter_description_2" />
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
                    <img data-src="/images/home-three/shape.png" alt="Shape" v-lazy-load/>
                </div>
                <div class="shape2">
                    <img data-src="/images/home-three/shape2.png" alt="Shape" v-lazy-load/>
                </div>
            </div>
        </div>

        <div class="featured-area featured-area-mt pb-70">
            <div class="container">
                <FeatureCardLoading v-if="commonFeatureLoading" :count="3" />
                <div class="row justify-content-center">
                    <div v-if="!commonFeatureLoading && commonFeature.length>0" v-for="(item, i) in commonFeature" :key="i" class="col-lg-4 col-6">
                        <div class="featured-item">
                            <img :data-src="item.image" class="featured-img" :alt="item.title" :title="item.title" v-lazy-load>
                            <h3 v-html="item.title" />
                            <p v-html="item.description" />
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
            :heading_center="true"
        />

        <div v-if="course.length>0" class="courses-area-two section-bg pt-70 pb-70">
            <div class="container">
                <div class="row align-items-end mb-45">
                    <div class="col-lg-12">
                        <div class="section-title mt-rs-20 text-center">
                            <span>COURSES</span>
                            <h2>What are the courses offered by Arjunaa Academy?</h2>
                        </div>
                    </div>
                </div>
                <CourseCardLoading v-if="courseLoading" :count="3" />
                <div v-if="!courseLoading && course.length>0" class="course-slider-two owl-carousel owl-theme">
                    <VueSlickCarousel v-bind="slickCourseOptions" ref="slickCourse">
                        <CourseCard 
                            v-for="(item, i) in course" 
                            :key="i" 
                            :image="item.image"
                            :image_alt="item.image_alt"
                            :image_title="item.image_title"
                            :description="item.short_description"
                            :title="item.name"
                            :branches="item.branches"
                            :slug="item.slug"
                            :className="item.class" />
                    </VueSlickCarousel>
                </div>
            </div>
        </div>

        <WhatWeDoCard heading="Why Arjunaa Academy for Achievers is the Top Coaching Centre in Bangalore?" :loading="featureLoading" :feature="feature" />

        <div class="register-area pb-70">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="play-btn-area-two">
                            <div class="hero-content text-center" style="max-width: 100% !important; position:relative">
                                <span class="top-title">START LEARNING</span>
                                <h1 style="color: white !important;">Admission Open For {{ new Date().getFullYear()-1 }} - {{ new Date().getFullYear() }}</h1>
                                <div class="banner-btn justify-content-center">
                                    <a href="/pdf/brochure.pdf" target="_blank" class="default-btn two border-radius-50 mr-2">Download Brochure</a>
                                    <el-dropdown>
                                        <NuxtLink to="/" class="default-btn border-radius-50 m-0">Admission Form</NuxtLink>
                                        <el-dropdown-menu slot="dropdown">
                                            <el-dropdown-item>
                                                <NuxtLink to="/admission/class-8-9-10" class="text-dark">
                                                    Class 8, 9 & 10
                                                </NuxtLink>
                                            </el-dropdown-item>
                                            <el-dropdown-item>
                                                <NuxtLink to="/admission/puc" class="text-dark">
                                                    Class 11 or 1st PUC
                                                </NuxtLink>
                                            </el-dropdown-item>
                                        </el-dropdown-menu>
                                    </el-dropdown>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="testimonials-area pb-70">
            <div class="container">
                <div class="row align-items-center mb-20">
                    <div class="col-lg-8 col-md-9">
                        <div class="section-title mt-rs-20">
                            <span>TESTIMONIAL</span>
                            <h2>Testimonials describe what has been, & are a promise of what is to come</h2>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-3 text-end">
                        <NuxtLink to="/testimonial" class="default-btn border-radius-50">View all Testimonial</NuxtLink>
                    </div>
                </div>
                <TestimonialCardLoading v-if="testimonialLoading" :count="3" />
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

        <div class="event-area section-bg pt-70 pb-70">
            <div class="container">
                <div class="row align-items-end mb-45">
                    <div class="col-lg-8">
                        <div class="section-title mt-rs-20">
                            <span>EVENTS</span>
                            <h2>Upcoming events schedule</h2>
                        </div>
                    </div>
                    <div class="col-lg-4 text-end">
                        <NuxtLink to="/events" class="default-btn border-radius-50">View all Events</NuxtLink>
                    </div>
                </div>
                <EventCardLoading v-if="eventLoading" :count="2" />
                <div v-if="!eventLoading && event.length>0" class="event-slider owl-carousel owl-theme">
                    <VueSlickCarousel v-bind="slickEventOptions" ref="slickEvent">
                        <EventCard v-for="(item, i) in event" :key="i" :image="item.image" :title="item.name" :description="item.short_description" :date="item.event_date_on" :slug="item.slug" />
                    </VueSlickCarousel>
                </div>
            </div>
        </div>

        <div class="blog-area pt-70 pb-70">
            <div class="container">
                <div class="row align-items-end mb-45">
                    <div class="col-lg-8">
                        <div class="section-title mt-rs-20">
                            <span>KNOWLEDGE DESK</span>
                            <h2>Latest from our blogs</h2>
                        </div>
                    </div>
                    <div class="col-lg-4 text-end">
                        <NuxtLink to="/knowledge-desk" class="default-btn border-radius-50">View all Blogs</NuxtLink>
                    </div>
                </div>
                <BlogCardLoading v-if="blogLoading" :count="3" />
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
import { API_ROUTES } from '~/helper/api_routes';
import { slickBannerOptions, slickCourseOptions, slickEventOptions, slickTestimonialOptions } from '~/helper/slick_options';

export default {
    name: "IndexPage",
    layout: "MainPageLayout",
    mounted() {
        if (this.$route.query.verified && this.$route.query.verified=='true') {
            this.$toast.success('Email verified successfully.')
        }
        this.getCourse();
        this.getTestimonial();
        this.getEvent();
        this.getBlog();
    },
    async fetch() {
      await this.getBannerSection();
      await this.getAboutSection();
      await this.getFeature();
      await this.getCommonFeature();
      await this.getSeo();
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
            courseLoading: false,
            course: [],
            seo: {
                meta_title:'',
                meta_description:'',
                meta_keywords:'',
                meta_scripts:'',
            }
        };
    },
    head() {
        return {
            title: this.seo.meta_title,
            meta: [
            // hid is used as unique identifier. Do not use `vmid` for it as it will not work
                {
                    hid: 'og:title',
                    name: 'og:title',
                    content: this.seo.meta_title
                },
                {
                    hid: 'og:type',
                    name: 'og:type',
                    content: 'website'
                },
                {
                    hid: 'description',
                    name: 'description',
                    content: this.seo.meta_description
                },
                {
                    hid: 'keywords',
                    name: 'keywords',
                    content: this.seo.meta_keywords
                },
            ],
            script: [
                {
                    type: 'application/ld+json',
                    innerHTML: this.seo.meta_scripts // <- set jsonld object in data or wherever you want
                },
                {
                    type: 'application/ld+json',
                    innerHTML: `{
                        "@context": "https://schema.org/",
                        "@type": "WebSite",
                        "name": "Arjunaa Academy for Achievers",

                        "url": "https://www.aaaedu.in/",
                        "potentialAction": {
                            "@type": "SearchAction",
                            "target": "https://www.aaaedu.in/?s={search_term_string}",
                            "query-input": "required name=search_term_string"
                        }
                        }` // <- set jsonld object in data or wherever you want
                },
                {
                    type: 'application/ld+json',
                    innerHTML: `{
                        "@context": "https://schema.org",
                        "@type": "CollegeOrUniversity",
                        "name": "Arjunaa Academy for Achievers",
                        "alternateName": "Arjunaa Academy",
                        "url": "https://www.aaaedu.in/",
                        "logo": "https://www.aaaedu.in/assets/img/new-logo.jpg",
                        "sameAs": [
                            "https://www.facebook.com/www.aaaedu.in/",
                            "https://twitter.com/academy_arjunaa",
                            "https://www.instagram.com/arjunaa_academy_for_achievers/",
                            "https://www.youtube.com/channel/UCcPOkcZ_YGpTMcVnLJQYLPA",
                            "https://in.linkedin.com/company/arjunaa-academy-for-achievers"
                        ]
                        }` // <- set jsonld object in data or wherever you want
                },
                {
                    type: 'application/ld+json',
                    innerHTML: `{
                            "@context": "https://schema.org",
                            "@type": "VideoObject",
                            "name": "Arjunaa Academy Feedback of Achievers",
                            "description": "Students of Arjunaa Academy speak about institute and coaching style and practice. How the institute and coaches help them in preparation of studies and exams.",
                            "thumbnailUrl": "",
                            "uploadDate": "2020-05-08",  
                            "publisher": {
                                "@type": "Organization",
                                "name": "Arjunaa Academy for Achievers",
                                "logo": {
                                "@type": "ImageObject",
                                "url": "https://www.aaaedu.in/assets/img/new-logo.webp",
                                "width": "",
                                "height": ""
                                }
                            },
                            "contentUrl": "https://www.youtube.com/watch?v=S9Z9BR_KAz4&list=TLGG6RaqinZghqAxMjExMjAyMQ"
                            }` // <- set jsonld object in data or wherever you want
                },
            ],
            __dangerouslyDisableSanitizers: ['script'],
        }
    },
    computed: {
        slickTestimonialOptions() {
            return slickTestimonialOptions;
        },
        slickEventOptions() {
            return slickEventOptions;
        },
        slickCourseOptions() {
            return slickCourseOptions;
        },
        slickBannerOptions() {
            return slickBannerOptions;
        },
    },
    methods: {
        async getAboutSection() {
            this.aboutLoading=true;
            try {
                const response = await this.$publicApi.get(API_ROUTES.aboutSection+`/home-page`); // eslint-disable-line
                this.about = response.data.about;
            } catch (err) {
                // console.log(err.response);// eslint-disable-line
                this.$nuxt.context.error({
                    status: err.response.status,
                    message: err.response.data.message,
                })
    
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
                this.$nuxt.context.error({
                    status: err.response.status,
                    message: err.response.data.message,
                })
    
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
                this.$nuxt.context.error({
                    status: err.response.status,
                    message: err.response.data.message,
                })
    
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
                this.$nuxt.context.error({
                    status: err.response.status,
                    message: err.response.data.message,
                })
    
            }finally{
                this.commonFeatureLoading=false;
            }
        },
        async getCourse() {
            this.courseLoading=true;
            try {
                const response = await this.$publicApi.get(API_ROUTES.course); // eslint-disable-line
                this.course = response.data.course
            } catch (err) {
                // console.log(err.response);// eslint-disable-line
                this.$nuxt.context.error({
                    status: err.response.status,
                    message: err.response.data.message,
                })
            }finally{
                this.courseLoading=false;
            }
        },
        async getTestimonial(page=0) {
            this.testimonialLoading=true;
            try {
                const response = await this.$publicApi.get(API_ROUTES.testimonial+`?total=9&page=${page}`); // eslint-disable-line
                this.testimonial = response.data.data
            } catch (err) {
                // console.log(err.response);// eslint-disable-line
                this.$nuxt.context.error({
                    status: err.response.status,
                    message: err.response.data.message,
                })
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
                this.$nuxt.context.error({
                    status: err.response.status,
                    message: err.response.data.message,
                })
    
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
                this.$nuxt.context.error({
                    status: err.response.status,
                    message: err.response.data.message,
                })
    
            }finally{
                this.eventLoading=false;
            }
        },
        async getSeo() {
            try {
                const response = await this.$publicApi.get(API_ROUTES.seo+`/home-page`); // eslint-disable-line
                this.seo = response.data.seo
            } catch (err) {
                // console.log(err.response);// eslint-disable-line
                this.$nuxt.context.error({
                    status: err.response.status,
                    message: err.response.data.message,
                })
    
            }
        },
    },
    components: {
        BlogCard, 
        CourseCard, 
        TestimonialCard, 
        EventCard, 
        WhoWeAreCard: () => import('~/components/WhoWeAreCard.vue'), 
        WhatWeDoCard: () => import('~/components/WhatWeDoCard.vue'), 
        BannerCardLoading: () => import('~/components/BannerCardLoading.vue'), 
        FeatureCardLoading: () => import('~/components/FeatureCardLoading.vue'), 
        CourseCardLoading: () => import('~/components/CourseCardLoading.vue'), 
        TestimonialCardLoading: () => import('~/components/TestimonialCardLoading.vue'), 
        EventCardLoading: () => import('~/components/EventCardLoading.vue'), 
        BlogCardLoading: () => import('~/components/BlogCardLoading.vue') 
    }
}
</script>