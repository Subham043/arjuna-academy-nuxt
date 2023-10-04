<template>
    <div class="row justify-content-center testimonials-slider-two">
        <div v-for="i in count" :key="i" class="col-lg-4 col-md-6 col-sm-12">
            <el-skeleton style="width: 100%" animated>
                <template slot="template">
                    <div class="testimonials-card-two">
                        <div class="rating">
                            <i v-for="i in 5" :key="i" class="ri-star-fill"></i>
                        </div>
                        <el-skeleton-item variant="text" style="width: 100%;" />
                        <br/>
                        <el-skeleton-item variant="text" style="width: 100%;" />
                        <br/>
                        <div class="content px-0">
                            <el-skeleton-item variant="circle" style="width: 100px; height: 100px;" />
                            <el-skeleton-item variant="p" style="width: 50%" />
                            <br/>
                        </div>
                        <div class="quote"><i class="flaticon-quote"></i></div>
                    </div>
                </template>
            </el-skeleton>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TestimonialCardLoading',
    props: {
        count: {
            type: Number,
            default: 0,
        },
    }
}
</script>