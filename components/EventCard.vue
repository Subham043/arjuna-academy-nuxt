<template>
    <div class="event-item">
        <div v-if="image!==''" class="event-img">
            <NuxtLink to="/events/detail">
                <img :src="image" alt="Events" />
            </NuxtLink>
        </div>
        <div class="event-content">
            <ul class="event-list">
                <li><i class="ri-calendar-todo-fill"></i> 02 Jan 2022</li>
                <li><i class="ri-map-pin-fill"></i> Aberdeen City, U.k</li>
                <li><i class="ri-time-fill"></i> 12:00 AM</li>
            </ul>
            <h3>
                <NuxtLink :to="is_event ? '/events/detail' :  '/expert-tips/detail'">{{ title }}</NuxtLink>
            </h3>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit
                necessitatibus
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
        is_event: {
            type: Boolean,
            default: true,
        },
    },
}
</script>