<template>
    <div>
        <div class="inner-banner inner-banner-bg4">
            <div class="container">
                <div class="inner-title text-center">
                    <h3>Blog grid</h3>
                    <ul>
                        <li>
                            <a href="index.html">Home</a>
                        </li>
                        <li>Blog grid</li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="blog-area pt-100 pb-70">
            <div class="container">
                <div class="section-title mb-45 text-center">
                    <h2>Latest from our <b>blogs</b></h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore.
                    </p>
                </div>
                <div class="row justify-content-center">
                    <div v-for="(item, i) in blog_data" :key="i" class="col-lg-4 col-md-6">
                        <BlogCard :image="item.image" :title="item.title" :description="item.description" />
                    </div>
                    <div class="col-lg-12 col-md-12 text-center">
                        <div class="pagination-area">
                            <a href="blog.html" class="prev page-numbers">
                                <i class="flaticon-left-arrow"></i>
                            </a>
                            <span class="page-numbers current" aria-current="page">1</span>
                            <a href="blog.html" class="page-numbers">2</a>
                            <a href="blog.html" class="page-numbers">3</a>
                            <a href="blog.html" class="next page-numbers">
                                <i class="flaticon-chevron"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BlogCard from '~/components/BlogCard.vue';


export default {
    name: "BlogPage",
    layout: "MainPageLayout",
    mounted() {
        // eslint-disable-next-line nuxt/no-env-in-hooks
        if (process.client) {
            this.$scrollTo("#__nuxt", 0, { force: true });
        }
    },
    data() {
        return {
            blog_data: [
                {
                    title: "All that is wrong with codding in the field of apprentices",
                    description: "Lorem ipsum dolor sit amet, constetur adipiscing elit, sed do eiusmod tempor incididunt.",
                    image: "/images/blog/blog-img4.jpg"
                },
                {
                    title: "How to use technology to adapt your talent to the world",
                    description: "Lorem ipsum dolor sit amet, constetur adipiscing elit, sed do eiusmod tempor incididunt.",
                    image: "/images/blog/blog-img2.jpg"
                },
                {
                    title: "Here are the things to look for when selecting an online course",
                    description: "Lorem ipsum dolor sit amet, constetur adipiscing elit, sed do eiusmod tempor incididunt.",
                    image: "/images/blog/blog-img5.jpg"
                },
                {
                    title: "All that is wrong with codding in the field of apprentices",
                    description: "Lorem ipsum dolor sit amet, constetur adipiscing elit, sed do eiusmod tempor incididunt.",
                    image: "/images/blog/blog-img4.jpg"
                },
                {
                    title: "How to use technology to adapt your talent to the world",
                    description: "Lorem ipsum dolor sit amet, constetur adipiscing elit, sed do eiusmod tempor incididunt.",
                    image: "/images/blog/blog-img2.jpg"
                },
                {
                    title: "Here are the things to look for when selecting an online course",
                    description: "Lorem ipsum dolor sit amet, constetur adipiscing elit, sed do eiusmod tempor incididunt.",
                    image: "/images/blog/blog-img5.jpg"
                },
            ],
        };
    },
    components: { BlogCard }
}
</script>