<template>
    <div>
        <template v-if="!loading">
            <div :class="`enrolled-area-two ${first ? 'pt-70' : ''} pb-70`">
                <div class="container">
                    <div class="row align-items-center">
                        <div v-if="heading_center" class="col-lg-12">
                            <div class="section-title text-center mb-3">
                                <span v-html-safe="title" />
                                <h2 v-html-safe="heading" />
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="enrolled-img-three mb-30 pr-20">
                                <img :src="image" :alt="image_alt" :title="image_title" />
                                <div class="enrolled-img-content">
                                    <img :src="counter_image" />
                                    <div class="content">
                                        <h3 v-html-safe="counter_title" />
                                        <p v-html-safe="counter_description" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="enrolled-content mb-30">
                                <div class="section-title">
                                    <span v-if="!heading_center" v-html-safe="title" />
                                    <h2 v-if="!heading_center" v-html-safe="heading" />
                                    <div v-html-safe="detail" />
                                </div>
                                <NuxtLink to="/leadership-team" class="default-btn border-radius-50">View Leaders</NuxtLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </template>
        <template v-else>
            <el-skeleton style="width: 100%" animated>
                <template slot="template">
                    <div :class="`enrolled-area-two pt-100 pb-70`">
                        <div class="container">
                            <div class="row align-items-center">
                                <div class="col-lg-6">
                                    <div class="enrolled-img-three mb-30 pr-20">
                                        <el-skeleton-item variant="image" style="width: 100%; height: 440px;" />
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="enrolled-content mb-30">
                                        <div class="section-title">
                                            <el-skeleton-item variant="p" style="width: 50%" />
                                            <br/>
                                            <el-skeleton-item variant="text" style="width: 100%;" />
                                            <br/>
                                            <el-skeleton-item variant="text" style="width: 100%;" />
                                            <br/>
                                            <el-skeleton-item variant="text" style="width: 100%;" />
                                            <br/>
                                            <el-skeleton-item variant="text" style="width: 100%;" />
                                            <br/>
                                            <el-skeleton-item variant="text" style="width: 100%;" />
                                            <br/>
                                            <el-skeleton-item variant="text" style="width: 100%;" />
                                            <br/>
                                            <el-skeleton-item variant="text" style="width: 100%;" />
                                            <br/>
                                            <el-skeleton-item variant="text" style="width: 100%;" />
                                            <br/>
                                            <el-skeleton-item variant="text" style="width: 100%;" />
                                            <br/>
                                            <el-skeleton-item variant="text" style="width: 100%;" />
                                            <br/>
                                            <el-skeleton-item variant="text" style="width: 50%;" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </template>
            </el-skeleton>
        </template>
    </div>
</template>

<script>
export default {
    name: 'WhoWeAreCardComponent',
    props: {
        heading_center: {
            type: Boolean,
            default: false,
        },
        first: {
            type: Boolean,
            default: false,
        },
        loading: {
            type: Boolean,
            default: true,
        },
        image: {
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
        heading: {
            type: String,
            default: '',
        },
        title: {
            type: String,
            default: '',
        },
        counter_description: {
            type: String,
            default: '',
        },
        counter_title: {
            type: String,
            default: '',
        },
        counter_image: {
            type: String,
            default: '',
        },
        detail: {
            type: String,
            default: '',
        },
    },
}
</script>