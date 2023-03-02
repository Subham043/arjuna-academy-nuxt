<template>
    <div class="inner-banner inner-banner-bg">
        <div class="container">
            <div class="inner-title text-center">
                <h3>{{ title }}</h3>
                <ul>
                    <li>
                        <NuxtLink to="/">Home</NuxtLink>
                    </li>
                    <li>{{ title }}</li>
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
    },
}
</script>