<template>
    <div class="instructors-card">
        <img :data-src="image" :alt="image_alt" :title="image_title" v-lazy-load/>
        <div class="content">
            <h3 v-html="name" />
            <span v-html="designation" />
        </div>
        <div class="instructor-detail">
            <p v-html="description" />
        </div>
    </div>
</template>

<script>
export default {
    name: 'InstructorCardComponent',
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
        image_alt: {
            type: String,
            default: '',
        },
        image_title: {
            type: String,
            default: '',
        },
        description: {
            type: String,
            default: '',
        },
    },
}
</script>