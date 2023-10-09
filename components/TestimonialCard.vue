<template>
    <div class="testimonials-card-two">
        <div class="rating">
            <span v-for="i in star" :key="i" class="svg-icon" >
                <font-awesome-icon :icon="['fa', 'star']"  />
            </span>
        </div>
        <div class="quote"><i class="flaticon-quote"></i></div>
        <p>
            “<span v-html="message" />”
        </p>
        <div class="content">
            <img :data-src="image" :alt="name" :title="name" v-lazy-load/>
            <h3 v-html="name" />
            <span v-html="designation" />
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