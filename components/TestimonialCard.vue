<template>
    <div class="testimonials-card-two">
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
    },
}
</script>