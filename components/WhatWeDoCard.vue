<template>
    <div class="featured-area pb-70">
        <div class="container">
            <div class="row align-items-center mb-45">
                <div class="col-lg-8 col-md-9">
                    <div class="section-title mt-rs-20">
                        <span>WHAT WE DO</span>
                        <h2>Why Arjunaa Academy for Achievers is the Top Coaching Centre in Bangalore?</h2>
                    </div>
                </div>
                <div class="col-lg-4 col-md-3 text-end">
                    <NuxtLink to="/mission-vision" class="default-btn border-radius-50">Mission & Vision</NuxtLink>
                </div>
            </div>
            <div class="row">
                <div v-if="loading" v-for="i in 6" :key="i" class="col-lg-4 col-md-6 col-sm-12">
                    <el-skeleton style="width: 100%" animated>
                        <template slot="template">
                            <div class="counter-card box-shadow px-1">
                                <el-skeleton-item variant="rect" style="width: 100px; height: 100px;" />
                                <el-skeleton-item variant="p" style="width: 50%" />
                                <br/>
                                <el-skeleton-item variant="p" style="width: 100%" />
                                <br/>
                            </div>
                        </template>
                    </el-skeleton>
                </div>
                <div v-if="!loading && feature.length>0" v-for="(item, i) in feature" :key="i" class="col-lg-4 col-6">
                    <div class="featured-item-two">
                        <div class="feature-icon-holder">
                            <img :src="item.image">
                            <h3>{{ item.title }}</h3>
                        </div>
                        <p>{{ item.description }}</p>
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
        feature: {
            type: Array,
            default: [],
        },
    },
}
</script>