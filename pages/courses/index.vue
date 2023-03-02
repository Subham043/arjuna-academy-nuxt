<template>
    <div>
        <Breadcrumb title="Courses" />

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
import Breadcrumb from '~/components/Breadcrumb.vue';
import CourseCard from '~/components/CourseCard.vue';



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
    components: { CourseCard, Breadcrumb }
}
</script>