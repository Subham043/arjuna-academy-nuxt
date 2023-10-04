<template>
    <div class="courses-item">
        <img :data-src="image" :alt="image_alt" :title="image_title" width="412" height="215" v-lazy-load/>
        <div class="content">
            <div class="bottom-content align-items-center">
                <p class="tag-btn" v-html-safe="className" />
            </div>
            <h3 v-html-safe="title" />
            <p v-html-safe="description" />
            <hr>
            <div class="bottom-content align-items-center">
                <el-dropdown>
                    <NuxtLink to="/" target="_blank" class="default-btn two border-radius-50 m-0">Enroll Now</NuxtLink>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item v-for="(item, i) in branches" 
                            :key="i">
                            <NuxtLink :to="`/${item.slug}/courses/${slug}`" class="text-dark" v-html-safe="item.name" />
                        </el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
                <el-dropdown>
                    <NuxtLink to="/" class="default-btn border-radius-50 mr-2">Request Callback</NuxtLink>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item v-for="(item, i) in branches" 
                            :key="i">
                            <NuxtLink :to="`/${item.slug}/courses/${slug}`" class="text-dark" v-html-safe="item.name" />
                        </el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CourseCardComponent',
    props: {
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
        className: {
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
        slug: {
            type: String,
            default: '',
        },
        branches: {
            type: Array,
            default: [],
        },
    },
}
</script>