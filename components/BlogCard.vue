<template>
    <div class="blog-card">
        <a href="single-blog-1.html">
            <img :src="image" alt="Blog" />
        </a>
        <div class="content">
            <ul>
                <li><i class="ri-calendar-todo-fill"></i> Jan 12,2022</li>
                <li>
                    <i class="ri-price-tag-3-fill"></i>
                    <a href="tags.html">Education</a>
                </li>
            </ul>
            <h3>
                <a href="single-blog-1.html">{{ title }}</a>
            </h3>
            <p>
                {{ description }}
            </p>
            <a href="single-blog-1.html" class="read-btn">Read More</a>
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