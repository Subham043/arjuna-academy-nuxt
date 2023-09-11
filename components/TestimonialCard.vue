<template>
    <div class="testimonials-card-two">
        <div class="rating">
            <i v-for="i in star" :key="i" class="ri-star-fill"></i>
        </div>
        <p>
            “{{message}}”
        </p>
        <div class="content">
            <img :src="image" alt="testimonials" />
            <h3>{{ name }}</h3>
            <span>{{ designation }}</span>
        </div>
        <div class="quote"><i class="flaticon-quote"></i></div>
    </div>
</template>

<script>
export default {
    name: 'TestimonialCardComponent',
    props: {
        image: {
            type: String,
            default: '',
        },
        name: {
            type: String,
            default: '',
        },
        designation: {
            type: String,
            default: '',
        },
        message: {
            type: String,
            default: '',
        },
        star: {
            type: Number,
            default: 5,
        },
    },
}
</script>