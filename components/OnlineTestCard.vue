<template>
    <div class="courses-item online-test-item">
        <NuxtLink :to="`/online-tests/${slug}`" aria-hidden="true" :aria-label="title">
            <img :data-src="image"  :alt="image_alt" :title="image_title" v-lazy-load/>
        </NuxtLink>
        <div class="content">
            <div class="bottom-content align-items-center justify-content-end online-test-tag">
                <p v-if="is_paid" class="tag-btn">&#8377;{{amount}}</p>
                <p v-else class="tag-btn"> Free </p>
            </div>
            <h3 class="text-center mb-0">
                <NuxtLink :to="`/online-tests/${slug}`" aria-hidden="true" :aria-label="title" v-html="title" />
            </h3>
            <p v-html="description" />
            <NuxtLink :to="`/online-tests/${slug}`" class="default-btn two border-radius-50 m-0" aria-hidden="true" aria-label="Enroll Now">
                <template v-if="!enrollment">
                    Take Now
                </template>
                <template v-else>
                    <template v-if="enrollment.enrollment_type=='Purchased'">
                        <template v-if="enrollment.is_enrolled && enrollment.test_status=='Pending'">
                            Start Now
                        </template>
                        <template v-else-if="enrollment.is_enrolled && enrollment.test_status=='Ongoing'">
                            Resument Test
                        </template>
                        <template v-else-if="enrollment.is_enrolled && enrollment.test_status=='Completed'">
                            View Test Report
                        </template>
                        <template v-else-if="enrollment.is_enrolled && enrollment.test_status=='Eliminated'">
                            View Elimination Report
                        </template>
                        <template v-else>
                            Take Now
                        </template>
                    </template>
                    <template v-else>
                        <template v-if="enrollment.is_enrolled && enrollment.test_status=='Pending'">
                            Start Now
                        </template>
                        <template v-else-if="enrollment.is_enrolled && enrollment.test_status=='Ongoing'">
                            Resument Test
                        </template>
                        <template v-else-if="enrollment.is_enrolled && enrollment.test_status=='Completed'">
                            View Test Report
                        </template>
                        <template v-else-if="enrollment.is_enrolled && enrollment.test_status=='Eliminated'">
                            View Elimination Report
                        </template>
                        <template v-else>
                            Take Now
                        </template>
                    </template>
                </template>
            </NuxtLink>
        </div>
    </div>
</template>

<script>
export default {
    name: 'OnlineTestCardComponent',
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
        amount: {
            type: Number | null,
            default: null,
        },
        is_paid: {
            type: Boolean,
            default: false,
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
        enrollment: {
            type: Object | null,
            default: null,
        },
    },
}
</script>
<style scoped>
.online-test-item{
    position: relative;
}
.online-test-item .content{
    position: static;
}
.online-test-tag{
    position:absolute;
    width:100%;
    top:0;
    left:0;
}
.online-test-tag .tag-btn{
    background-color: var(--mainColor);
    color: var(--whiteColor);
}
</style>