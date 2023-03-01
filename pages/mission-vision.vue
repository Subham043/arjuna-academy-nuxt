<template>
    <div>
        <div class="inner-banner inner-banner-bg5">
            <div class="container">
                <div class="inner-title text-center">
                    <h3>Mission & Vision</h3>
                    <ul>
                        <li>
                            <a href="index.html">Home</a>
                        </li>
                        <li>Mission & Vision</li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="faq-area pt-100 pb-70">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6">
                        <div class="faq-img">
                            <img src="/images/faq-img.jpg" alt="faq" />
                            <div class="shape">
                                <img src="/images/faq-shape.png" alt="Faq" />
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="faq-accordion pl-20">
                            <ul class="accordion">
                                <li class="accordion-item">
                                    <h2 class="accordion-title active">
                                        Mission
                                    </h2>
                                    <div class="accordion-content show">
                                        <p>
                                            To provide cost-effective world class education in order to create professionally superior manpower and to instil within students’ deep foundational values of good character to bring out Principle-Centred Leaders in the society.
                                        </p>
                                    </div>
                                </li>
                                <li class="accordion-item">
                                    <h2 class="accordion-title active">
                                        Vision
                                    </h2>
                                    <div class="accordion-content show">
                                        <p>
                                            To become leaders in the field of education and create a Brand of Principle centred Teachers, leaders and entrepreneurs for creating a sustainable, self- sufficient community.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>


export default {
    name: "FaqPage",
    layout: "MainPageLayout",
    data() {
        return {};
    },
    mounted() {
        // eslint-disable-next-line nuxt/no-env-in-hooks
        if (process.client) {
            this.$scrollTo("#__nuxt", 0, { force: true });
        }
    },
}
</script>