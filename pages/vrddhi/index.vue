<template>
    <div>
        <Breadcrumb 
            title="Vrddhi"
            :pages="[
                {
                    link:'',
                    name:'Vrddhi'
                }
            ]"
        />

        <div class="enrolled-area-two pt-70 pb-70">
            <div class="container">
                <div class="col-lg-12">
                    <div class="enrolled-content mb-30">
                        <div class="section-title">
                            <div class="text-center">
                                <span>History of Vrddhi</span>
                                <h2>
                                    Inter-School Talent Search Exam
                                </h2>
                                <p>
                                    Vrddhi is an Inter-school Talent search Examination conducted by Arjunaa Academy For
                                    Achievers (AAA) since 2012 in the name of Young Ramanujan Inter school contest. Young
                                    Ramanujan Inter school contest was renamed as Vrddhi, which symbolizes Prosperity,
                                    Development or Improvement in the career of a child.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="enrolled-area pt-70 pb-70">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-5">
                        <div class="enrolled-img-two mb-30" data-speed="0.05" data-revert="true">
                            <img v-lazy-load data-src="/images/parent-say.webp" alt="Enrolled">
                        </div>
                    </div>
                    <div class="col-lg-7">
                        <div class="enrolled-content mb-30">
                            <div class="section-title">
                                <h2>
                                    Objectives of vrddhi
                                </h2>
                                <p>
                                    The normal tendency of the Parents' & Students' is to be happy being a "BIG FISH IN A
                                    SMALL POND". Vrddhi helps in giving Students' a true reflection as to where they stand
                                    in this competitive world. Vrddhi also helps in Inspiring Students' to become competent
                                    which would help them to develop in all facets of life.
                                </p>
                                <p>
                                    The Objectives of Vrddhi are:
                                </p>
                            </div>
                            <div class="row">
                                <div class="col-lg-12 col-12">
                                    <ul class="enrolled-list">
                                        <li><i class="flaticon-check"></i> To create awareness about the competitive exams
                                            and the benefits of taking up these exams.</li>
                                        <li>
                                            <i class="flaticon-check"></i> To Educate the Students' & the Parents' about the
                                            scholarship competitive exams which would be beneficial for the future of the
                                            Students.
                                        </li>
                                        <li>
                                            <i class="flaticon-check"></i> To provide new opportunities to the Students' by
                                            understanding the Strengths' by career guidance and career mapping.
                                        </li>
                                        <li>
                                            <i class="flaticon-check"></i> To instill confidence & improve on the competency
                                            level of the students
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="testimonials-area pt-70 pb-70">
            <div class="container">
                <div class="section-title text-center">
                    <span>TESTIMONIAL</span>
                    <h2>What Parents say...</h2>
                </div>
                <div class="testimonials-slider-two owl-carousel owl-theme">
                    <VueSlickCarousel v-bind="slickTestimonialOptions" ref="slickTestimonial">
                        <TestimonialCard v-for="(item, i) in testimonials" :key="i" :image="item.image" :name="item.name"
                            :star="item.star" :message="item.message" :designation="item.designation" />
                    </VueSlickCarousel>
                </div>
            </div>
        </div>

        <div class="enrolled-area pt-70 pb-70">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-7">
                        <div class="enrolled-content mb-30">
                            <div class="section-title">
                                <h2>
                                    Vrddhi Format
                                </h2>
                                <p>
                                    Vrddhi is an objective based Examination consisting of 35 questions and the duration of
                                    the Exam is 1 hour.
                                </p>
                                <p>
                                    Subjects Involved:
                                </p>
                            </div>
                            <div class="row">
                                <div class="col-lg-6 col-6">
                                    <ul class="enrolled-list">
                                        <li><i class="flaticon-check"></i> Mental Ability Test</li>
                                        <li><i class="flaticon-check"></i> Mathematics</li>
                                        <li><i class="flaticon-check"></i> Physics</li>
                                    </ul>
                                </div>
                                <div class="col-lg-6 col-6">
                                    <ul class="enrolled-list">
                                        <li><i class="flaticon-check"></i> Chemistry</li>
                                        <li><i class="flaticon-check"></i> Biology</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-5">
                        <div class="enrolled-img-two mb-30" data-speed="0.05" data-revert="true">
                            <img v-lazy-load data-src="/images/objective-of-vrddhi.webp" alt="Enrolled">
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="footer-contact-area ptb-70">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-9 col-md-9">
                        <div class="section-title">
                            <h2>To View the Syllabus & the Model Paper</h2>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-3 text-end">
                        <NuxtLink to="/vrddhi/syllabus" aria-label="Syllabus" class="default-btn">Click Here</NuxtLink>
                    </div>
                </div>
            </div>
        </div>

        <div class="faq-area pt-70 pb-70">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6">
                        <div class="faq-img">
                            <img v-lazy-load data-src="/images/reward.webp" alt="faq" />
                            <div class="shape">
                                <img v-lazy-load data-src="/images/faq-shape.png" alt="Faq" />
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="faq-accordion pl-20">
                            <div class="section-title mb-45">
                                <h2>Rewards</h2>
                                <span>( Subjects Involved )</span>
                            </div>
                            <div class="enrolled-content mb-30">
                                <div class="row">
                                    <div class="col-lg-12 col-12">
                                        <ul class="enrolled-list">
                                            <li><i class="flaticon-check"></i> Best school of each streams in the zone would be presented with a Rolling Trophy.</li>
                                            <li><i class="flaticon-check"></i> The School Toppers would receive Medals.</li>
                                            <li><i class="flaticon-check"></i> The Zonal Toppers would receive a Trophy.</li>
                                            <li><i class="flaticon-check"></i> All the Participants would receive a participation certificate.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import { slickTestimonialOptions } from '~/helper/slick_options';
