<template>
    <div class="courses-item">
        <NuxtLink to="/courses/detail">
            <img :src="course_image" alt="Courses" />
        </NuxtLink>
        <div class="content">
            <div class="course-instructors">
                <img :src="instructor_image" alt="instructors" />
            </div>
            <NuxtLink to="/courses/detail" class="tag-btn">{{ category }}</NuxtLink>
            <h3>
                <NuxtLink to="/courses/detail">{{ title }}</NuxtLink>
            </h3>
            <ul class="course-list">
                <li><i class="ri-time-fill"></i> {{ duration }}</li>
                <li><i class="ri-vidicon-fill"></i> {{ lectures }}</li>
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
                <div class="bottom-price">${{ price }}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CourseCardComponent',
    props: {
        course_image: {
            type: String,
            default: '',
        },
        instructor_image: {
            type: String,
            default: '',
        },
        category: {
            type: String,
            default: '',
        },
        title: {
            type: String,
            default: '',
        },
        duration: {
            type: String,
            default: '',
        },
        lectures: {
            type: String,
            default: '',
        },
        price: {
            type: String,
            default: '',
        },
    },
}
</script>