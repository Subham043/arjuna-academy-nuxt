<template>
    <div>
        <div v-if="banner_data.length>0" class="hero-slider-area">
            <div class="hero-slider owl-carousel owl-theme">
                <VueSlickCarousel v-bind="slickBannerOptions" ref="slickBanner">
                    <div v-for="(item, i) in banner_data" :key="i" class="hero-item">
                        <div class="container-fluid">
                            <div class="row align-items-center">
                                <div class="col-lg-6">
                                    <div class="hero-content">
                                        <span class="top-title">{{ item.title }}</span>
                                        <h1>{{ item.heading }}</h1>
                                        <p>{{ item.description }}</p>
                                        <div class="banner-btn">
                                            <a href="courses.html" class="default-btn border-radius-50">Find courses</a>
                                            <a href="https://www.youtube.com/watch?v=Zd00oIDAt60" class="play-btn">
                                                <i class="flaticon-play-button-arrowhead"></i>
                                                <span class="title-text">Watch video</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="hero-img">
                                        <img :src="item.image" class="hero" alt="Hero" />
                                        <div class="hero-bg-shape">
                                            <img src="/images/home-three/bg-shape1.png" class="bg-img-shape1" alt="Hero" />
                                            <img src="/images/home-three/bg-shape2.png" class="bg-img-shape2" alt="Hero" />
                                        </div>
                                        <div class="top-content">
                                            <div class="hero-img-content">
                                                <i class="flaticon-student"></i>
                                                <div class="content">
                                                    <h3>250K</h3>
                                                    <p>Assisted student</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="right-content">
                                            <div class="hero-img-content">
                                                <i class="flaticon-checked"></i>
                                                <div class="content">
                                                    <h3>Congratulations</h3>
                                                    <p>Your admission completed</p>
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
              <div class="col-lg-4 col-6">
                <div class="featured-item">
                  <i class="flaticon-studying"></i>
                  <h3>Expedite learning</h3>
                  <p>
                    Duis aute irure dolor in voluptate velit esse cillum labore .
                  </p>
                </div>
              </div>
              <div class="col-lg-4 col-6">
                <div class="featured-item">
                  <i class="flaticon-platform"></i>
                  <h3>Open-source platform</h3>
                  <p>
                    Duis aute irure dolor in voluptate velit esse cillum labore .
                  </p>
                </div>
              </div>
              <div class="col-lg-4 col-6">
                <div class="featured-item">
                  <i class="flaticon-effective"></i>
                  <h3>Maximum efficiency</h3>
                  <p>
                    Duis aute irure dolor in voluptate velit esse cillum labore .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="enrolled-area-two pb-70">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6">
                        <div class="enrolled-img-three mb-30 pr-20">
                            <img src="/images/enrolled/enrolled-img3.jpg" alt="Enrolled" />
                            <div class="enrolled-img-content">
                                <i class="flaticon-discount"></i>
                                <div class="content">
                                    <h3>Get 40% off</h3>
                                    <p>Every course</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="enrolled-content mb-30">
                            <div class="section-title">
                                <span>WHO WE ARE</span>
                                <h2>
                                    We have the most qualified instructors in your hometown.
                                </h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                                    maecenas accumsan lacus vel facilisis.
                                </p>
                            </div>
                            <div class="row">
                                <div class="col-lg-6 col-6">
                                    <ul class="enrolled-list">
                                        <li><i class="flaticon-check"></i> Full lifetime access</li>
                                        <li>
                                            <i class="flaticon-check"></i> Certificate of completion
                                        </li>
                                    </ul>
                                </div>
                                <div class="col-lg-6 col-6">
                                    <ul class="enrolled-list">
                                        <li>
                                            <i class="flaticon-check"></i> 20+ downloadable resources
                                        </li>
                                        <li><i class="flaticon-check"></i> Free trial 7 days</li>
                                    </ul>
                                </div>
                            </div>
                            <a href="courses.html" class="default-btn border-radius-50">Enrolled today</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="featured-area pb-70">
            <div class="container">
                <div class="row align-items-center mb-45">
                    <div class="col-lg-8 col-md-9">
                        <div class="section-title mt-rs-20">
                            <span>WHAT WE DO</span>
                            <h2>Explore top featured categories</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore.
                            </p>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-3 text-end">
                        <a href="courses.html" class="default-btn border-radius-50">Explore more</a>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-3 col-6">
                        <div class="featured-item-two">
                            <a href="courses.html">
                                <i class="flaticon-web-development"></i>
                                <h3>Development</h3>
                            </a>
                        </div>
                    </div>
                    <div class="col-lg-3 col-6">
                        <div class="featured-item-two">
                            <a href="courses.html">
                                <i class="flaticon-design"></i>
                                <h3>Web designing</h3>
                            </a>
                        </div>
                    </div>
                    <div class="col-lg-3 col-6">
                        <div class="featured-item-two">
                            <a href="courses.html">
                                <i class="flaticon-wellness"></i>
                                <h3>Lifestyle</h3>
                            </a>
                        </div>
                    </div>
                    <div class="col-lg-3 col-6">
                        <div class="featured-item-two">
                            <a href="courses.html">
                                <i class="flaticon-heart-beat"></i>
                                <h3>Health & fitness</h3>
                            </a>
                        </div>
                    </div>
                    <div class="col-lg-3 col-6">
                        <div class="featured-item-two">
                            <a href="courses.html">
                                <i class="flaticon-corporate"></i>
                                <h3>Gov. exams</h3>
                            </a>
                        </div>
                    </div>
                    <div class="col-lg-3 col-6">
                        <div class="featured-item-two">
                            <a href="courses.html">
                                <i class="flaticon-camera"></i>
                                <h3>Photography</h3>
                            </a>
                        </div>
                    </div>
                    <div class="col-lg-3 col-6">
                        <div class="featured-item-two">
                            <a href="courses.html">
                                <i class="flaticon-user"></i>
                                <h3>Accounting</h3>
                            </a>
                        </div>
                    </div>
                    <div class="col-lg-3 col-6">
                        <div class="featured-item-two">
                            <a href="courses.html">
                                <i class="flaticon-folder"></i>
                                <h3>Data science</h3>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

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
                        <div v-for="(item, i) in course_data" :key="i" class="courses-item">
                            <a href="courses-details.html">
                                <img :src="item.course_image" alt="Courses" />
                            </a>
                            <div class="content">
                                <div class="course-instructors">
                                    <img :src="item.instructor_image" alt="instructors" />
                                </div>
                                <a href="courses.html" class="tag-btn">{{ item.category }}</a>
                                <h3>
                                    <a href="courses-details.html">{{ item.title }}</a>
                                </h3>
                                <ul class="course-list">
                                    <li><i class="ri-time-fill"></i> {{ item.duration }}</li>
                                    <li><i class="ri-vidicon-fill"></i> {{ item.lectures }}</li>
                                </ul>
                                <div class="bottom-content">
                                    <div class="rating2">
                                        <i class="ri-star-fill"></i>
                                        <i class="ri-star-fill"></i>
                                        <i class="ri-star-fill"></i>
                                        <i class="ri-star-fill"></i>
                                        <i class="ri-star-fill"></i>
                                        5 (30+ rating)
                                    </div>
                                    <div class="bottom-price">${{ item.price }}</div>
                                </div>
                            </div>
                        </div>
                    </VueSlickCarousel>
                </div>
            </div>
        </div>

        <div class="counter-area-two">
            <div class="container">
                <div class="counter-max">
                    <div class="row">
                        <div class="col-lg-3 col-6 col-md-3">
                            <div class="counter-content">
                                <i class="flaticon-online-course"></i>
                                <h3><span class="odometer" data-count="15000">00000</span>+</h3>
                                <p>Courses & videos</p>
                            </div>
                        </div>
                        <div class="col-lg-3 col-6 col-md-3">
                            <div class="counter-content">
                                <i class="flaticon-student"></i>
                                <h3>
                                    <span class="odometer" data-count="145000">000000</span>+
                                </h3>
                                <p>Students enrolled</p>
                            </div>
                        </div>
                        <div class="col-lg-3 col-6 col-md-3">
                            <div class="counter-content">
                                <i class="flaticon-online-course-1"></i>
                                <h3><span class="odometer" data-count="10000">00000</span>+</h3>
                                <p>Courses instructors</p>
                            </div>
                        </div>
                        <div class="col-lg-3 col-6 col-md-3">
                            <div class="counter-content">
                                <i class="flaticon-customer-satisfaction"></i>
                                <h3><span class="odometer" data-count="100">000</span>%</h3>
                                <p>Satisfaction rate</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div v-if="testimonial_data.length > 0" class="testimonials-area pt-100 pb-100">
            <div class="container">
                <div class="section-title text-center">
                    <span>TESTIMONIAL</span>
                    <h2>What people say about us</h2>
                </div>
                <div class="testimonials-slider-two owl-carousel owl-theme">
                    <VueSlickCarousel v-bind="slickTestimonialOptions" ref="slickTestimonial">
                        <div v-for="(item, i) in testimonial_data" :key="i" class="testimonials-card-two">
                            <div class="rating">
                                <i class="ri-star-fill"></i>
                                <i class="ri-star-fill"></i>
                                <i class="ri-star-fill"></i>
                                <i class="ri-star-fill"></i>
                                <i class="ri-star-fill"></i>
                            </div>
                            <p>
                                “Morbi porttitor ligula id varius consectetur. Integer ipsum
                                justo, congue sit amet massa vel, porttitor semper magna. Orci
                                varius natoque penatibus et magnis dis parturient montes, nascetur
                                ridiculus.”
                            </p>
                            <div class="content">
                                <img :src="item.image" alt="testimonials" />
                                <h3>{{ item.name }}</h3>
                                <span>{{ item.designation }}</span>
                            </div>
                            <div class="quote"><i class="flaticon-quote"></i></div>
                        </div>
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

        <div v-if="event_data.length > 0" class="event-area section-bg pb-100">
            <div class="container">
                <div class="row align-items-end mb-45">
                    <div class="col-lg-8">
                        <div class="section-title mt-rs-20">
                            <span>EVENTS</span>
                            <h2>Upcoming events schedule</h2>
                        </div>
                    </div>
                    <div class="col-lg-4 text-end">
                        <a href="blog.html" class="default-btn border-radius-50">View all events</a>
                    </div>
                </div>
                <div class="event-slider owl-carousel owl-theme">
                    <VueSlickCarousel v-bind="slickEventOptions" ref="slickEvent">
                        <div v-for="(item, i) in event_data" :key="i" class="event-item">
                            <div class="event-img">
                                <a href="event-details.html">
                                    <img :src="item.image" alt="Events" />
                                </a>
                            </div>
                            <div class="event-content">
                                <ul class="event-list">
                                    <li><i class="ri-calendar-todo-fill"></i> 02 Jan 2022</li>
                                    <li><i class="ri-map-pin-fill"></i> Aberdeen City, U.k</li>
                                    <li><i class="ri-time-fill"></i> 12:00 AM</li>
                                </ul>
                                <h3>
                                    <a href="courses-details.html">{{ item.title }}</a>
                                </h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit
                                    necessitatibus
                                </p>
                            </div>
                        </div>
                    </VueSlickCarousel>
                </div>
            </div>
        </div>

        <div v-if="blog_data.length > 0" class="blog-area pt-100 pb-70">
            <div class="container">
                <div class="row align-items-end mb-45">
                    <div class="col-lg-8">
                        <div class="section-title mt-rs-20">
                            <span>LATEST BLOG</span>
                            <h2>Latest from our blogs</h2>
                        </div>
                    </div>
                    <div class="col-lg-4 text-end">
                        <a href="blog.html" class="default-btn border-radius-50">View all blogs</a>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <VueSlickCarousel v-bind="slickCourseOptions" ref="slickBlog">
                        <div v-for="(item, i) in blog_data" :key="i" class="col-lg-12 col-md-12">
                            <BlogCard :image="item.image" :title="item.title" :description="item.description" />
                        </div>
                    </VueSlickCarousel>
                </div>
            </div>
        </div>

        <div class="newsletter-area section-bg ptb-100">
            <div class="container">
                <div class="row">
                    <div class="col-lg-5">
                        <div class="section-title mt-rs-20">
                            <span>ARE YOU IMPRESSED FOR AMAZING SERVICES?</span>
                            <h2>Subscribe our newsletter</h2>
                        </div>
                    </div>
                    <div class="col-lg-7">
                        <form class="newsletter-form" data-toggle="validator" method="POST">
                            <input type="email" class="form-control" placeholder="Enter Your Email Address" name="EMAIL"
                                required autocomplete="off" />
                            <button class="subscribe-btn" type="submit">
                                Subscribe Now <i class="flaticon-paper-plane"></i>
                            </button>
                            <div id="validator-newsletter" class="form-result"></div>
                        </form>
                    </div>
                </div>
            </div>
        </div>


    </div>