import TestimonialCard from '~/components/TestimonialCard.vue';
import { API_ROUTES } from '~/helper/api_routes';


export default {
    name: "VrddhiPage",
    layout: "MainPageLayout",
    data() {
        return {
            testimonials: [
                {
                    name: 'SREEJA',
                    image: '/images/logos/logo-sm.webp',
                    star: 5,
                    designation: 'parent',
                    message: `My daughter was not planning to join any coaching class 9 as she had been pretty
                                comfortable studying on her own. only because it started as an after school class within
                                the school premises, we thought of exploring it and I'm happy that it worked out well
                                for her.
                                AAA provided her with a lot of practice materials. Also, all the practice worksheets
                                which were done as homework were corrected and alterative or easier solution, missing
                                steps, etc. were given and mentioned in her solution sheet i.e all the
                                problems were corrected thoroughly making sure that the children followed all the steps.
                                Also, whenever she missed any class, upon request, the concerned teacher used to take
                                extra hours after class even if it is for just 1or 2 students. I'm very happy that AAA
                                helped my daughter with her studies significantly.
                                Thanks to all the faculty at AAA.
                            `,
                },
                {
                    name: 'PRASHANT PAI B',
                    image: '/images/logos/logo-sm.webp',
                    star: 5,
                    designation: 'parent',
                    message: `Arjuna Academy for Achievers is doing a great job in coaching your mind. The teachers are
                                highly qualified, dedicated, and work hard to help the students understand the basics.
                                The class homework, student materials, and assignments are excellent. as they are
                                conducting the classes in the same school where my son Nandish pai studies, I am very
                                happy that he does not has to travel to the coaching center.
                                It saves his time and we, parent feel safe about our child.
                            `,
                },
                {
                    name: 'B C KESHAV',
                    image: '/images/logos/logo-sm.webp',
                    star: 5,
                    designation: 'parent',
                    message: `The Interaction Between Teacher and children is very convincing. it has helped to Bring
                                up the Interests of the Child and motivate Hime To Achieve His Goal. AAA Has Played an
                                Important Role in our child's LIfe in shaping his future.
                            `,
                },
            ],
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
            link: [
                {
                    rel: 'canonical',
                    href: this.$config.mainURL + this.$route.path,
                },
            ],
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
            script: [{
                type: 'application/ld+json',
                innerHTML: this.seo.meta_scripts // <- set jsonld object in data or wherever you want
            }],
            __dangerouslyDisableSanitizers: ['script'],
        }
    },
    computed: {
        slickTestimonialOptions() {
            return slickTestimonialOptions;
        }
    },
    async fetch() {
      await this.getSeo();
    },
    methods: {
        async getSeo() {
            try {
                const response = await this.$publicApi.get(API_ROUTES.seo+`/vrddhi-page`); // eslint-disable-line
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
        Breadcrumb: () => import('~/components/Breadcrumb.vue'), 
        TestimonialCard 
    }
}
</script>