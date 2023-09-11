<template>
    <div class="event-item">
        <div v-if="image!==''" class="event-img">
            <NuxtLink :to="is_event ? `/events/${slug}` :  `/expert-tips/${slug}`">
                <img :src="image" alt="Events" />
            </NuxtLink>
        </div>
        <div class="event-content">
            <ul class="event-list">
                <li><i class="ri-calendar-todo-fill"></i> {{ date }}</li>
                <li><i class="ri-user-fill"></i> {{ author }}</li>
            </ul>
            <h3>
                <NuxtLink :to="is_event ? `/events/${slug}` :  `/expert-tips/${slug}`">{{ title }}</NuxtLink>
            </h3>
            <p>
                {{ description }}
            </p>
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
        is_event: {
            type: Boolean,
            default: true,
        },
    },
}
</script>