<template>
    <div class="blog-card">
        <NuxtLink :to="`/knowledge-desk/${slug}`">
            <img :data-src="image"  :alt="image_alt" :title="image_title" v-lazy-load/>
        </NuxtLink>
        <div class="content">
            <ul>
                <li class="one-line-text">
                    <span class="svg-icon">
                        <font-awesome-icon :icon="['fa', 'calendar-days']"  />&nbsp; {{ date }}
                    </span>
                </li>
                <li class="one-line-text">
                    <span class="svg-icon">
                        <font-awesome-icon :icon="['fa', 'user']"  />&nbsp; {{ author }}
                    </span>
                </li>
            </ul>
            <h3>
                <NuxtLink :to="`/knowledge-desk/${slug}`" v-html="title" />
            </h3>
            <p v-html="description" />
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