<template>
    <div class="event-item">
        <div v-if="image!==''" class="event-img">
            <NuxtLink :to="is_event ? `/events/${slug}` :  `/expert-tips/${slug}`">
                <img :data-src="image" :alt="image_alt" :title="image_title" width="180" height="117" v-lazy-load/>
            </NuxtLink>
        </div>
        <div class="event-content">
            <ul class="event-list">
                <li><i class="ri-calendar-todo-fill"></i> {{ date }}</li>
                <li v-if="!is_event"><i class="ri-user-fill"></i> {{ author }}</li>
            </ul>
            <h3>
                <NuxtLink :to="is_event ? `/events/${slug}` :  `/expert-tips/${slug}`" v-html-safe="title" />
            </h3>
            <p v-html-safe="description" />
        </div>
    </div>
</template>

<script>
export default {
    name: 'EventCardComponent',
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
        slug: {
            type: String,
            default: '',
        },
        author: {
            type: String,
            default: '',
        },
        date: {
            type: String,
            default: '',
        },
        image_title: {
            type: String,
            default: '',
        },
        image_alt: {
            type: String,
            default: '',
        },
        is_event: {
            type: Boolean,
            default: true,
        },
    },
}
</script>