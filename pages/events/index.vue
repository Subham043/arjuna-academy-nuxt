<template>
    <div>
        <Breadcrumb title="Events" />

        <div class="blog-area pt-100 pb-70">
            <div class="container">
                <div class="section-title mb-45 text-center">
                    <h2>Latest from our <b>events</b></h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore.
                    </p>
                </div>
                <div class="row justify-content-center">
                    <div v-for="(item, i) in event_data" :key="i" class="col-lg-6 col-md-6">
                        <EventCard :image="item.image" :title="item.title" />
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
import Breadcrumb from '~/components/Breadcrumb.vue';
import EventCard from '~/components/EventCard.vue';


export default {
    name: "EventTipPage",
    layout: "MainPageLayout",
    mounted() {
        // eslint-disable-next-line nuxt/no-env-in-hooks
        if (process.client) {
            this.$scrollTo("#__nuxt", 0, { force: true });
        }
    },
    data() {
        return {
            event_data: [
                {
                    title: "University admissions could face emergency controls",
                    image: "/images/events/event-img1.jpg"
                },
                {
                    title: "As learning moves online trigger warnings must too",
                    image: "/images/events/event-img2.jpg"
                },
                {
                    title: "Java programming masterclass name for software developers",
                    image: "/images/events/event-img3.jpg"
                },
                {
                    title: "Java programming masterclass name for software developers",
                    image: "/images/events/event-img3.jpg"
                },
                {
                    title: "University admissions could face emergency controls",
                    image: "/images/events/event-img1.jpg"
                },
                {
                    title: "As learning moves online trigger warnings must too",
                    image: "/images/events/event-img2.jpg"
                },
                {
                    title: "Java programming masterclass name for software developers",
                    image: "/images/events/event-img3.jpg"
                },
                {
                    title: "Java programming masterclass name for software developers",
                    image: "/images/events/event-img3.jpg"
                },
            ],
        };
    },
    components: { BlogCard, EventCard, Breadcrumb }
}
</script>