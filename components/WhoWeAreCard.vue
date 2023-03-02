<template>
    <div :class="`enrolled-area-two ${first ? 'pt-100' : ''} pb-70`">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6">
                    <div class="enrolled-img-three mb-30 pr-20">
                        <img :src="image" alt="Enrolled" />
                        <div class="enrolled-img-content">
                            <i class="flaticon-discount"></i>
                            <div class="content">
                                <h3>Get 40% off</h3>
                                <p>Every course</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="enrolled-content mb-30">
                        <div class="section-title">
                            <span>WHO WE ARE</span>
                            <h2>
                                {{ heading }}
                            </h2>
                            <p v-for="(data, i) in detail" :key="i">
                                {{ data }}
                            </p>
                        </div>
                        <NuxtLink to="/leadership-team" class="default-btn border-radius-50">View Leaders</NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'WhoWeAreCardComponent',
    props: {
        first: {
            type: Boolean,
            default: false,
        },
        image: {
            type: String,
            default: '',
        },
        heading: {
            type: String,
            default: '',
        },
        detail: {
            type: Array,
            default: [],
        },
    },
}
</script>