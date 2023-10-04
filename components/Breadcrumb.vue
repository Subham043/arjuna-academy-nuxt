<template>
    <div class="inner-banner inner-banner-bg">
        <div class="container">
            <div class="inner-title text-center">
                <h3>{{ title }}</h3>
                <ul>
                    <li>
                        <NuxtLink to="/">Home</NuxtLink>
                    </li>
                    <li v-for="(item, i) in pages" :key="i">
                        <NuxtLink v-if="(i+1)!=pages.length" :to="item.link">{{ item.name }}</NuxtLink>
                        <template v-else >
                            &nbsp;{{ item.name }}
                        </template>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BreadcrumbComponent',
    props: {
        title: {
            type: String,
            default: '',
        },
        pages: {
            type: Array,
            default: [],
        },
    },
}
</script>