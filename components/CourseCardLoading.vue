<template>
    <div class="row justify-content-center">
        <div  v-for="i in count" :key="i" class="col-lg-4 col-md-6">
            <el-skeleton style="width: 100%" animated>
                <template slot="template">
                    <el-skeleton-item variant="rect" style="width: 100%; height: 340px;" />
                </template>
            </el-skeleton>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CourseCardLoadingComponent',
    props: {
        count: {
            type: Number,
            default: 0,
        },
    }
}
</script>