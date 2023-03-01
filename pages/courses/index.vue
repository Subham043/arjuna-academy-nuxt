<template>
    <div>
        <div class="inner-banner inner-banner-bg">
            <div class="container">
                <div class="inner-title text-center">
                    <h3>Courses</h3>
                    <ul>
                        <li>
                            <a href="index.html">Home</a>
                        </li>
                        <li>Courses</li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="blog-area pt-100 pb-70">
            <div class="container">
                <div class="section-title mb-45 text-center">
                    <h2>Courses for <b>School (Std VIII to X)</b></h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore.
                    </p>
                </div>
                <div class="row justify-content-center">
                    <div v-for="(item, i) in course_data" :key="i" class="col-lg-4 col-md-6">
                        <div class="courses-item">
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
                    </div>
                    <div class="col-lg-12 col-md-12 text-center">
                        <div class="pagination-area">
                            <a href="blog.html" class="prev page-numbers">
                                <i class="flaticon-left-arrow"></i>
                            </a>
                            <span class="page-numbers current" aria-current="page">1</span>
                            <a href="blog.html" class="page-numbers">2</a>
                            <a href="blog.html" class="page-numbers">3</a>
                            <a href="blog.html" class="next page-numbers">
                                <i class="flaticon-chevron"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        

    </div>
</template>

<script>


export default {
    name: "CoursesPage",
    layout: "MainPageLayout",
    data() {
        return {
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
            ],
        };
    },
    mounted() {
        // eslint-disable-next-line nuxt/no-env-in-hooks
        if (process.client) {
            this.$scrollTo("#__nuxt", 0, { force: true });
        }
    },
}
</script>