<template>
    <div class="blog-card">
        <NuxtLink :to="`/knowledge-desk/${slug}`">
            <img :data-src="image"  :alt="image_alt" :title="image_title" width="412" height="215" v-lazy-load/>
        </NuxtLink>
        <div class="content">
            <ul>
                <li class="one-line-text"><i class="ri-calendar-todo-fill"></i> {{ date }}</li>
                <li class="one-line-text"><i class="ri-user-fill"></i> {{ author }}</li>
            </ul>
            <h3>
                <NuxtLink :to="`/knowledge-desk/${slug}`" v-html-safe="title" />
            </h3>
            <p v-html-safe="description" />
            <NuxtLink :to="`/knowledge-desk/${slug}`" class="read-btn">Read More</NuxtLink>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BlogCardComponent',
    props: {
        image: {
            type: String,
            default: '',
        },
        title: {
            type: String,
            default: '',
        },
        description: {
            type: String,
            default: '',
        },
        date: {
            type: String,
            default: '',
        },
        author: {
            type: String,
            default: '',
        },
        slug: {
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
    },
}
</script>