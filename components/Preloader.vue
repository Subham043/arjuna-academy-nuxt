<template>
    <div v-if="show" id="preloader-main" class="preloader-main">
        <div class="w-100 text-center mt-3">
            <img src="/images/logos/new-logo.webp" id="logo-one" class="logo-loader" alt="Logo" data-not-lazy/>
            <div class="loadingio-spinner-double-ring-i5dvv3lz8da">
                <div class="ldio-9qwgbpz47o">
                    <div></div>
                    <div></div>
                    <div>
                        <div></div>
                    </div>
                    <div>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PreloaderComponent',
    data() {
        return {
            show: true,
        }
    },
    mounted() {
        // eslint-disable-next-line nuxt/no-env-in-hooks
        if (process.client) {
            this.show = false
        }
    },
    methods: {
        hidePreloader(){
            this.show = true
        }
    }
}
</script>

<style scoped>
@keyframes ldio-9qwgbpz47o {
    0% {
        transform: rotate(0)
    }

    100% {
        transform: rotate(360deg)
    }
}

.ldio-9qwgbpz47o div {
    box-sizing: border-box !important
}

.ldio-9qwgbpz47o>div {
    position: absolute;
    width: 144px;
    height: 144px;
    top: 28px;
    left: 28px;
    border-radius: 50%;
    border: 16px solid #000;
    border-color: #6E8B55 transparent #6E8B55 transparent;
    animation: ldio-9qwgbpz47o 1s linear infinite;
}

.ldio-9qwgbpz47o>div:nth-child(2),
.ldio-9qwgbpz47o>div:nth-child(4) {
    width: 108px;
    height: 108px;
    top: 46px;
    left: 46px;
    animation: ldio-9qwgbpz47o 1s linear infinite reverse;
}

.ldio-9qwgbpz47o>div:nth-child(2) {
    border-color: transparent #EACF6C transparent #EACF6C
}

.ldio-9qwgbpz47o>div:nth-child(3) {
    border-color: transparent
}

.ldio-9qwgbpz47o>div:nth-child(3) div {
    position: absolute;
    width: 100%;
    height: 100%;
    transform: rotate(45deg);
}

.ldio-9qwgbpz47o>div:nth-child(3) div:before,
.ldio-9qwgbpz47o>div:nth-child(3) div:after {
    content: "";
    display: block;
    position: absolute;
    width: 16px;
    height: 16px;
    top: -16px;
    left: 48px;
    background: #6E8B55;
    border-radius: 50%;
    box-shadow: 0 128px 0 0 #6E8B55;
}

.ldio-9qwgbpz47o>div:nth-child(3) div:after {
    left: -16px;
    top: 48px;
    box-shadow: 128px 0 0 0 #6E8B55;
}

.ldio-9qwgbpz47o>div:nth-child(4) {
    border-color: transparent;
}

.ldio-9qwgbpz47o>div:nth-child(4) div {
    position: absolute;
    width: 100%;
    height: 100%;
    transform: rotate(45deg);
}

.ldio-9qwgbpz47o>div:nth-child(4) div:before,
.ldio-9qwgbpz47o>div:nth-child(4) div:after {
    content: "";
    display: block;
    position: absolute;
    width: 16px;
    height: 16px;
    top: -16px;
    left: 30px;
    background: #EACF6C;
    border-radius: 50%;
    box-shadow: 0 92px 0 0 #EACF6C;
}

.ldio-9qwgbpz47o>div:nth-child(4) div:after {
    left: -16px;
    top: 30px;
    box-shadow: 92px 0 0 0 #EACF6C;
}

.loadingio-spinner-double-ring-i5dvv3lz8da {
    width: 200px;
    height: 200px;
    display: inline-block;
    overflow: hidden;
    background: #ffffff;
}

.ldio-9qwgbpz47o {
    width: 100%;
    height: 100%;
    position: relative;
    transform: translateZ(0) scale(1);
    backface-visibility: hidden;
    transform-origin: 0 0;
    /* see note above */
}

.ldio-9qwgbpz47o div {
    box-sizing: content-box;
}

.logo-loader{
    object-fit: contain;
    height: 160px;
    display: block;
    margin: auto;
}

.preloader-main{
    padding: 20px;
    display: grid;
    place-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 999999;
    background-color: white;
}
</style>