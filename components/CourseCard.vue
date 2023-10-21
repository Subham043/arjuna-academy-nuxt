<template>
    <div class="courses-item">
        <img :data-src="image" :alt="image_alt" :title="image_title" v-lazy-load/>
        <div class="content">
            <div class="bottom-content align-items-center">
                <p class="tag-btn" v-html="className" />
            </div>
            <h3 v-html="title" />
            <p v-html="description" />
            <hr>
            <div class="bottom-content align-items-center">
                <el-dropdown>
                    <NuxtLink to="/" class="default-btn two border-radius-50 m-0" aria-hidden="true" aria-label="Enroll Now">Enroll Now</NuxtLink>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item v-for="(item, i) in branches" 
                            :key="i">
                            <NuxtLink :to="`/${item.slug}/courses/${slug}`" class="text-dark" aria-hidden="true" :aria-label="item.name" v-html="item.name" />
                        </el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
                <el-dropdown>
                    <NuxtLink to="/" class="default-btn border-radius-50 mr-2" aria-hidden="true" aria-label="Request Callback">Request Callback</NuxtLink>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item v-for="(item, i) in branches" 
                            :key="i">
                            <NuxtLink :to="`/${item.slug}/courses/${slug}`" class="text-dark" aria-hidden="true" :aria-label="item.name" v-html="item.name" />
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