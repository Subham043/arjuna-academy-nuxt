<template>
    <div class="achiever-detail">
        <div class="achiever-detail-container pb-0">
            <img :data-src="image"
            :alt="image_alt" :title="image_title"
            class="img-responsive" v-lazy-load>
            <h5 v-html-safe="name" />
        </div>
        <h3 v-html-safe="rank" />
        <div class="achiever-detail-container pt-0">
            <p v-html-safe="college" />
        </div>
    </div>
</template>

<script>
export default {
    name: 'AchieverStudentCardComponent',
    props: {
        image: {
            type: String,
            default: '',
        },
        name: {
            type: String,
            default: '',
        },
        rank: {
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
        college: {
            type: String,
            default: '',
        },
    },
}
</script>

<style scoped>
.achiever-detail {
    background-color: #f9f9f9;
    text-align: center;
    margin-bottom: 30px;
    clip-path: polygon(50% 0,100% 0,100% 99%,50% 85%,0 100%,0 0);
    min-height: 375px;
    height: 375px;
}

.achiever-detail-container{
    padding: 15px 30px;
}
.achiever-detail img {
    width: 55%;
    border: 2px solid #D7C167;
}
.achiever-detail h5 {
    font-weight: 700;
    font-size: 17px;
    padding: 10px 0;
    margin: 0;
}
.achiever-detail h3 {
    font-size: 15px;
    color: #fff;
    background: #304557;
    padding: 10px;
    font-weight: 700;
    text-align: center;
}
.tab-filter p {
    font-size: 14px;
    text-align: center;
    padding: 0 10%;
    font-weight: 620;
}
.achiever-detail p {
    font-weight: 700;
}

@media only screen and (max-width:767px) {
    .achiever-detail {
        min-height: 445px;
        height: 445px;
    }
}
</style>