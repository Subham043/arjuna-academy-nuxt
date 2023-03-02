<template>
    <div class="blog-card">
        <NuxtLink to="/knowledge-desk/detail">
            <img :src="image" alt="Blog" />
        </NuxtLink>
        <div class="content">
            <ul>
                <li><i class="ri-calendar-todo-fill"></i> Jan 12,2022</li>
                <li>
                    <i class="ri-price-tag-3-fill"></i>
                    <NuxtLink to="/knowledge-desk/detail">Education</NuxtLink>
                </li>
            </ul>
            <h3>
                <NuxtLink to="/knowledge-desk/detail">{{ title }}</NuxtLink>
            </h3>
            <p>
                {{ description }}
            </p>
            <NuxtLink to="/knowledge-desk/detail" class="read-btn">Read More</NuxtLink>
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
    },
}
</script>