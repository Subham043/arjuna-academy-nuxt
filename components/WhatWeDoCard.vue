<template>
    <div class="featured-area pt-70 pb-70">
        <div class="container">
            <div class="row align-items-center mb-45">
                <div class="col-lg-8 col-md-9">
                    <div class="section-title mt-rs-20">
                        <span>WHAT WE DO</span>
                        <h2>{{ heading }}</h2>
                    </div>
                </div>
                <div class="col-lg-4 col-md-3 text-end">
                    <NuxtLink to="/mission-vision" class="default-btn border-radius-50">Mission & Vision</NuxtLink>
                </div>
            </div>
            <div class="row">
                <FeatureCardLoading v-if="loading" :count="6" />
                <div v-if="!loading && feature.length>0" v-for="(item, i) in feature" :key="i" class="col-lg-4 col-6">
                    <div class="featured-item-two">
                        <div class="feature-icon-holder">
                            <img :data-src="item.image" :alt="item.title" :title="item.title" v-lazy-load>
                            <h3 v-html-safe="item.title" />
                        </div>
                        <p v-html-safe="item.description" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'WhatWeDoCardComponent',
    props: {
        loading: {
            type: Boolean,
            default: true,
        },
        heading: {
            type: String,
            default: '',
        },
        feature: {
            type: Array,
            default: [],
        },
    },
    components: { 
        FeatureCardLoading: () => import('~/components/FeatureCardLoading.vue')
    }
}
</script>