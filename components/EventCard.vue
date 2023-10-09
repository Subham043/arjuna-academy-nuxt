<template>
    <div class="event-item">
        <div v-if="image!==''" class="event-img">
            <NuxtLink :to="is_event ? `/events/${slug}` :  `/expert-tips/${slug}`">
                <img :data-src="image" :alt="image_alt" :title="image_title" v-lazy-load/>
            </NuxtLink>
        </div>
        <div class="event-content">
            <ul class="event-list">
                <li>
                    <span class="svg-icon">
                        <font-awesome-icon :icon="['fa', 'calendar-days']"  />&nbsp; {{ date }}
                    </span>
                </li>
                <li v-if="!is_event">
                    <span class="svg-icon">
                        <font-awesome-icon :icon="['fa', 'user']"  />&nbsp; {{ author }}
                    </span>
                </li>
            </ul>
            <h3>
                <NuxtLink :to="is_event ? `/events/${slug}` :  `/expert-tips/${slug}`" v-html="title" />
            </h3>
            <p v-html="description" />
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