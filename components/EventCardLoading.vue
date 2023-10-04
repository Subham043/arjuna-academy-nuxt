<template>
    <div class="row justify-content-center">
        <div v-for="i in count" :key="i" class="col-lg-6 col-md-6">
            <el-skeleton style="width: 100%" animated>
                <template slot="template">
                    <div class="event-item">
                        <div class="event-img" style="width: 40%;">
                            <el-skeleton-item variant="image" style="width: 100%; height: 140px;" />
                        </div>
                        <div class="event-content" style="width: 60%;">
                            <el-skeleton-item variant="p" style="width: 100%" />
                            <br/>
                            <el-skeleton-item variant="text" style="width: 100%;" />
                            <br/>
                            <el-skeleton-item variant="text" style="width: 100%;" />
                            <br/>
                            <el-skeleton-item variant="text" style="width: 100%;" />
                            <br/>
                        </div>
                    </div>
                </template>
            </el-skeleton>
        </div>
    </div>
</template>

<script>
export default {
    name: 'EventCardLoading',
    props: {
        count: {
            type: Number,
            default: 0,
        },
    }
}
</script>