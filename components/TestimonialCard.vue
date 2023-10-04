<template>
    <div class="testimonials-card-two">
        <div class="rating">
            <i v-for="i in star" :key="i" class="ri-star-fill"></i>
        </div>
        <div class="quote"><i class="flaticon-quote"></i></div>
        <p>
            “<span v-html-safe="message" />”
        </p>
        <div class="content">
            <img :data-src="image" :alt="name" :title="name" width="70" height="70" v-lazy-load/>
            <h3 v-html-safe="name" />
            <span v-html-safe="designation" />
        </div>
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