</template>

<script>
import BlogCard from '~/components/BlogCard.vue';


export default {
    name: "IndexPage",
    layout: "MainPageLayout",
    mounted() {
        // eslint-disable-next-line nuxt/no-env-in-hooks
        if (process.client) {
            this.$scrollTo("#__nuxt", 0, { force: true });
        }
    },
    data() {
        return {
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
            blog_data: [
                {
                    title: "All that is wrong with codding in the field of apprentices",
                    description: "Lorem ipsum dolor sit amet, constetur adipiscing elit, sed do eiusmod tempor incididunt.",
                    image: "/images/blog/blog-img4.jpg"
                },
                {
                    title: "How to use technology to adapt your talent to the world",
                    description: "Lorem ipsum dolor sit amet, constetur adipiscing elit, sed do eiusmod tempor incididunt.",
                    image: "/images/blog/blog-img2.jpg"
                },
                {
                    title: "Here are the things to look for when selecting an online course",
                    description: "Lorem ipsum dolor sit amet, constetur adipiscing elit, sed do eiusmod tempor incididunt.",
                    image: "/images/blog/blog-img5.jpg"
                },
            ],
            event_data: [
                {
                    title: "University admissions could face emergency controls",
                    image: "/images/events/event-img1.jpg"
                },
                {
                    title: "As learning moves online trigger warnings must too",
                    image: "/images/events/event-img2.jpg"
                },
                {
                    title: "Java programming masterclass name for software developers",
                    image: "/images/events/event-img3.jpg"
                },
            ],
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
    components: { BlogCard }
}
</script>